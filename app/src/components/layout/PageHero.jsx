export default function PageHero({ title, subtitle, description, color, icon }) {
  return (
    <section className="pt-12">
      <div className="bg-[#f4f4f4]">
        <div className="max-w-[1584px] mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{icon}</span>
              <span
                className="text-xs font-medium uppercase tracking-widest px-2 py-1"
                style={{ color: color, backgroundColor: `${color}15` }}
              >
                {subtitle}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#161616] mb-4 tracking-tight">{title}</h1>
            <p className="text-lg text-[#525252] leading-relaxed max-w-2xl">{description}</p>
            <div className="mt-8 w-16 h-[3px]" style={{ backgroundColor: color }} />
          </div>
        </div>
      </div>
    </section>
  )
}
