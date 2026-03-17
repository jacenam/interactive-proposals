import PageHero from '../components/layout/PageHero'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import StatCard from '../components/ui/StatCard'
import ComparisonTable from '../components/ui/ComparisonTable'
import TimelineStep from '../components/ui/TimelineStep'
import FeatureCard from '../components/ui/FeatureCard'
import { services } from '../data/services'

export default function AutoAdReviewerPage() {
  const service = services.find(s => s.id === 'auto-ad-review')

  return (
    <>
      <PageHero {...service} />

      {/* Problem / Solution */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#f4f4f4] border-l-[3px] border-l-[#da1e28] p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-2">문제점</h3>
            <h2 className="text-2xl font-bold text-[#161616] mb-4">2~4개월 심의 지연</h2>
            <p className="text-[#525252]">한국의 의료 광고 심의는 인력 부족으로 인해 새로운 시술 홍보와 정산 처리에 심각한 지연이 발생하고 있었습니다.</p>
          </div>
          <div className="bg-[#f4f4f4] border-l-[3px] border-l-[#00C73C] p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00C73C] mb-2">솔루션</h3>
            <h2 className="text-2xl font-bold text-[#161616] mb-4">24시간 AI 심의</h2>
            <p className="text-[#525252]">KMA와의 공식 파트너십을 통해, AI 시스템이 즉시 심의 요청을 처리하고 인적 자원을 소모하지 않으면서 대량의 심의를 처리합니다.</p>
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="효과" title="도입 전후 비교" center />
        <div className="max-w-3xl mx-auto">
          <ComparisonTable
            headers={['항목', '기존 프로세스', '닥톡 AI 자동 심의']}
            rows={[
              ['심의 소요 시간', '2~4개월', '24시간 이내 (1일)'],
              ['방법론', '100% 수동 심의', 'AI 필터링 + 사람 최종 승인'],
              ['적용 범위', '약 40,000개 의료기관', '약 40,000개 의료기관'],
              ['월 처리량', '약 30,000건', '원활한 확장 가능'],
            ]}
          />
        </div>
      </Section>

      {/* Training Data */}
      <Section>
        <SectionTitle overline="AI 기반" title="강력한 학습 데이터셋" center />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon="📋" title="공식 가이드라인" description="KMA 및 보건복지부 종합 가이드라인." color={service.color} />
          <FeatureCard icon="⚖️" title="법률 프레임워크" description="의료법, 지식재산권, 개인정보보호법." color={service.color} />
          <FeatureCard icon="🏛️" title="판례" description="5대 대법원 판결 및 행정 해석." color={service.color} />
          <FeatureCard icon="📚" title="자체 전문 지식" description="7년간 40회 이상 의료법 학술대회 분석 자료." color={service.color} />
        </div>
      </Section>

      {/* Human-in-the-Loop Workflow */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="워크플로우" title="휴먼인더루프 심의" />
        <div className="max-w-xl">
          <TimelineStep number={1} title="접수 및 즉시 분석" description="병원이 광고 소재(텍스트, 이미지, 영상)를 제출하면 AI가 즉시 위반 가능성을 스캔합니다." color={service.color} />
          <TimelineStep number={2} title="상세 AI 피드백" description="시스템이 승인/거부 결과와 함께 구체적인 사유 및 관련 법률 조항을 제공합니다." color={service.color} />
          <TimelineStep number={3} title="사람의 의사결정" description="AI 분석 결과가 KMA 심의 담당자에게 전달됩니다. 최종 결정은 사람이 내려 책임성을 보장합니다." color={service.color} />
          <TimelineStep number={4} title="선순환 데이터 사이클" description="AI가 사람의 결정으로부터 학습합니다 — 플라이휠 효과로 정확도가 지속적으로 향상됩니다." color={service.color} isLast />
        </div>
      </Section>

      {/* Roadmap */}
      <Section>
        <SectionTitle overline="개발 로드맵" title="출시 계획" center />
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-[#f4f4f4] border-l-[3px] border-l-[#8a3ffc] p-8 text-center">
            <p className="text-sm font-semibold text-purple-600 mb-1">Q2 2026</p>
            <p className="font-bold text-[#161616]">프로토타입 및 파일럿 테스트</p>
          </div>
          <div className="bg-[#f4f4f4] border-l-[3px] border-l-[#8a3ffc] p-8 text-center">
            <p className="text-sm font-semibold text-purple-600 mb-1">Q3 2026</p>
            <p className="font-bold text-[#161616]">상용화 출시 및 전국 확대</p>
          </div>
        </div>
      </Section>
    </>
  )
}
