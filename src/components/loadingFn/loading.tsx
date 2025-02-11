import { PacmanLoader } from "react-spinners";
import { Typewriter } from "react-simple-typewriter";

const LoadingComp = () => {
  return (
    <div className="z-50 bg-black w-screen h-screen flex flex-col items-center justify-center gap-6 p-4 box-border">
      {/* Pacman Loader */}
      <PacmanLoader color="#e348ab" size={40} />

      {/* Typing Animation Text */}
      <h2 className="text-lg md:text-2xl font-semibold text-[#e348ab] text-center animate-[glow_2s_infinite_alternate]">
        <Typewriter
          words={["Good things take time... Almost there!"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
        />
      </h2>

      {/* Tailwind orqali glow effekti qo‘shish */}
      <style>
        {`
          @keyframes glow {
            0% { text-shadow: 0 0 5px #e348ab, 0 0 10px #e348ab; }
            50% { text-shadow: 0 0 15px #ff69b4, 0 0 30px #ff1493; }
            100% { text-shadow: 0 0 5px #e348ab, 0 0 10px #e348ab; }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingComp;
