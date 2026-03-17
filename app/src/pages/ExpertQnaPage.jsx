import PageHero from '../components/layout/PageHero'
import Section from '../components/ui/Section'
import SectionTitle from '../components/ui/SectionTitle'
import StatCard from '../components/ui/StatCard'
import ComparisonTable from '../components/ui/ComparisonTable'
import TimelineStep from '../components/ui/TimelineStep'
import FeatureCard from '../components/ui/FeatureCard'
import { services } from '../data/services'

export default function ExpertQnaPage() {
  const service = services.find(s => s.id === 'expert-qna')

  return (
    <>
      <PageHero {...service} />

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle overline="문제점" title="검색 노출의 필요성" />
            <p className="text-[#525252]">병원에는 단순 등록 이상의 것이 필요합니다 — 환자가 온라인에서 의료 정보를 검색할 때 신뢰할 수 있는 전문가로 노출되어야 합니다. 기존 검색 광고는 헬스케어 분야에서 효과가 제한적입니다.</p>
          </div>
          <div>
            <SectionTitle overline="솔루션" title="디지털 자산으로서의 전문가 콘텐츠" />
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="text-[#3B82F6] text-xl">✓</span><div><strong>지역 기반 타겟팅:</strong><span className="text-[#525252] text-sm block">네이버 플레이스 "우리 동네 전문가" 섹션에 노출됩니다.</span></div></li>
              <li className="flex gap-3"><span className="text-[#3B82F6] text-xl">✓</span><div><strong>정밀 키워드:</strong><span className="text-[#525252] text-sm block">지역, 연령, 성별, 진료과에 따라 핵심 키워드를 설정합니다.</span></div></li>
              <li className="flex gap-3"><span className="text-[#3B82F6] text-xl">✓</span><div><strong>브랜드 신뢰도:</strong><span className="text-[#525252] text-sm block">네이버 인증 전문가 답변이 병원 신뢰를 구축합니다.</span></div></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTR Comparison */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="성과" title="검색 광고 대비 37배 효과" center />
        <div className="max-w-2xl mx-auto mb-12">
          <ComparisonTable
            headers={['지표', '일반 검색 광고', 'Doctalk 전문가 Q&A', '차이']}
            rows={[
              ['평균 CTR', '0.5%', '18.8%', '~37배'],
              ['콘텐츠 성격', '일회성 노출', '축적형 디지털 자산', '—'],
            ]}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { number: '27.9%', label: '전화 문의' },
            { number: '20.6%', label: '홈페이지 방문' },
            { number: '15.7%', label: '위치 확인' },
            { number: '10.9%', label: '예약 신청' },
          ].map((s, i) => <StatCard key={i} {...s} color={service.color} />)}
        </div>
      </Section>

      {/* Key Stats */}
      <Section>
        <SectionTitle overline="네트워크" title="한눈에 보기" center />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <StatCard number="4,000+" label="제휴 병·의원" color={service.color} />
          <StatCard number="6,000+" label="활동 의료 전문가" color={service.color} />
          <StatCard number="#1" label="헬스케어 B2B 점유율" color={service.color} />
          <StatCard number="₩27,500" label="월 / 병·의원" color={service.color} />
        </div>
      </Section>

      {/* Upload Process */}
      <Section className="bg-[#f4f4f4]">
        <SectionTitle overline="콘텐츠 파이프라인" title="4단계 업로드 프로세스" />
        <div className="max-w-xl">
          <TimelineStep number={1} title="키워드 전략 수집" description="타겟 환자의 지역, 연령, 질환, 진료과를 기반으로 최적 키워드를 선정합니다." color={service.color} />
          <TimelineStep number={2} title="콘텐츠 작성" description="전문가가 편집 가이드라인에 따라 전문 의학 지식 기반의 Q&A를 작성합니다." color={service.color} />
          <TimelineStep number={3} title="전문가 검수 (내부)" description="닥프렌즈 검수팀이 의료광고법 기준에 따라 1~3 영업일 내 검토합니다." color={service.color} />
          <TimelineStep number={4} title="자동 게시 및 관리" description="네이버 지식iN에 자동 업로드되며, AI 품질 관리 및 수정이 지속적으로 이루어집니다." color={service.color} isLast />
        </div>
      </Section>

      {/* Future */}
      <Section>
        <SectionTitle overline="미래 가치" title="향후 계획" center />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon="🤖" title="Doctalk AI FAQ" description="생성형 AI를 활용하여 키워드 입력만으로 건강 상담 콘텐츠를 자동 생성합니다." color={service.color} />
          <FeatureCard icon="🌐" title="플랫폼 확장" description="네이버를 넘어 아하 커뮤니티(1.1M MAU) 등으로 확장합니다." color={service.color} />
          <FeatureCard icon="🎯" title="고부가가치 마케팅" description="성과 광고와 전문가 신뢰도를 결합한 통합 솔루션을 제공합니다." color={service.color} />
        </div>
      </Section>
    </>
  )
}
