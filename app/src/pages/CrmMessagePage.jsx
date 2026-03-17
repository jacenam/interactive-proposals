import PageHero from '../components/layout/PageHero'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import ComparisonTable from '../components/ui/ComparisonTable'
import TimelineStep from '../components/ui/TimelineStep'
import FeatureCard from '../components/ui/FeatureCard'
import { services } from '../data/services'

export default function CrmMessagePage() {
  const service = services.find(s => s.id === 'crm-message')

  return (
    <>
      <PageHero {...service} />

      {/* Problem */}
      <Section>
        <SectionTitle overline="문제점" title='"노동 집약적 스팸"' center />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon="⏰" title="운영 과부하" description="직원들이 매일 1.5시간 이상 누구에게 메시지를 보낼지 논의하고 수동으로 각각 작성합니다." color="#EF4444" />
          <FeatureCard icon="📩" title="낮은 전달 효과" description="일반적인 템플릿 메시지는 개인 맞춤 케어가 아닌 광고 스팸처럼 느껴집니다." color="#EF4444" />
          <FeatureCard icon="🚧" title="높은 진입 장벽" description="기존 CRM은 수동 템플릿 생성과 시나리오 설정이 필요합니다 — '수동적 자동화'." color="#EF4444" />
        </div>
      </Section>

      {/* Solution */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="솔루션" title="데이터 기반 개인화" center />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-[#161616] mb-4">의사별 RAG 모델</h3>
            <div className="space-y-4">
              <TimelineStep number="A" title="의료진 정체성 보호" description="의사별 개별 RAG를 구축하여, 메시지에 각 의료진 고유의 임상 철학과 처방 스타일이 담깁니다." color={service.color} />
              <TimelineStep number="B" title="비식별화 데이터" description="개인정보를 보호하면서 실제 진료, 처방, 검사, 메모 데이터를 분석합니다." color={service.color} isLast />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#161616] mb-4">최적 타겟팅 및 타이밍</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 border border-[#e0e0e0]">
                <p className="font-semibold text-[#161616]">누구에게 & 언제</p>
                <p className="text-sm text-[#525252]">AI가 적절한 환자에게 적절한 시점에 메시지를 보낼지 결정합니다.</p>
              </div>
              <div className="bg-white p-4 border border-[#e0e0e0]">
                <p className="font-semibold text-[#161616]">무엇을</p>
                <p className="text-sm text-[#525252]">검사 결과와 이력을 고려하여 가장 적절한 조언을 추천합니다.</p>
              </div>
              <div className="bg-white p-4 border border-[#e0e0e0]">
                <p className="font-semibold text-[#161616]">결과</p>
                <p className="text-sm text-[#525252]">직원은 "확인"만 누르면 됩니다 — 환자는 주치의의 관심을 느낍니다.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <SectionTitle overline="작동 방식" title="닥톡 AI vs 기존 CRM" center />
        <div className="max-w-3xl mx-auto">
          <ComparisonTable
            headers={['항목', '기존 CRM', '닥톡 AI CRM 메시지']}
            rows={[
              ['데이터 활용', '사용자 설정 시나리오', '실제 진료/처방/검사 데이터'],
              ['메시지 생성', '사전 정의된 템플릿', '의사별 RAG 개인화'],
              ['운영 노력', '설정 및 템플릿 관리', 'AI 자동 추천 (최소한의 확인)'],
              ['환자 경험', '일반적인 병원 문자', '"나를 기억하는 주치의"의 케어 메시지'],
            ]}
          />
        </div>
      </Section>

      {/* Future */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="비전" title="의료 마이데이터의 완성" center />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon="📱" title="멀티채널 확장" description="알림톡, 당근, 블라인드, 키즈노트 등 AD 알림 형태로 확장합니다." color={service.color} />
          <FeatureCard icon="🤝" title="EMR 파트너십" description="비트컴퓨터를 시작으로, 주요 EMR 제휴를 통해 데이터 생태계를 구축합니다." color={service.color} />
          <FeatureCard icon="🏗️" title="의료 마이데이터" description="정부 주도 사업이 이루지 못한 것을 현장 중심의 실제 의사-환자 데이터로 최초 실현합니다." color={service.color} />
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto border-l-[3px] border-l-[#00C73C] pl-6">
          <p className="text-2xl font-semibold text-[#161616] mb-4">"의료진에게는 퇴근 시간을, 환자에게는 주치의의 관심을 선물하는 서비스"</p>
        </div>
      </Section>
    </>
  )
}
