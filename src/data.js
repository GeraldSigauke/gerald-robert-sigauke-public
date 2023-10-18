import { images } from './constants';

export const navLink = [
  {
    id: 1,
    link: 'About',
    url: '#about',
  },
  {
    id: 2,
    link: 'Résumé',
    url: '#résumé',
  },
  {
    id: 3,
    link: 'Skills',
    url: '#skills',
  },
  {
    id: 4,
    link: 'Portfolio',
    url: '#portfolio',
  },
  {
    id: 5,
    link: 'Testimonials',
    url: '#testimonials',
  },
  {
    id: 6,
    link: 'Contact Me',
    url: '#contactMe',
  },
];

export const ps = [
  {
    id: 1,
    img: images.spid,
    img2: images.spid2,
    title: 'PETS IN DISTRESS',
    category: 'landingPages',
    desc: 'A Landing Page For A Fund Raising Organisation. I used React Js, Tailwind Css, Javascript, CSS, React-Icons, React-Fast-Marquee and FormSubmit. The GitHub repository for this project is private. You cannot access it.',
    url: 'https://hazyviewpetsindistress.netlify.app/',
    url2: '#!'
  },
  {
    id: 2,
    img: images.soac,
    img2: images.soac2,
    title: 'OLIESTA AFTERSCHOOL CARE',
    category: 'landingPages',
    desc: 'A Landing Page For A Homework Assistance and Afterschool Care Business. I used React Js, Tailwind Css, Javascript, CSS, React Icons and FormSubmit. The GitHub repository for this project is private. You cannot access it.',
    url: 'https://oliestaafterschoolcare.netlify.app/',
    url2: '#!'
  },
  {
    id: 3,
    img: images.sos,
    img2: images.sos2,
    title: 'OLIESTA SOFTWORKS',
    category: 'anyOtherWebApps',
    desc: 'A Landing Page For A Software Development Business. I used React Js, Tailwind Css, Javascript, CSS, React-Icons, React-Fast-Marquee and FormSubmit. The GitHub repository for this project is public. You can access it.',
    url: 'https://oliestasoftworks.netlify.app/',
    url2: 'https://github.com/GeraldSigauke/oliesta-softwork'
  },
  {
    id: 4,
    img: images.gs1,
    img2: images.gs2,
    title: 'GERALD SIGAUKE',
    category: 'landingPages',
    desc: 'My old personal portfolio web app. I used React Js, Framer Motion, Javascript and SCSS for the frontend. I used Sanity IO for the backend. The GitHub repository for this project is private. You cannot access it.',
    url: 'https://geraldsigauke.netlify.app/',
    url2: '#!'
  },
  {
    id: 5,
    img: images.oa1,
    img2: images.oa2,
    title: 'OLIESTA ADMIN',
    category: 'anyOtherWebApps',
    desc: 'A dashboard or an admin portion for a web app. I used React Js, Material UI, React Circular Progreesbar, Recharts, Javascript and SASS. The GitHub repository for this project is public. You can access it.',
    url: 'https://oliestaadmin.netlify.app/',
    url2: 'https://github.com/GeraldSigauke/admin'
  },
  {
    id: 6,
    img: images.sof,
    img2: images.sof2,
    title: 'OLIESTA FASHIONS',
    category: 'ecommerceSites',
    desc: 'The frontend portion for a web app. I used React Js, Bootstrap 5, React-Icons, React-Skills and React-Fast-Marquee. The GitHub repository for this project is public. You can access it.',
    url: 'https://oliestafashions.netlify.app/',
    url2: 'https://github.com/GeraldSigauke/oliesta-fashions-master'
  },
];

export const testimonials = [
  {
    id: 1,
    img: images.lhpid,
    name: 'Vivien',
    profession: 'Teacher',
    testimony: 'We love the Landing Page Gerald made. It is lovely.',
    rating: '5',
  },
  {
    id: 2,
    img: images.l_oac,
    name: 'Priscilla',
    profession: 'Architect',
    testimony: 'Gerald made a beautiful landing page for us.',
    rating: '5',
  },
  {
    id: 3,
    img: images.l_of,
    name: 'Stellah',
    profession: 'CEO',
    testimony:
      'I am pleased with the work Gerald is doing for us.',
    rating: '5',
  },
  {
    id: 4,
    img: images.l_of,
    name: 'Oliver',
    profession: 'CEO',
    testimony:
      'We are more than pleased with the work Gerald is doing for us.',
    rating: '5',
  },
];

export const buttons = [
  {
    name: 'All',
    value: 'all',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-800 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-1 lg:mb-10'
  },
  {
    name: 'Landing Pages',
    value: 'landingPages',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-800 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-1 lg:mb-10'
  },
  {
    name: 'Ecommerce Sites',
    value: 'ecommerceSites',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-800 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-1 lg:mb-10'
  },
  {
    name: 'Any Other Web Apps',
    value: 'anyOtherWebApps',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-800 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-10 lg:mb-10'
  },
];

export const logoClouds = [
  {
    id: 1,
    logo: 'Hazyview Pets In Distress Logo',
    url: images.logo_hpid,
  },
  {
    id: 2,
    logo: 'Oliesta Afterschool Care Logo',
    url: images.logo_oac,
  },
  {
    id: 3,
    logo: 'Oliesta Fashions Logo',
    url: images.logo_of,
  },
];

export const contactField = [
  {
    id: 1,
    id1: 'text3',
    for1: 'name',
    label1: 'Full Name',
    type2: 'text',
    name2: 'name',
    id2: 'name',
    placeholder2: 'Full Name',
    action: ''
  },
  {
    id: 2,
    id1: 'text3',
    for1: 'email',
    label1: 'Email Address',
    type2: 'email',
    name2: 'email',
    id2: 'email',
    placeholder2: 'example@domain.com',
    action: 'https://formsubmit.co/oliestasoftworks@gmail.com'
  },
  {
    id: 3,
    id1: 'text3',
    for1: 'subject',
    label1: 'Subject',
    type2: 'text',
    name2: 'subject',
    id2: 'subject',
    placeholder2: 'Enter your subject',
    action: ''
  },
];

export const footerProduct = [
  {
    id: 1,
    product: 'Landing Pages',
    url: '#portfolio',
  },
  {
    id: 2,
    product: 'Ecommerce Sites',
    url: '#portfolio',
  },
  {
    id: 3,
    product: 'Any Other Web Apps',
    url: '#portfolio',
  },
  {
    id: 4,
    product: 'Mobile Apps',
    url: '#portfolio',
  },
];

export const footerUsefulLinks = [
  {
    id: 1,
    usefulLink: 'About',
    url: '#about',
  },
  {
    id: 2,
    usefulLink: 'Résumé',
    url: '#résumé',
  },
  {
    id: 4,
    usefulLink: 'Skills',
    url: '#skills',
  },
  {
    id: 4,
    usefulLink: 'Portfolio',
    url: '#portfolio',
  },
  {
    id: 5,
    usefulLink: 'Testimonials',
    url: '#testimonials',
  },
  {
    id: 6,
    usefulLink: 'Contact Me',
    url: '#contactMe',
  },
];
