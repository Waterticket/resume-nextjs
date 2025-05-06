import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 웹 백엔드 개발과 인프라 네트워크에 깊은 관심을 가지고 실무 경험을 쌓아온 개발자 김영상입니다.',
    'Java, PHP, AWS, Docker, Linux 등 다양한 기술을 활용해 서비스의 구축부터 운영, 성능 개선, 보안 강화까지 전반적인 영역에서 폭넓게 활동해 왔습니다. 특히 모니터링 시스템 도입, 무중단 배포 인프라 구성, 레거시 코드 개선, 사내 시스템의 백엔드 고도화 등에서 핵심적인 역할을 수행하며 실질적인 성과를 만들어냈습니다.',
    '2년 이상의 현업 경험을 통해, 개발 역량만큼이나 비즈니스 프로세스에 대한 이해와 원활한 커뮤니케이션의 중요성을 깊이 깨달았습니다. 단순히 주어진 기능을 개발하는 것을 넘어, 기획자 및 다양한 유관 부서와 협업하며 현실적인 요구사항을 시스템에 효과적으로 반영하고자 항상 고민하고 실천해왔습니다.',
    '저는 변화하는 기술 환경에 유연하게 적응하며, 문제를 능동적으로 해결하는 개발자입니다. 개발자의 역할을 기술 그 자체에만 한정하지 않고, 비즈니스의 성공을 위한 도구로 인식하며 꾸준히 성장해가고 있습니다. 기술과 비즈니스의 연결고리를 이해하고 함께 성장할 수 있는 개발자를 찾고 계시다면, 언제든지 편하게 연락 주세요! :D'
  ],
  sign: 'Yeongsang Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
