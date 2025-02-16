import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "stats.js";

const Particles: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      stats: Stats,
      geometry: THREE.BufferGeometry,
      particleCount: number,
      materials: THREE.PointsMaterial[] = [],
      mouseX = 0,
      mouseY = 0,
      windowHalfX: number,
      windowHalfY: number,
      cameraZ: number,
      parameters: any[],
      particles: THREE.Points,
      color: any,
      size: number;

    const init = () => {
      const HEIGHT = window.innerHeight;
      const WIDTH = window.innerWidth;
      windowHalfX = WIDTH / 2;
      windowHalfY = HEIGHT / 2;

      const fieldOfView = 75;
      const aspectRatio = WIDTH / HEIGHT;
      const nearPlane = 1;
      const farPlane = 3000;

      cameraZ = farPlane / 3;
      const fogHex = 0x000000;
      const fogDensity = 0.0007;

      camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
      camera.position.z = cameraZ;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(fogHex, fogDensity);

      geometry = new THREE.BufferGeometry();
      particleCount = 5400;

      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;
        positions[index] = Math.random() * 2000 - 1000;
        positions[index + 1] = Math.random() * 2000 - 1000;
        positions[index + 2] = Math.random() * 2000 - 1000;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      parameters = [
        [[1, 1, 0.5], 5],
        [[0.95, 1, 0.5], 4],
        [[0.90, 1, 0.5], 3],
        [[0.85, 1, 0.5], 2],
        [[0.80, 1, 0.5], 1],
      ];

      for (let i = 0; i < parameters.length; i++) {
        color = parameters[i][0];
        size = parameters[i][1];

        materials[i] = new THREE.PointsMaterial({
          size: size,
        });

        particles = new THREE.Points(geometry, materials[i]);
        particles.rotation.x = Math.random() * 6;
        particles.rotation.y = Math.random() * 6;
        particles.rotation.z = Math.random() * 6;

        scene.add(particles);
      }

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(WIDTH, HEIGHT);

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      stats = new Stats();
      (stats as any).domElement.style.display = "none";

      window.addEventListener("resize", onWindowResize, false);
      document.addEventListener("mousemove", onDocumentMouseMove, false);
      document.addEventListener("touchstart", onDocumentTouchStart, false);
      document.addEventListener("touchmove", onDocumentTouchMove, false);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
      stats.update();
    };

    const render = () => {
      const time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * 0.03;
      camera.position.y += (-mouseY - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];

        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      }

      for (let i = 0; i < materials.length; i++) {
        color = parameters[i][0];
        const h = (360 * (color[0] + time) % 360) / 360;
        materials[i].color.setHSL(h, color[1], color[2]);
      }

      renderer.render(scene, camera);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onDocumentTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const onDocumentTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Initialize and animate the scene
    init();
    animate();

    // Cleanup when component is unmounted
    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("touchstart", onDocumentTouchStart);
      document.removeEventListener("touchmove", onDocumentTouchMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      (stats as any).domElement.style.display = "none";
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh", position: "fixed", zIndex: -1 }} />;
};

export default Particles;
