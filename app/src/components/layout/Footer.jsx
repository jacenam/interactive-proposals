import { Link } from 'react-router-dom'
import { services } from '../../data/services'

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-[#c6c6c6]">
      <div className="max-w-[1584px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={`${import.meta.env.BASE_URL}images/logos/docfriends-logo-white.png`} alt="Docfriends" className="h-6 mb-4" />
            <p className="text-sm leading-relaxed text-[#a8a8a8] max-w-md">
              환자와 의사, 주치의 관계로의 연결.
              파편화된 의료 인프라를 연결하여, 환자와 의사를 1인 1주치의 관계로 연결하는 것을 목표합니다.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-[#6f6f6f] mb-4">서비스</h3>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.id}>
                  <Link to={s.route} className="text-sm text-[#a8a8a8] hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-[#6f6f6f] mb-4">회사 정보</h3>
            <ul className="space-y-2 text-sm text-[#a8a8a8]">
              <li>주식회사 닥프렌즈</li>
              <li>헬스케어 테크놀로지</li>
              <li>서울특별시, 대한민국</li>
            </ul>
            <div className="mt-4 inline-flex items-center h-6 px-2 bg-[#00C73C]/20 text-[#00C73C] text-xs font-medium">
              Default Alive · 35개월 런웨이
            </div>
          </div>
        </div>
        <div className="border-t border-[#393939] mt-12 pt-6 text-xs text-[#6f6f6f]">
          © 2026 주식회사 닥프렌즈. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
