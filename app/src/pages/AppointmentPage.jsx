import PageHero from '../components/layout/PageHero'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import StatCard from '../components/ui/StatCard'
import FeatureCard from '../components/ui/FeatureCard'
import TimelineStep from '../components/ui/TimelineStep'
import { services } from '../data/services'

export default function AppointmentPage() {
  const service = services.find(s => s.id === 'appointment')

  return (
    <>
      <PageHero {...service} />

      {/* Problem / Solution */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle overline="문제점" title="단편화와 비효율" />
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="text-red-500 text-xl">✕</span><div><strong className="text-[#161616]">시스템 단편화:</strong><span className="text-[#525252] text-sm block">호환되지 않는 EMR 시스템이 데이터 사일로와 수동 데이터 입력을 초래합니다.</span></div></li>
              <li className="flex gap-3"><span className="text-red-500 text-xl">✕</span><div><strong className="text-[#161616]">운영 병목:</strong><span className="text-[#525252] text-sm block">직원이 다채널 예약을 수동으로 관리하며 오류율이 높습니다.</span></div></li>
            </ul>
          </div>
          <div>
            <SectionTitle overline="솔루션" title="원활한 통합" />
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="text-[#00C73C] text-xl">✓</span><div><strong className="text-[#161616]">통합 인터페이스:</strong><span className="text-[#525252] text-sm block">네이버, 당근, 카카오, 강남언니 → 병원 EMR로 직접 연결.</span></div></li>
              <li className="flex gap-3"><span className="text-[#00C73C] text-xl">✓</span><div><strong className="text-[#161616]">리소스 최적화:</strong><span className="text-[#525252] text-sm block">단일 EMR 대시보드로 중복 업무를 제거합니다.</span></div></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Metrics */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="시장 성과" title="J-커브 성장" center />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { number: '25,000+', label: '제휴 병·의원' },
            { number: '32%', label: '시장 점유율' },
            { number: '1.65M+', label: '누적 예약 건수' },
            { number: '<1%', label: '이탈률' },
            { number: '+18%', label: '신규 환자 유입' },
            { number: '+15%', label: '내원율 월간 증가' },
          ].map((s, i) => <StatCard key={i} {...s} color={service.color} />)}
        </div>
      </Section>

      {/* Platform Flow Diagram — Interactive */}
      <Section>
        <SectionTitle overline="작동 방식" title="플랫폼 통합 플로우" center />
        <div className="flex justify-center">
          <div className="w-full max-w-4xl grid grid-cols-[1fr_auto_1.5fr_auto_1.5fr] items-center gap-4 lg:gap-6">

            {/* Platform nodes */}
            <div className="flex flex-col gap-4">
              {[
                { name: '네이버', color: '#00C73C', icon: '🟢', users: '44M MAU' },
                { name: '카카오', color: '#FEE500', icon: '💬', users: '49M MAU' },
                { name: '당근', color: '#FF6F0F', icon: '🥕', users: '40M MAU' },
                { name: '강남언니', color: '#FF4B77', icon: '💄', users: '330K MAU' },
              ].map((p) => (
                <div
                  key={p.name}
                  className="group bg-white border border-[#e0e0e0] p-4 cursor-default transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:border-[#c6c6c6] hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-[#161616]">{p.name}</p>
                      <p className="text-xs text-[#6f6f6f]">{p.users}</p>
                    </div>
                  </div>
                  <div
                    className="h-[2px] mt-3 w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
              ))}
            </div>

            {/* Connector arrows left */}
            <div className="flex flex-col items-center justify-center h-full">
              <svg width="48" height="200" viewBox="0 0 48 200" className="text-[#00C73C]">
                <path d="M 0 20 Q 24 20 40 100" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
                <path d="M 0 75 Q 24 75 40 100" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
                <path d="M 0 130 Q 24 130 40 100" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
                <path d="M 0 180 Q 24 180 40 100" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
                <circle cx="40" cy="100" r="4" fill="currentColor" opacity="0.6" />
              </svg>
            </div>

            {/* Doctalk Hub — Center */}
            <div className="group relative bg-gradient-to-br from-[#00C73C]/5 to-[#00C73C]/15 border-2 border-[#00C73C] p-8 text-center cursor-default transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,199,60,0.15)] hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00C73C]" />
              <img src="/images/logos/doctalk-symbol-green.png" alt="Doctalk" className="h-10 mx-auto mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-semibold text-[#00C73C] mb-1">Doctalk</h3>
              <p className="text-xs text-[#525252] mb-4">예약 허브</p>
              <div className="flex justify-center gap-2">
                <span className="text-[10px] font-medium bg-[#00C73C]/10 text-[#00C73C] px-2 py-0.5">실시간 동기화</span>
                <span className="text-[10px] font-medium bg-[#00C73C]/10 text-[#00C73C] px-2 py-0.5">통합 API</span>
              </div>
            </div>

            {/* Connector arrow right */}
            <div className="flex items-center justify-center">
              <svg width="48" height="40" viewBox="0 0 48 40">
                <line x1="0" y1="20" x2="36" y2="20" stroke="#00C73C" strokeWidth="2" />
                <polygon points="36,12 48,20 36,28" fill="#00C73C" />
              </svg>
            </div>

            {/* Hospital EMR — Right */}
            <div className="group relative bg-gradient-to-br from-[#F59E0B]/5 to-[#F59E0B]/10 border border-[#F59E0B]/40 p-8 cursor-default transition-all duration-200 hover:shadow-[0_8px_32px_rgba(245,158,11,0.12)] hover:border-[#F59E0B]/70 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#F59E0B]" />
              <h3 className="text-lg font-semibold text-[#F59E0B] mb-1">병원 EMR</h3>
              <p className="text-xs text-[#525252] mb-4">32개 이상 시스템 연동</p>
              <div className="grid grid-cols-2 gap-2">
                {['비트컴퓨터', '이지스헬스케어', '전능아이티', '네오소프트뱅크'].map(name => (
                  <span key={name} className="text-[10px] text-[#6f6f6f] bg-[#F59E0B]/5 px-2 py-1 truncate">{name}</span>
                ))}
              </div>
              <p className="text-[10px] text-[#a8a8a8] mt-2">+ 28개 이상 파트너사</p>
            </div>

          </div>
        </div>
      </Section>

      {/* Core Features */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="핵심 기능" title="닥톡의 핵심" center />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <FeatureCard icon="🔄" title="실시간 슬롯 동기화" description="EMR에 워크인 환자가 등록되면 온라인 플랫폼에서 즉시 가용 슬롯이 업데이트됩니다. 3개 슬롯 중 2개가 예약되면 플랫폼에 '1자리 남음' 또는 '마감'으로 표시됩니다." color={service.color} />
          <FeatureCard icon="📋" title="원스톱 스케줄 관리" description="닥톡에서 서비스 항목을 한 번 생성하면 연결된 모든 플랫폼에 반영됩니다. 의사별 휴무일 및 즉시 확정 설정을 구성할 수 있습니다." color={service.color} />
        </div>
      </Section>

      {/* Roadmap */}
      <Section>
        <SectionTitle overline="전략 로드맵" title="2025 – 2028" />
        <div className="max-w-xl">
          <TimelineStep number={1} title="네트워크 확장" description="유비케어, 오스템임플란트, TNH 등을 온보딩하여 50,000개 거점(시장 점유율 ~65%)으로 확대합니다." color={service.color} />
          <TimelineStep number={2} title="활성 사용자 성장" description="10,000개 파워유저 병·의원을 활성화하여 예약 데이터 밀도를 극대화합니다." color={service.color} />
          <TimelineStep number={3} title="수익화 및 생태계" description="심층 데이터를 활용한 성과 기반 의료 마케팅 플랫폼으로 전환합니다." color={service.color} isLast />
        </div>
      </Section>

      {/* Quote */}
      <Section className="bg-[#f4f4f4]">
        <div className="max-w-2xl mx-auto border-l-[3px] border-l-[#00C73C] pl-6">
          <p className="text-2xl font-semibold text-[#161616] mb-4">"온라인 잠재 고객을 오프라인 환자로 전환합니다."</p>
          <p className="text-[#525252]">닥톡 예약은 <strong>설치비·이용료 무료</strong>로 제공되어 의료기관의 진입 장벽을 완전히 제거합니다.</p>
        </div>
      </Section>
    </>
  )
}
