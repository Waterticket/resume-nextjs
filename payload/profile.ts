import { faEnvelope, faPhone, faBuilding, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/prof_img.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Yeongsang Kim',
    small: '(Waterticket)',
  },
  contact: [
    {
      title: 'me@yeongsang.kim',
      link: 'mailto:me@yeongsang.kim',
      icon: faEnvelope,
    },
    {
      title: '+82 10-4260-0186',
      link: 'tel:+821042600186',
      icon: faPhone,
    },
    {
      link: 'https://github.com/Waterticket',
      icon: faGithub,
    },
    {
      link: 'https://potatosoft.kr',
      icon: faBuilding,
    },
    {
      link: 'https://blog.naver.com/matthew218',
      icon: faRss,
    },
  ],
  notice: {
    title:
      "이메일로 연락부탁드립니다. (전화는 확인이 늦을 수 있습니다)",
    icon: faBell,
  },
};

export default profile;
