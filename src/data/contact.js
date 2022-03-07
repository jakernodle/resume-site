import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons. import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';

const data = [
  {
    link: 'https://github.com/jakernodle',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/johnange_kernodle/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/johnange-kernodle-3a6126181/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:jakernodle@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
