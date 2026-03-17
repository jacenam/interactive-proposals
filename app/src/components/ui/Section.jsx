export default function Section({ children, className = '', dark = false, id }) {
  return (
    <section id={id} className={`py-16 lg:py-20 ${dark ? 'bg-[#161616] text-white' : 'bg-white'} ${className}`}>
      <div className="max-w-[1584px] mx-auto px-4">
        {children}
      </div>
    </section>
  )
}
