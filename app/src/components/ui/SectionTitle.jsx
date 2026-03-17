export default function SectionTitle({ overline, title, description, center = false, light = false }) {
  return (
    <div className={`mb-10 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {overline && (
        <span className="text-xs font-semibold uppercase tracking-widest text-[#00C73C] mb-2 block">{overline}</span>
      )}
      <h2 className={`text-2xl lg:text-3xl font-semibold mb-3 ${light ? 'text-white' : 'text-[#161616]'}`}>{title}</h2>
      {description && (
        <p className={`text-base leading-relaxed ${light ? 'text-[#a8a8a8]' : 'text-[#525252]'}`}>{description}</p>
      )}
    </div>
  )
}
