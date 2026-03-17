export default function TimelineStep({ number, title, description, color = '#00C73C', isLast = false }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="w-8 h-8 flex items-center justify-center text-white font-semibold text-sm shrink-0"
          style={{ backgroundColor: color }}
        >
          {number}
        </div>
        {!isLast && <div className="w-px h-full min-h-8 bg-[#e0e0e0] mt-1" />}
      </div>
      <div className="pb-8">
        <h4 className="font-semibold text-[#161616] text-sm mb-1">{title}</h4>
        <p className="text-sm text-[#525252] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
