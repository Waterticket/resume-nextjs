import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '"접속자 유량제어 시스템 설계 및 구현"',
      subTitle: '2022년 한양대학교 ERICA Jaram 학회 발표',
      at: '2022-10',
      descriptions: [
        {
          content: 'GoLang, Redis를 활용한 실시간 접속자 유량제어 시스템의 설계 및 구현, 검증과정 발표',
        },
        {
          content: 'Video:',
          postHref: 'https://www.youtube.com/watch?v=rqw-wkacHqg&t=1741s',
        },
      ],
    },
  ],
};

export default presentation;
