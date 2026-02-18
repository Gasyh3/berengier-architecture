export default function ProjectionVideoSplit() {
  return (
    <section className="h-[300px] w-full bg-surface lg:h-screen lg:w-screen">
      <div className="grid h-full w-full grid-cols-[45%_55%] lg:grid-cols-[40%_60%]">
        {/* VIDEO */}
        <div className="h-full w-full p-1">
          <div className="relative h-full w-full overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/assets/videos/vd222.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* TEXTE */}
        <div className="h-full w-full p-1">
          <div className="h-full w-full bg-[#B9AB8E]">
            <div className="flex h-full items-center">
              <div className="w-full max-w-[22rem] px-4 sm:max-w-md sm:px-8 lg:max-w-2xl lg:px-16">
                <h2 className="font-racoleta leading-[1.05] tracking-tight">
                  <span className="block text-[clamp(1.4rem,4.2vw,3rem)] font-semibold text-black lg:text-[clamp(3rem,5vw,5.5rem)]">
                    Pensées pour
                  </span>
                  <span className="block text-[clamp(1.4rem,4.2vw,3rem)] font-semibold text-black lg:text-[clamp(3rem,5vw,5.5rem)]">
                    vendre,
                  </span>
                  <span className="hidden text-[clamp(1.6rem,4.8vw,3.2rem)] font-bold text-white lg:block lg:text-[clamp(3rem,5vw,5.5rem)]">
                    Conçues pour
                  </span>
                  <span className="hidden text-[clamp(1.6rem,4.8vw,3.2rem)] font-bold text-white lg:block lg:text-[clamp(3rem,5vw,5.5rem)]">
                    convaincre.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
