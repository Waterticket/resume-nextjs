import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한양대학교 ERICA (Hanyang University)',
      subTitle: '재료화학공학과 / 컴퓨터학부 2학년 휴학. (GPA 4.3/4.5)',
      startedAt: '2022-03',
    },
    {
      title: '한국디지털미디어고등학교 (Korea Digital Media High School)',
      subTitle: '웹프로그래밍과 졸업',
      startedAt: '2019-03',
      endedAt: '2022-01',
    },
  ],
};

export default education;
