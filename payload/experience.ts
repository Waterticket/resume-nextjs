import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '펜타시큐리티 (백엔드 개발자 & 인프라 엔지니어)',
      positions: [
        {
          title: '중앙 계정 관리 시스템 / Account Management System',
          startedAt: '2023-03',
          endedAt: '2023-08',
          descriptions: [
            '개인정보 보호를 위해 사내 시스템에 산재해있는 계정정보를 중앙에서 관리하기 위한 서비스 기획 & 개발',
            '사내 운영되고 있는 서비스들의 계정 데이터 관계 분석 및 데이터 모델 설계',
            'AWS Aurora Mysql 기반 데이터 설계 및 Active-Active 무중단 배포 인프라 구축',
            'Redis Queue를 활용한 실시간 부하 방지 데이터 처리 구현',
            '서비스 에러 실시간 알림 기능 도입 및 이를 통한 수 건의 에러 선제적 조치',
            'REST API 규격 설계 및 개발, 사내 NAC에 계정 정보 연동 지원',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Docker',
            'Mysql',
            'QueryDSL',
            'JPA',
            'Redis',
            'Jenkins',
            'Slack',
          ],
        },
        {
          title: '계약 관리 웹서비스 개발 / COCO',
          startedAt: '2023-09',
          endedAt: '2025-05',
          descriptions: [
            '제품의 계약부터 출고, 유지보수 등 전반적인 사내 프로세스를 관리하기 위한 사내 시스템 개발 & 유지보수',
            '복잡한 쿼리를 단순화하여 버그 발생률을 명시적으로 낮추었으며, 로딩에 수 초 이상 걸리는 페이지들을 최적화를 통해 전반적인 로딩속도를 평균 60% 감축함.',
            '복잡한 현실의 비즈니스 프로세스를 시스템에 녹여내며, 기존에 비효율적으로 구현된 레거시 코드를 TDD 개발론에 따라 개선함.',
            '영업부터 엔지니어, 유지보수 부서까지 전사의 폭 넓은 업무 프로세스 이해 및 유관부서와의 협의',
            '계약 간의 연관관계 및 배송 상태에 따른 유기적인 흐름 기반 데이터 모델 설계 & 개발',
          ],
          skillKeywords: ['Java', 'Spring Boot', 'Mysql', 'MyBatis', 'ERP', 'CRM', 'ITAM'],
        },
        {
          title: '인프라 정리 및 네트워크 트러블슈팅',
          startedAt: '2024-01',
          endedAt: '2025-05',
          descriptions: [
            '오래된 서버 인프라 정리 및 신규 서버 구매 / 네트워크 구성',
            '리소스 부족으로 진행하고 있지 못하던 보안 업데이트 및 Grafana + Nginx와 같은 신규 모니터링 서비스 주도적 도입',
            '사내 전기점검, SSL 인증서 등에 의한 장애 복구 플랜 설계 및 매뉴얼화',
            '관리되고 있지 않던 서버 목록, DNS, Firewall 정책, 인프라 문서 등 업데이트 / R&R 협의 및 분배',
            'AWS L7 로드밸런서를 활용한 EC2 Active-Active 구성, 무중단 배포 프로세스 구현',
            'PHP 5 -> 7 업그레이드',
          ],
          skillKeywords: [
            'AWS',
            'Linux',
            'Network',
            'Docker',
            'Grafana',
            'Nginx',
            'L4/L7 Load Balancer',
          ],
        },
      ],
    },
    {
      title: '감자소프트',
      positions: [
        {
          title: '대표 / 개발 프리랜서',
          startedAt: '2021-02',
          descriptions: [
            'PHP CMS Rhymix 기반의 웹사이트 개발 및 유지보수',
            '커뮤티니 사이트에서 활용할 수 있는 다양한 플러그인 개발 및 판매',
            '결제 오픈소스 플러그인 Hotopay 개발 및 유지보수',
          ],
          skillKeywords: ['Open Source', 'Linux', 'PHP 7-8', 'Rhymix', 'Github'],
        },
      ],
    },
  ],
};

export default experience;
