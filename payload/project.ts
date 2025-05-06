import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '태블릿 중앙제어 프로그램 개발 및 기관 납품',
      startedAt: '2021-06',
      endedAt: '2021-12',
      where: '감자소프트',
      descriptions: [
        {
          content:
            '학교와 같은 교육기관에서 학생들에게 배포하는 태블릿에 대한 중앙제어 프로그램 개발 및 납품',
        },
        {
          content: '타사의 MDM 프로그램과 비교하여 다양한 기능과 저렴한 가격으로 윈백에 성공함.',
          descriptions: [
            { content: '사설 DNS 서버를 통한 사이트 차단 & 기기별 로그 분석 기능' },
            { content: '앱 화이트리스트 제도를 통한 설치가능 어플리케이션 필터링' },
            { content: '수 백대의 안드로이드 기기의 동시요청을 처리할 수 있도록 서버 HA 구성' },
          ],
        },
      ],
    },
    {
      title: '커뮤니티 기반 쇼핑몰 및 PG 연동 모듈 "Hotopay" 개발',
      startedAt: '2020-03',
      where: '감자소프트',
      descriptions: [
        {
          content: 'PHP 기반의 결제 모듈 및 쇼핑몰 오픈소스 개발 및 유지보수',
          descriptions: [
            { content: 'TossPayments, Kakaopay, Paypal 등 여러 PG사와 연동 / 모듈화' },
            { content: '상품 등록 및 결제 내역 관리을 위한 관리자 페이지 개발' },
            { content: 'Crontab을 활용한 정기결제 기능 구현' },
            { content: '개발이후 지속적인 보안 패치 및 신 기능 추가중' },
          ],
        },
        {
          content: 'https://github.com/Waterticket/rx-module-hotopay',
          href: 'https://github.com/Waterticket/rx-module-hotopay',
        },
      ],
    },
    {
      title: '커뮤니티 기반 모듈 제작 및 유지보수',
      startedAt: '2020-03',
      where: '감자소프트',
      descriptions: [
        {
          content:
            '래플 모듈 : 커뮤니티 내에서 경품 응모 및 추첨을 위한 모듈. Hotopay와 연동하여 결제시에 응모가능한 기능 존재.',
        },
        {
          content:
            '광고집행 모듈 : 정적 캐시와 Mysql DB를 활용하여 일반 사용자가 사이트에 광고를 올릴 수 있음.',
        },
        {
          content:
            '미션 모듈 : 커뮤니티에서 글을 쓰거나 댓글을 다는 등 활동을 하면 설정해둔 포인트를 지급해줌.',
        },
        {
          content:
            '길드 모듈 : 커뮤니티 내에서 길드 시스템을 구현하여 길드원 관리 및 포인트 소모 컨텐츠를 추가함.',
        },
      ],
    },
  ],
};

export default project;
