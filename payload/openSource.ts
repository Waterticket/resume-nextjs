import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Hotopay',
      descriptions: [
        {
          content: 'PHP Rhymix 기반 PG 결제 연동 모듈',
        },
        {
          content: 'https://github.com/Waterticket/rx-module-hotopay',
          href: 'https://github.com/Waterticket/rx-module-hotopay',
        },
        {
          content: 'https://hotopaydocs.potatosoft.kr/',
          href: 'https://hotopaydocs.potatosoft.kr/',
        },
      ],
    },
    {
      title: 'Rhymix CMS',
      descriptions: [
        {
          content: 'FCM notification 항목을 추가할 수 있는 메소드 기여',
          descriptions: [
            {
              content: 'https://github.com/rhymix/rhymix/pull/1841',
              href: 'https://github.com/rhymix/rhymix/pull/1841',
            },
          ],
        },
        {
          content: 'Deprecated 메소드 오류 수정',
          descriptions: [
            {
              content: 'https://github.com/rhymix/rhymix/pull/2066',
              href: 'https://github.com/rhymix/rhymix/pull/2066',
            },
          ],
        },
      ],
    },
    {
      title: 'GODNS',
      descriptions: [
        {
          content: '와일드카드 하위 DNS 분기 관련 버그 수정 기여',
          descriptions: [
            {
              content: 'https://github.com/kenshinx/godns/pull/47',
              href: 'https://github.com/kenshinx/godns/pull/47',
            },
          ],
        },
      ],
    },
  ],
};

export default openSource;
