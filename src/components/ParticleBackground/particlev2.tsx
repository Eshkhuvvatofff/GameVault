import { useEffect, useRef } from "react";
import * as THREE from "three";

declare module 'three';

const Particles = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(60000 * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() * 2000) - 1000;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const materials: THREE.PointsMaterial[] = [];
    const parameters = [
      [[1, 1, 0.5], 5],
      [[0.95, 1, 0.5], 4],
      [[0.90, 1, 0.5], 3],
      [[0.85, 1, 0.5], 2],
      [[0.80, 1, 0.5], 1]
    ];

    parameters.forEach(([color, size]) => {
      const colorArray = color as number[];
      const material = new THREE.PointsMaterial({
        size,
        color: new THREE.Color(colorArray[0], colorArray[1], colorArray[2])
      });
      materials.push(material);

      const particles = new THREE.Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      scene.add(particles);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.00005;

      scene.children.forEach((object: THREE.Object3D, i:number) => {
        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      });

      materials.forEach((material, i) => {
        const color = parameters[i][0] as number[];
        const h = (360 * (color[0] + time) % 360) / 360;
        material.color.setHSL(h, color[1], color[2]);
      });

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full opacity-40 fixed h-full" />;
};

export default Particles;
