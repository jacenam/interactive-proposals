export default function FeatureCard({ icon, title, description, color = '#00C73C' }) {
  return (
    <div className="bg-[#f4f4f4] p-6 border-l-[3px] hover:bg-[#e0e0e0] transition-colors" style={{ borderLeftColor: color }}>
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-semibold text-[#161616] text-sm mb-2">{title}</h3>
      <p className="text-sm text-[#525252] leading-relaxed">{description}</p>
    </div>
  )
}
