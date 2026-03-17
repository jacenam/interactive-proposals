export default function StatCard({ number, label, color = '#00C73C' }) {
  return (
    <div className="p-6 border-t-2" style={{ borderColor: color }}>
      <div className="text-3xl lg:text-4xl font-semibold mb-1 text-[#161616]" style={{ color }}>{number}</div>
      <div className="text-xs text-[#6f6f6f] uppercase tracking-widest font-medium">{label}</div>
    </div>
  )
}
