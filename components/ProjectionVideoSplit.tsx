export default function ProjectionVideoSplit() {
  return (
    <section className="w-screen h-screen bg-surface">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-[40%_60%]">
        <div className="relative w-full aspect-square overflow-hidden lg:aspect-auto lg:h-full">
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

        <div className="w-full aspect-square bg-[#B9AB8E] lg:aspect-auto lg:h-full">
          <div className="flex h-full items-center">
            <div className="max-w-[22rem] px-6 sm:max-w-md sm:px-10 lg:max-w-2xl lg:px-16">
              <h2 className="font-racoleta leading-[1.05] tracking-tight">
                <span className="block text-[clamp(2rem,7vw,3rem)] font-semibold text-black lg:text-[clamp(3rem,5vw,5.5rem)]">
                  Pensées pour
                </span>
                <span className="block text-[clamp(2rem,7vw,3rem)] font-semibold text-black lg:text-[clamp(3rem,5vw,5.5rem)]">
                  vendre,
                </span>
                <span className="block text-[clamp(2.2rem,8vw,3.2rem)] font-bold text-white lg:text-[clamp(3rem,5vw,5.5rem)]">
                  Conçues pour
                </span>
                <span className="block text-[clamp(2.2rem,8vw,3.2rem)] font-bold text-white lg:text-[clamp(3rem,5vw,5.5rem)]">
                  convaincre.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
