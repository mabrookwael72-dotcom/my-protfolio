export default function Navbare() {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white px-6 h-[10vh] fixed top-0 left-0 z-50 border-b border-white/10 shadow-lg shadow-black/30 backdrop-blur">

        {/* الشمال: الصورة والاسم */}
        <div className="flex items-center gap-3">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500">
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-slate-950"
              src="/profile.jpg.jpeg"
              alt="Profile"
            />
          </div>
          <p className="font-bold text-lg bg-gradient-to-r from-white via-blue-200 to-violet-300 bg-clip-text text-transparent">
            Mosab Wael
          </p>
        </div>

        {/* اليمين: ممكن تحط هنا زرار */}
        <div className="hidden sm:block">
          <span className="text-sm px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 font-semibold shadow-lg shadow-blue-500/30">
            Front-End Developer
          </span>
        </div>
       
      </div>
      {/* ده عشان المحتوى ميدخلش تحت الناف بار */}
      <div className="h-[10vh]"></div>
    </>
  );
}