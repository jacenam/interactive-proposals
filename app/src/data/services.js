export const services = [
  {
    id: 'appointment',
    title: '닥톡 예약',
    subtitle: '통합 예약 연동',
    route: '/appointment',
    color: '#00C73C',
    description: '네이버, 당근, 카카오, 강남언니를 병원 EMR에 직접 연결하여 통합 예약 관리를 실현합니다.',
    descriptionEn: 'Connecting Naver, Daangn, Kakao & Gangnam Unni directly to hospital EMRs for unified appointment management.',
    icon: '📅',
    stats: { clinics: '25,000+', marketShare: '32%', appointments: '1.65M+', churn: '<1%', emrPartners: '32+' }
  },
  {
    id: 'expert-qna',
    title: '닥톡 전문가 QnA',
    subtitle: '네이버 지식iN 파트너십',
    route: '/expert-qna',
    color: '#3B82F6',
    description: '의료 전문가가 네이버 지식iN에서 환자 질문에 답변하여 신뢰를 구축하고 신규 환자 유입을 촉진합니다.',
    descriptionEn: 'Medical professionals answer patient inquiries on Naver Knowledge iN, building trust and driving new patient inflow.',
    icon: '💬',
    stats: { ctr: '18.8%', multiplier: '37x', experts: '6,000+', network: '4,000+' }
  },
  {
    id: 'ads-dsp',
    title: '닥톡 광고 (DSP)',
    subtitle: '데이터 기반 헬스케어 광고',
    route: '/ads-dsp',
    color: '#F59E0B',
    description: '광고 클릭과 실제 환자 내원 사이의 데이터 단절을 해소하는 유일한 헬스케어 특화 DSP & DMP입니다.',
    descriptionEn: 'The only healthcare-specific DSP & DMP bridging the data blind spot between ad clicks and actual patient visits.',
    icon: '📊',
    stats: { market: '$8B', online: '$5B', revenueShare: '15-30%', mau: '100M+' }
  },
  {
    id: 'auto-ad-review',
    title: '닥톡 AI 의료광고 자동심의',
    subtitle: '대한의사협회 파트너십',
    route: '/auto-ad-review',
    color: '#8B5CF6',
    description: '대한의사협회와의 공식 파트너십을 통한 AI 기반 의료광고 자동 심의 시스템입니다.',
    descriptionEn: 'AI-powered medical advertising auto-review system in partnership with the Korean Medical Association.',
    icon: '🤖',
    stats: { before: '2-4 months', after: '24 hours', coverage: '40,000', volume: '30,000/mo' }
  },
  {
    id: 'crm-message',
    title: '닥톡 AI 환자 메시지',
    subtitle: '개인화 환자 메시징',
    route: '/crm-message',
    color: '#14B8A6',
    description: '의사별 RAG 모델이 개인화된 환자 메시지를 생성하여 노동 집약적 수동 프로세스를 대체합니다.',
    descriptionEn: 'Doctor-specific RAG model generates personalized patient messages, replacing labor-intensive manual processes.',
    icon: '✉️',
    stats: { timeSaved: '1.5hrs/day', model: 'RAG', targeting: 'AI-driven' }
  },
  {
    id: 'medical-counsel',
    title: '닥톡 AI 의료 상담',
    subtitle: 'EMR 기반 AI 내비게이션',
    route: '/medical-counsel',
    color: '#6366F1',
    description: 'CRM 메시지에서 의료 상담, 스마트 병원 매칭, 실시간 예약까지 연결하는 AI 상담 에이전트입니다.',
    descriptionEn: 'AI consultation agent connecting CRM messages to medical guidance, smart hospital matching, and real-time booking.',
    icon: '🩺',
    stats: { phases: '4', apiPartners: 'Naver, Kakao, Daangn', model: 'RAG + EMR' }
  },
]
