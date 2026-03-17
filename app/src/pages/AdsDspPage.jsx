import PageHero from '../components/layout/PageHero'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import StatCard from '../components/ui/StatCard'
import FeatureCard from '../components/ui/FeatureCard'
import TimelineStep from '../components/ui/TimelineStep'
import { services } from '../data/services'

export default function AdsDspPage() {
  const service = services.find(s => s.id === 'ads-dsp')

  return (
    <>
      <PageHero {...service} />

      {/* Market Size */}
      <Section>
        <SectionTitle overline="시장 기회" title="8조원 규모 헬스케어 광고 시장" center />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <StatCard number="$8B" label="전체 시장" color={service.color} />
          <StatCard number="$5B" label="온라인 부문" color={service.color} />
          <StatCard number="15-30%" label="수익 배분" color={service.color} />
          <StatCard number="100M+" label="MAU 도달" color={service.color} />
        </div>
        <p className="text-center text-[#525252] max-w-2xl mx-auto">대부분의 의료기관은 광고 전략을 대행사에 외주하지만, 대행사에는 근본적인 한계가 있습니다.</p>
      </Section>

      {/* Problem */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="문제점" title='데이터 사각지대' center />
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            {/* Funnel SVG */}
            <svg viewBox="0 0 400 250" className="w-full max-w-md">
              <polygon points="50,20 350,20 300,80 100,80" fill="#F59E0B" opacity="0.2" stroke="#F59E0B" strokeWidth="1" />
              <text x="200" y="55" textAnchor="middle" fill="#F59E0B" fontSize="13" fontWeight="600">노출 & 클릭 ✓</text>
              <polygon points="100,90 300,90 270,150 130,150" fill="#EF4444" opacity="0.15" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 2" />
              <text x="200" y="125" textAnchor="middle" fill="#EF4444" fontSize="13" fontWeight="600">병원 방문 ???</text>
              <polygon points="130,160 270,160 250,210 150,210" fill="#EF4444" opacity="0.1" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 2" />
              <text x="200" y="190" textAnchor="middle" fill="#EF4444" fontSize="12">실제 매출 ???</text>
              <text x="200" y="240" textAnchor="middle" fill="#94A3B8" fontSize="11">기존 대행사는 이 아래를 추적할 수 없습니다</text>
            </svg>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon="📊" title="단편화된 지표" description="대행사는 퍼널 상단 데이터(플랫폼의 노출수와 클릭수)만 추적할 수 있습니다." color="#EF4444" />
            <FeatureCard icon="👻" title="보이지 않는 전환" description="클릭이 실제 병원 방문으로 이어졌는지 확인할 방법이 없습니다. 진정한 ROI 측정이 불가능합니다." color="#EF4444" />
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <SectionTitle overline="솔루션" title="풀사이클 성과 추적" center />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon="🔗" title="통합 예약" description="네이버, 카카오 등의 공식 예약 중개사로서 모든 환자의 정확한 유입 경로를 파악합니다." color={service.color} />
          <FeatureCard icon="🏥" title="EMR 연동" description="병원 EMR 시스템과의 심층 연동으로 실시간 결과(내원, 취소, 노쇼)를 추적합니다." color={service.color} />
          <FeatureCard icon="💰" title="성과 기반 ROAS" description="단순 클릭이 아닌 실제 매출을 기반으로 검증된 광고 수익률을 제공합니다." color={service.color} />
        </div>
      </Section>

      {/* DSP & DMP */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="작동 방식" title="헬스케어 특화 DSP & DMP" center />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 border border-[#e0e0e0]">
            <h3 className="text-xl font-bold text-[#161616] mb-4">DSP 모델</h3>
            <p className="text-[#525252] mb-4">의료 광고 인벤토리를 대량으로 집약하여 주요 플랫폼에 공급합니다.</p>
            <div className="bg-[#F59E0B]/10 p-4">
              <p className="text-sm font-semibold" style={{ color: service.color }}>수익 배분: 15% ~ 30%</p>
            </div>
          </div>
          <div className="bg-white p-8 border border-[#e0e0e0]">
            <h3 className="text-xl font-bold text-[#161616] mb-4">DMP 우위</h3>
            <p className="text-[#525252] mb-4">환자가 <strong>누구</strong>(연령, 성별)이고, <strong>어디서</strong>(지역), <strong>무엇</strong>(진료과)을 검색하는지에 대한 독점 데이터를 보유합니다.</p>
            <div className="bg-[#F59E0B]/10 p-4">
              <p className="text-sm font-semibold" style={{ color: service.color }}>고의향 데이터 = 정밀 타겟팅</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Flywheel */}
      <Section dark>
        <SectionTitle overline="성장 엔진" title="플라이휠 효과" center light />
        <div className="max-w-xl mx-auto">
          <TimelineStep number={1} title="스마트 광고" description="데이터 기반 타겟팅으로 예약률을 높입니다." color={service.color} />
          <TimelineStep number={2} title="의료기관 유지" description="높은 전환율로 더 많은 병원이 생태계에 합류합니다." color={service.color} />
          <TimelineStep number={3} title="데이터 축적" description="참여 증가로 더 세분화된 예약 및 EMR 데이터가 생성됩니다." color={service.color} />
          <TimelineStep number={4} title="시스템 최적화" description="더 많은 데이터가 AI 알고리즘을 정교화하여 획득 비용을 낮추고 ROAS를 높입니다." color={service.color} isLast />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto border-l-[3px] border-l-[#F59E0B] pl-6">
          <p className="text-2xl font-semibold text-[#161616] mb-4">"클릭"을 "확정 환자"로 전환합니다.</p>
          <p className="text-[#525252]">우리는 단순한 광고 플랫폼이 아닙니다. 현대 헬스케어 경제의 데이터 백본입니다.</p>
        </div>
      </Section>
    </>
  )
}
