import PageHero from '../components/layout/PageHero'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import FeatureCard from '../components/ui/FeatureCard'
import TimelineStep from '../components/ui/TimelineStep'
import { services } from '../data/services'

export default function MedicalCounselPage() {
  const service = services.find(s => s.id === 'medical-counsel')

  return (
    <>
      <PageHero {...service} />

      {/* Problem */}
      <Section>
        <SectionTitle overline="문제점" title='의료 미궁' center />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon="🔍" title="인맥 부재" description="대부분의 환자는 의사 지인 없이는 증상의 심각도를 판단하거나 어떤 전문의를 찾아야 할지 알 수 없습니다." color="#EF4444" />
          <FeatureCard icon="🏥" title="의료기관 혼란" description="환자들은 어떤 병원에 적합한 장비와 세부 전문의가 있는지 모른 채 무작위로 병원을 선택합니다." color="#EF4444" />
          <FeatureCard icon="📋" title="사후 관리 공백" description="치료 후 궁금증을 해소하기 어렵습니다. 인터넷 검색은 신뢰할 수 없어 불안감을 초래합니다." color="#EF4444" />
        </div>
      </Section>

      {/* Solution - 4 Phases */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="솔루션" title="4단계 환자 여정" center />
        <div className="max-w-2xl mx-auto">
          <TimelineStep number={1} title="1단계: CRM 트리거" description="EMR 연동 메시지(진료 완료, 검사 결과, 리마인더)가 개인화된 1:1 AI 상담 링크와 함께 자동 발송됩니다." color={service.color} />
          <TimelineStep number={2} title="2단계: AI 의료 에이전트" description="환자가 링크를 클릭하면 — AI 에이전트가 RAG를 통해 EMR 기록을 활용하여 '의사 지인'처럼 신뢰할 수 있는 정확한 의료 안내를 제공합니다." color={service.color} />
          <TimelineStep number={3} title="3단계: 스마트 방문 안내" description="대면 진료가 필요한 경우, AI가 적합한 장비를 갖춘 최적의 전문의를 추천하고 실시간 예약을 지원합니다." color={service.color} />
          <TimelineStep number={4} title="4단계: 사전 진료 요약" description="상담 내용이 의료진의 EMR에 사전 진료 문서로 요약되어 진료 품질을 높입니다." color={service.color} isLast />
        </div>
      </Section>

      {/* Platform Business */}
      <Section>
        <SectionTitle overline="작동 방식" title="API 기반 플랫폼 비즈니스" center />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon="🔎" title="상담 매칭" description="사용자가 제휴 플랫폼에서 증상을 설명하면, 닥톡 AI 엔진이 EMR 데이터를 기반으로 최적의 의료진을 매칭합니다." color={service.color} />
          <FeatureCard icon="🤝" title="상생 구조" description="파트너사는 정제된 UX를 제공하고, 닥프렌즈는 API를 통해 진료 슬롯 데이터와 전문의 매칭 로직을 제공합니다." color={service.color} />
          <FeatureCard icon="📢" title="새로운 광고 모델" description="상담 연계 타겟 광고로 의료 광고법을 준수하면서 전환율을 극대화합니다." color={service.color} />
        </div>
      </Section>

      {/* Screenshots */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="제품 미리보기" title="AI 상담 인터페이스" center />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white overflow-hidden border border-[#e0e0e0]">
            <img src={`${import.meta.env.BASE_URL}images/screenshots/ai-counsel/AI-Chat-UI.png`} alt="AI 채팅 UI" className="w-full" />
            <div className="p-4"><p className="text-sm text-[#525252]">AI 상담 채팅 인터페이스</p></div>
          </div>
          <div className="bg-white overflow-hidden border border-[#e0e0e0]">
            <img src={`${import.meta.env.BASE_URL}images/screenshots/ai-counsel/Appointment-Scheduler-after-AI-Chat-UI.png`} alt="예약 스케줄러" className="w-full" />
            <div className="p-4"><p className="text-sm text-[#525252]">스마트 예약 스케줄러</p></div>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section>
        <SectionTitle overline="기대 효과" title="3자 가치" center />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#f4f4f4] border-l-[3px] border-l-[#6366F1] p-8 text-center">
            <span className="text-3xl mb-3 block">👤</span>
            <h3 className="font-bold text-[#161616] mb-2">환자</h3>
            <p className="text-sm text-[#525252]">진료 기록 기반의 정확한 안내. 헤매지 않고 적합한 병원을 방문합니다.</p>
          </div>
          <div className="bg-[#f4f4f4] border-l-[3px] border-l-[#6366F1] p-8 text-center">
            <span className="text-3xl mb-3 block">🏥</span>
            <h3 className="font-bold text-[#161616] mb-2">병원</h3>
            <p className="text-sm text-[#525252]">CRM을 통한 환자 유지 + 플랫폼 API를 통한 신규 환자 유치. 선순환 성장 구조.</p>
          </div>
          <div className="bg-[#f4f4f4] border-l-[3px] border-l-[#6366F1] p-8 text-center">
            <span className="text-3xl mb-3 block">🌐</span>
            <h3 className="font-bold text-[#161616] mb-2">산업</h3>
            <p className="text-sm text-[#525252]">환자, 병원, 플랫폼 모두가 함께 성장하는 데이터 중심 의료 생태계.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
