import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'PHP',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Shell Scripting',
      level: 2,
    },
    {
      title: 'Golang',
      level: 1,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'VPS (EC2)',
      level: 3,
    },
    {
      title: 'Proxmox',
      level: 2,
    },
  ],
};

const InfraAndDatabase: ISkill.Skill = {
  category: 'Infrastructure & Database',
  items: [
    { title: 'AWS', level: 3 },
    { title: 'MySQL', level: 3 },
    { title: 'Redis', level: 3 },
    { title: 'Nginx', level: 3 },
    { title: 'Apache', level: 3 },
    { title: 'Docker', level: 3 },
    { title: 'Linux', level: 3 },
    { title: 'Jenkins', level: 3 },
    { title: 'AWS CodeDeploy', level: 3 },
    { title: 'Oracle Cloud', level: 2 },
    { title: 'PostgreSQL', level: 2 },
    { title: 'Grafana', level: 2 },
    { title: 'Redis', level: 2 },
    { title: 'LLM', level: 2 },
  ],
};

const networks: ISkill.Skill = {
  category: 'Networks',
  items: [
    { title: 'Firewall', level: 2 },
    { title: 'L4/L7 Load Balancer', level: 2 },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, InfraAndDatabase, virtualization, networks],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
