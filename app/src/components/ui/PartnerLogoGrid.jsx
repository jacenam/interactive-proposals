export default function PartnerLogoGrid({ partners, title }) {
  return (
    <div>
      {title && <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6f6f6f] mb-6 text-center">{title}</h3>}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((p, i) => (
          <div key={i} className="flex items-center justify-center w-24 h-16 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all">
            <img src={p.logo} alt={p.name} className="max-h-10 max-w-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
