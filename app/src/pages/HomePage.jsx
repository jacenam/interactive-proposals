import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { platformPartners, emrPartners } from '../data/partners'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import StatCard from '../components/ui/StatCard'
import PartnerLogoGrid from '../components/ui/PartnerLogoGrid'

export default function HomePage() {
  const stats = [
    { number: '25,000+', label: '제휴 클리닉' },
    { number: '32+', label: 'EMR 연동' },
    { number: '1.65M+', label: '누적 예약건수' },
    { number: '<1%', label: '이탈률' },
    { number: '1억+', label: '월간 활성 사용자' },
  ]

  const flywheel = [
    { label: '예약', desc: '예약 및 진료 데이터 수집', angle: 0, color: '#00C73C' },
    { label: '전문가 QnA', desc: '신뢰 구축 및 콘텐츠 축적', angle: 90, color: '#0f62fe' },
    { label: 'AI 에이전트', desc: '스마트 상담 및 분류', angle: 180, color: '#8a3ffc' },
    { label: '광고 DSP', desc: '성과 기반 마케팅', angle: 270, color: '#ff832b' },
  ]

  return (
    <>
      {/* 히어로 */}
      <section className="bg-[#161616] min-h-screen flex items-center pt-12">
        <div className="max-w-[1584px] mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={`${import.meta.env.BASE_URL}images/logos/docfriends-logo-white.png`} alt="Docfriends" className="h-8 mb-8 animate-fade-in-up" />
              <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                환자와 의사,{' '}
                <span className="text-[#00C73C]">주치의 관계</span>로의{' '}
                연결
              </h1>
              <p className="text-lg text-[#a8a8a8] max-w-lg mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                파편화된 의료 인프라를 연결하여, 환자와 의사를 1인 1주치의 관계로 연결하는 것을 목표합니다
              </p>
              <a
                href="#services"
                className="inline-flex items-center h-12 px-6 bg-[#00C73C] text-white text-sm font-medium hover:bg-[#00A832] transition-colors animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                서비스 둘러보기 →
              </a>
            </div>
            <div className="hidden lg:flex justify-center">
              <svg viewBox="0 0 400 400" className="w-80 animate-float">
                {flywheel.map((item, i) => {
                  const cx = 200, cy = 200, r = 140
                  const a = (i * 90 - 90) * Math.PI / 180
                  const x = cx + r * Math.cos(a)
                  const y = cy + r * Math.sin(a)
                  return (
                    <g key={i}>
                      <rect x={x - 50} y={y - 30} width="100" height="60" fill={item.color} opacity="0.15" />
                      <rect x={x - 50} y={y - 30} width="100" height="3" fill={item.color} />
                      <text x={x} y={y + 2} textAnchor="middle" fill="white" fontSize="12" fontWeight="600">{item.label}</text>
                      <text x={x} y={y + 18} textAnchor="middle" fill="#a8a8a8" fontSize="9">{item.desc}</text>
                    </g>
                  )
                })}
                <rect x="170" y="170" width="60" height="60" fill="#00C73C" opacity="0.2" />
                <text x="200" y="197" textAnchor="middle" fill="#00C73C" fontSize="11" fontWeight="600">닥톡</text>
                <text x="200" y="212" textAnchor="middle" fill="#6f6f6f" fontSize="8">생태계</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 지표 */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#e0e0e0]">
          {stats.map((s, i) => (
            <div key={i} className="bg-white">
              <StatCard number={s.number} label={s.label} />
            </div>
          ))}
        </div>
      </Section>

      {/* 서비스 포트폴리오 */}
      <Section className="bg-[#f4f4f4]" id="services">
        <SectionTitle
          overline="서비스 생태계"
          title="닥톡 서비스 포트폴리오"
          description="데이터와 AI를 통해 의료기관, 환자, 플랫폼을 연결하는 통합 헬스케어 플랫폼입니다."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0e0e0]">
          {services.map(s => (
            <Link key={s.id} to={s.route} className="group">
              <div className="bg-white p-8 h-full border-l-[3px] hover:bg-[#e0e0e0] transition-colors" style={{ borderLeftColor: s.color }}>
                <span className="text-2xl mb-4 block">{s.icon}</span>
                <h3 className="font-semibold text-[#161616] mb-2 group-hover:text-[#00C73C] transition-colors text-sm">{s.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 플라이휠 */}
      <Section dark>
        <SectionTitle
          overline="성장 엔진"
          title="프로덕트 플라이휠"
          description="각 서비스가 다음 서비스로 이어지는 자생적 성장 생태계입니다."
          center
          light
        />
        <div className="flex justify-center">
          <svg viewBox="0 0 500 500" className="w-full max-w-lg">
            {flywheel.map((item, i) => {
              const cx = 250, cy = 250, r = 160
              const a = (i * 90 - 90) * Math.PI / 180
              const x = cx + r * Math.cos(a)
              const y = cy + r * Math.sin(a)
              return (
                <g key={i}>
                  <rect x={x - 55} y={y - 35} width="110" height="70" fill={item.color} opacity="0.15" />
                  <rect x={x - 55} y={y - 35} width="110" height="3" fill={item.color} />
                  <text x={x} y={y - 2} textAnchor="middle" fill="white" fontSize="13" fontWeight="600">{item.label}</text>
                  <text x={x} y={y + 16} textAnchor="middle" fill="#a8a8a8" fontSize="9">{item.desc}</text>
                </g>
              )
            })}
            <rect x="220" y="220" width="60" height="60" fill="#00C73C" opacity="0.2" />
            <text x="250" y="248" textAnchor="middle" fill="#00C73C" fontSize="12" fontWeight="600">닥톡</text>
            <text x="250" y="264" textAnchor="middle" fill="#6f6f6f" fontSize="9">생태계</text>
          </svg>
        </div>
      </Section>

      {/* 파트너 네트워크 */}
      <Section>
        <SectionTitle overline="신뢰하는 파트너" title="파트너 네트워크" center />
        <div className="space-y-12">
          <PartnerLogoGrid partners={platformPartners} title="플랫폼 파트너" />
          <div className="border-t border-[#e0e0e0]" />
          <PartnerLogoGrid partners={emrPartners} title="EMR / CRM 파트너" />
        </div>
      </Section>

      {/* 재무 건전성 */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="재무 건전성" title="지속 가능한 성장" center />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e0e0e0] max-w-3xl mx-auto">
          {[
            { number: '₩90.7억', label: '총 매출 (FY2025)' },
            { number: '+17.6%', label: '전년 대비 성장률', color: '#00C73C' },
            { number: '35개월', label: '잔여 런웨이' },
            { number: 'Alive', label: 'Default 상태', color: '#00C73C' },
          ].map((s, i) => (
            <div key={i} className="bg-white">
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
