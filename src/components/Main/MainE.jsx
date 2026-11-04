import Typewriter from 'typewriter-effect';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

export default function MainE() {
  return (
    <>
      {/* القسم الرئيسي - الهيدر والصورة */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Hi I am Mosab - فوق خالص */}
          <p className="inline-block px-5 py-2 mb-5 rounded-full text-lg font-semibold bg-white/5 border border-white/10 backdrop-blur">
            👋 Hi, I am <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Mosab</span>
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-blue-200 to-violet-300 bg-clip-text text-transparent">
            Mosab Wael Mohamed
          </h1>
          
          {/* تأثير الكتابة حرفاً بحرف للمسمى الوظيفي */}
          <div className="text-3xl font-semibold h-12 flex items-center justify-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: [
                  'Front-End Developer',
                  'React.js Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          <p className="text-gray-400 max-w-xl mx-auto mt-3">
            I build modern, fast and beautiful websites with React & Tailwind.
          </p>

          {/* صورة الشخصية */}
          <div className="w-48 h-48 mx-auto mt-6 overflow-hidden rounded-full p-1 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-blue-500/30">
            <img 
              className="w-full h-full object-cover rounded-full border-4 border-slate-950" 
              src="/profile.jpg.jpeg" 
              alt="Mosab Wael" 
            />
          </div>

          {/* زرارين تحت الصورة */}
          <div className="flex justify-center gap-4 mt-8">
            <a href="#skills" className="px-6 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform">
              View My Skills
            </a>
            <a href="#about" className="px-6 py-2.5 rounded-full font-bold border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
              About Me
            </a>
          </div>
        </div>
      </div>

      {/* قسم المهارات - Skills Section */}
      <div id="skills" className="bg-gradient-to-b from-blue-950 via-slate-950 to-slate-900 text-white py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Skills</h2>
        <p className="text-center text-gray-400 mb-10">Technologies I use to build awesome websites</p>
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300">
            <FaHtml5 className="text-6xl text-orange-500 mb-2" />
            <p className="text-xl font-bold">HTML5</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300">
            <FaCss3Alt className="text-6xl text-blue-500 mb-2" />
            <p className="text-xl font-bold">CSS3</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300">
            <FaJsSquare className="text-6xl text-yellow-400 mb-2" />
            <p className="text-xl font-bold">JavaScript</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300">
            <FaBootstrap className="text-6xl text-purple-500 mb-2" />
            <p className="text-xl font-bold">Bootstrap</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300">
            <RiTailwindCssFill className="text-6xl text-cyan-400 mb-2" />
            <p className="text-xl font-bold">Tailwind</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300">
            <FaReact className="text-6xl text-blue-400 mb-2" />
            <p className="text-xl font-bold">React</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300">
            <SiTypescript className="text-6xl text-blue-600 mb-2" />
            <p className="text-xl font-bold">TypeScript</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300">
            <SiNextdotjs className="text-6xl text-white mb-2" />
            <p className="text-xl font-bold">Next.js</p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 transition-all duration-300 col-span-2 sm:col-span-1">
            <FaSass className="text-6xl text-pink-500 mb-2" />
            <p className="text-xl font-bold">SASS</p>
          </div>
        </div>
      </div>

      {/* قسم المعلومات الشخصية */}
      <div id="about" className="bg-slate-950 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 rounded-2xl shadow-xl border border-white/10">
          <div className="w-full md:w-1/2 h-[360px] rounded-xl overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src="/profile.jpg.jpeg" 
              alt="Mosab Wael" 
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Personal Info</h3>
            <p><span className="font-semibold text-gray-400">Name:</span> Mosab Wael Mohamed</p>
            <p><span className="font-semibold text-gray-400">Position:</span> Front-End Developer</p>
            <p><span className="font-semibold text-gray-400">Home Address:</span> Cairo, Egypt</p>
            <p><span className="font-semibold text-gray-400">Education:</span> Faculty of Computer Science, Thebes Academy</p>
          </div>
        </div>
      </div>
    </>
  );
}