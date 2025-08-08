import React from 'react';

function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-black">
      {/* Dynamic Animated Background with Swirling Lines */}
      <div className="absolute inset-0 z-0 w-full h-full animate-swirling-lines" />
      <div className="absolute inset-0 z-10 w-full h-full animate-glow-pulse before:content-[''] before:absolute before:inset-0 before:bg-[#5A189A] before:opacity-10 before:rounded-full before:blur-3xl" />
      
      {/* Main Logo Section */}
      <img src="converse2k25Logo.png" alt="Converse 2k25 Logo" className="relative z-40 w-1/2 h-auto sm:w-1/4 md:w-1/5 lg:w-1/4 mt-4 animate-slideUp" />
      
      {/* SponserSection - Integrated and adapted */}
      <section className="relative z-40 w-full mt-8">
        {/* Decorative blur effect - Original from SponserSection */}
        <div className="w-[300px] sm:w-[600px] h-[600px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full blur-3xl bg-gradient-to-br from-slate-900 to-violet-900 opacity-40"></div>
        
        {/* Title Sponsors */}
        <div className="mt-12 animate-slideUp">
          <h2 className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center animate-glitch-flicker">Title Sponsors</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 m-4 animate-fadeInDelay">
            <a 
              href={"https://www.codewinglet.com/"}
              target="_blank"
              title="CodeWinglet"
              className="aspect-video scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg flex items-center justify-center"
            >
              <img src="/sponsers/codewinglet.svg" alt="CodeWinglet" loading="lazy" />
            </a>
            <a
              href={"https://www.instagram.com/v.s.overseas/"}
              target="_blank"
              title="V.S Overseas"
              className="aspect-video scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg flex items-center justify-center"
            >
              <img src="/sponsers/vs-overseas.png" alt="V.S Overseas" loading="lazy" />
            </a>
          </div>
        </div>

        {/* Tech Partner & Co Sponsor */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
          <div className="mt-12 grid grid-cols-1 animate-slideUp">
            <h3 className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center animate-glitch-flicker">Tech partner</h3>
            <div className="flex flex-col scale-75 md:flex-row justify-center items-center md:gap-12 m-4 animate-fadeInDelay">
              <img src="/sponsers/msi.png" alt="MSI" />
            </div>
          </div>
          <div className="mt-12 animate-slideUp">
            <h3 className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center capitalize pb-2 animate-glitch-flicker">
              co sponsor
            </h3>
            <div className="flex flex-col scale-75 md:flex-row justify-center items-center md:gap-12 m-4 animate-fadeInDelay">
              <img src="/sponsers/ims.png" alt="IMS" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Gifting Sponsor */}
        <div className="mt-12 animate-slideUp">
          <h3 className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center capitalize pb-2 animate-glitch-flicker">
            gifting sponsor
          </h3>
          <div className="mt-6 animate-fadeInDelay">
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 m-4">
              <img
                src="/sponsers/lamont.png"
                alt="Lamont"
                className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Supportive Sponsors */}
        <div className="mt-12 animate-slideUp">
          <h3 className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center capitalize animate-glitch-flicker">
            supportive sponsors
          </h3>
          <div className="mt-6 animate-fadeInDelay">
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 m-4">
              <img
                src="/sponsers/solex.png"
                alt="Solex"
                className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
                loading="lazy"
              />
              <img
                src="/sponsers/crony.png"
                alt="Crony"
                className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
                loading="lazy"
              />
              <img
                src="/sponsers/samsung.png"
                alt="Samsung"
                className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
                loading="lazy"
              />
              <img
                src="/sponsers/chaipartner.png"
                alt="Chai Partner"
                className="aspect-video scale-75 md:scale-100 bg-white w-4/5 md:w-1/4 flex items-center justify-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reused CSS keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeInDelay {
            0% { opacity: 0; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes fadeInDelay2 {
            0% { opacity: 0; }
            60% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
          .animate-slideUp { animation: slideUp 1s ease-in-out; }
          .animate-fadeInDelay { animation: fadeInDelay 1.5s ease-in-out; }
          .animate-fadeInDelay2 { animation: fadeInDelay2 1.5s ease-in-out; }
          .animate-pulse { animation: pulse 2s infinite; }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .animate-bounce { animation: bounce 2s infinite; }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes glow-pulse {
            0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.1; }
            50% { transform: scale(1.2) translate(-50%, -50%); opacity: 0.2; }
          }
          .animate-glow-pulse::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 80%;
            height: 80%;
            background: rgba(90, 24, 154, 0.5); /* A more subtle purple */
            border-radius: 50%;
            filter: blur(80px);
            animation: glow-pulse 5s infinite ease-in-out;
            z-index: -1;
          }
          @keyframes glitch-flicker {
            0% {
              opacity: 1;
              text-shadow: none;
            }
            5% {
              opacity: 0.8;
              text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);
              transform: skewX(-2deg);
            }
            10% {
              opacity: 1;
              text-shadow: none;
              transform: skewX(0);
            }
            15% {
              opacity: 0.9;
              text-shadow: -2px -2px 5px rgba(255, 255, 255, 0.5);
              transform: skewX(2deg);
            }
            20% {
              opacity: 1;
              text-shadow: none;
              transform: skewX(0);
            }
            100% {
              opacity: 1;
              text-shadow: none;
            }
          }
          .animate-glitch-flicker {
            animation: glitch-flicker 5s infinite;
          }

          @keyframes swirling-lines {
            0% {
              transform: rotate(0deg);
              box-shadow: 0 0 50px 10px #8A2BE2, 0 0 80px 20px #E500F9;
            }
            50% {
              transform: rotate(180deg);
              box-shadow: 0 0 60px 15px #9400D3, 0 0 90px 25px #A500C5;
            }
            100% {
              transform: rotate(360deg);
              box-shadow: 0 0 50px 10px #8A2BE2, 0 0 80px 20px #E500F9;
            }
          }

          .animate-swirling-lines {
            width: 150vw;
            height: 150vw;
            background: radial-gradient(at 50% 50%, transparent 50%, #1a0033 100%);
            border-radius: 50%;
            animation: swirling-lines 15s linear infinite;
            filter: blur(20px);
            opacity: 0.7;
          }

        `}
      </style>
    </div>
  );
}

export default HomePage;
