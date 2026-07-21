'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';

const skills = [
  ['HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
  ['CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
  ['JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
  ['React', 'https://react.dev/'],
  ['Next.js', 'https://nextjs.org/'],
  ['TypeScript', 'https://www.typescriptlang.org/'],
  ['Tailwind CSS', 'https://tailwindcss.com/'],
  ['Vue.js', 'https://vuejs.org/'],
  ['Material-UI', 'https://mui.com/'],
  ['Bootstrap', 'https://getbootstrap.com/'],
  ['Vite', 'https://vite.dev/'],
  ['Git', 'https://git-scm.com/'],
  ['webpack', 'https://webpack.js.org/'],
];

const introductions = {
  en: [
    "My name is Ryan Chen (陳俊綱), and I welcome you to my site. I have more than 15 years of professional experience in web application development. Building scalable and responsive websites has always been my passion. I started my first website in high school, and it has been an amazing journey to see how the web has evolved over the decades.",
    'After Gorilla, I worked for Supermicro Computer as a Senior Front-End Engineer in the marketing team. Our web team developed and maintained the company’s global site and e-commerce platform using functional React components and Tailwind CSS.',
    'I worked for Gorilla Technology Group as a Software Engineer in the Security Convergence team. I developed and maintained products that tracked internet packets and detected malware and suspicious behavior for small and medium businesses and government organizations.',
    'At Verizon, I worked as a Senior Software Engineer for 2.5 years. In the Verizon Lab under the Internet Services Team, we built innovative products that supported the company’s direction and business goals. I used AngularJS and React on products viewed and used by millions of Verizon customers.',
    'Before Verizon, I worked at Google as a contract Web Developer on the Brand Studio team, supporting marketing sites including Google Maps and Google Chrome. Before Google, I was a Software Engineer at E*TRADE Financial, building responsive web applications for tablets and mobile devices.',
    'When not coding, I enjoy tennis, music, and movies. I have visited Japan several times and self-learned Japanese, passing JLPT N4 in 2010. I am also a big Roger Federer fan. The dog at the top of this page was Mochi—smart, thoughtful, and deeply missed.',
  ],
  zh: [
    '我是陳俊綱（Ryan Chen），歡迎來到我的個人網頁及作品集。我擁有十五年以上專業的網頁及應用開發經驗，開發具擴展性與響應式設計的網站一直是我的興趣。',
    '我曾在 Supermicro Computer 行銷團隊擔任資深前端工程師，負責全球官網與電商平台的開發維護，並使用 React 與 Tailwind CSS。',
    '我曾在 Gorilla Technology Group 的 Security Convergence 團隊擔任軟體工程師，負責產品與專案前端開發，協助企業與政府單位進行網路封包監控及惡意程式行為追蹤。',
    '在 Verizon 的兩年半期間，我擔任資深軟體工程師，於 Internet Services Team 開發符合公司方向與商業目標的創新產品，並使用 AngularJS 與 React。',
    '在此之前，我於 Google Brand Studio 團隊支援眾多行銷網站；也曾在 E*TRADE Financial 的行動應用團隊開發響應式跨平台平板應用程式。',
    '工作之餘我喜歡打網球、聽音樂與看電影，也曾自學日文並通過 JLPT N4。網頁上方的狗狗叫麻吉（Mochi），牠一直是我最想念的家人。',
  ],
};

const portfolioGroups = [
  { company: 'Supermicro', years: '2023 - 2025', id: 'supermicro', projects: [
    { title: 'Supermicro eStore System Builder', image: 'supermicro1.png', notes: ['Develop and maintain the system builder configuration widget.', 'Widget is built with React.', 'Responsive site across different devices.'], url: 'https://www.supermicro.com/en/products/system/hyper/1u/as%20-1115hs-tnr', tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
    { title: 'Supermicro eStore My Configurations', image: 'supermicro2.png', notes: ['Users can save a configuration without logging in.', 'Customers can edit, share, or delete configurations from a list.', 'Built with React.'], url: 'https://store.supermicro.com/us_en/customer/configurations/', tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
  ] },
  { company: 'Gorilla Technology', years: '2017 - 2023', id: 'gorilla', projects: [
    { title: 'Gorilla Security Convergence Platform (SCP)', image: 'gorilla1.png', notes: ['Develop and maintain the company’s SCP product.', 'The application is built with React.', 'Use Material UI and SCSS/LESS for the look and feel.'], url: 'https://www.gorilla-technology.com/technologies/security-convergence/scp/', tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Material UI'] },
  ] },
  { company: 'Verizon', years: '2014 - 2017', id: 'verizon', projects: [
    { title: 'Verizon Internet Services Portal', image: 'verizon.png', notes: ['Transform mock-ups into functional web applications.', 'Single-page applications using AngularJS.', 'Responsive sites across different devices.'], url: 'https://www.internetservices.verizon.com/', tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AngularJS'] },
    { title: 'Images Annotation Tool', image: 'image-annotation.png', notes: ['Internal tool to support localization of mock-ups.', 'Users upload a screenshot, add annotations, and generate a JSON file.', 'Built with React and praised by the Product Manager.'], url: 'http://www.ryanchenweb.com/tools/', tech: ['HTML', 'CSS', 'JavaScript', 'React'] },
  ] },
  { company: 'Google', years: '2013 - 2014', id: 'google', projects: [
    { title: 'Google Glass', image: 'google_glass.jpg', notes: ['Added the Explorer Stories module.', 'Performed code review of third-party agency work.', 'Handled content updates requested by Product Managers.'], url: 'http://www.google.com/glass/start', tech: ['HTML', 'CSS', 'JavaScript', 'Agency'] },
    { title: 'Google.org', image: 'google_dotorg.jpg', notes: ['Worked on migration from Google Giving to Google.org.', 'Updated Spotlights pages and modules.', 'Acted as the main developer contact.'], url: 'http://www.google.org', tech: ['HTML', 'CSS', 'Database'] },
    { title: 'Google Maps PhotoSphere', image: 'photosphere.jpg', notes: ['Worked on the Google Maps Photo Sphere redesign.', 'Localized pages for different languages and locales.', 'Created responsive layouts across devices.'], url: 'http://www.google.com/maps/about/contribute/photosphere/', tech: ['HTML', 'CSS'] },
  ] },
  { company: 'E*TRADE', years: '2011 - 2013', id: 'etrade', projects: [
    { title: 'E*TRADE Mobile App for Tablets', image: 'etrade.jpg', notes: ['Created the application layout using HTML and CSS.', 'Worked on responsive design across tablets.', 'Used Backbone.js for single-page applications.'], tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'] },
  ] },
  { company: 'QuinStreet', years: '2006 - 2011', id: 'quinstreet', projects: [
    { title: 'World Wide Learn', image: 'wwl.jpg', notes: ['Contributed to the site redesign and code refactor.', 'Worked on MVC conversion using CodeIgniter.', 'Handled content, image, and database updates.'], url: 'http://www.worldwidelearn.com', tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'] },
    { title: 'Army Study Guide', image: 'asg.jpg', notes: ['Contributed to the site redesign and code refactor.', 'Worked on MVC conversion using CodeIgniter.', 'Acted as a main developer contact.'], url: 'http://www.armystudyguide.com', tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'] },
  ] },
];

function ExternalLink({ href, children, onClick }) {
  return <a href={href} target="_blank" rel="noreferrer" onClick={onClick}>{children}</a>;
}

function PortfolioItem({ project, isOpen, onToggle }) {
  const contentId = `project-${project.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`;
  const projectRef = useRef(null);
  const [expandedHeight, setExpandedHeight] = useState(120);

  useLayoutEffect(() => {
    if (isOpen && projectRef.current) {
      setExpandedHeight(projectRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <article ref={projectRef} className={`project ${isOpen ? 'project--open' : ''}`} style={{ '--project-height': `${expandedHeight}px` }} onClick={onToggle}>
      <div className="project__thumbnail">
        {/* eslint-disable-next-line @next/next/no-img-element -- static portfolio captures retain their source aspect ratios. */}
        <img src={`/images/portfolio/${project.image}`} alt="" />
      </div>
      <div className="project__details">
        <button className="project__trigger" type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={(event) => { event.stopPropagation(); onToggle(); }}>
          <span className="project__title">{project.title}</span><span className="project__chevron" aria-hidden="true" />
        </button>
        <div className="project__content" id={contentId}>
          <ul>{project.notes.map((note) => <li key={note}>{note}</li>)}{project.url && <li><ExternalLink href={project.url} onClick={(event) => event.stopPropagation()}>Visit site</ExternalLink></li>}</ul>
          <ul className="technology">{project.tech.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProject, setOpenProject] = useState(null);
  const navigation = [['About Me', 'about'], ['Portfolio', 'portfolio'], ['Testimonials', 'testimonials'], ['Contact', 'contact']];
  return (
    <>
      <header className="site-header" id="top">
        <div className="site-container nav"><a href="#top" aria-label="Ryan Chen home"><Image src="/images/logo1.png" alt="RCW" width={129} height={80} priority /></a><button className="menu" type="button" aria-expanded={isMenuOpen} aria-controls="site-navigation" onClick={() => setIsMenuOpen((open) => !open)}>Menu</button><nav id="site-navigation" className={isMenuOpen ? 'open' : ''}><ul>{navigation.map(([label, id]) => <li key={id}><a href={`#${id}`} onClick={() => setIsMenuOpen(false)}>{label}</a></li>)}<li><ExternalLink href="/file/RyanChenResume.pdf">Resume</ExternalLink></li></ul></nav></div>
      </header>
      <main>
        <section className="hero"><h1>Hello, I&apos;m Ryan Chen<span aria-hidden="true">_</span></h1></section>
        <section className="about" id="about"><div className="site-container"><h2>About Me</h2><div className="about__grid"><div><div className="intro-heading"><h3>My Introduction</h3><div><button type="button" className={language === 'zh' ? 'selected' : ''} onClick={() => setLanguage('zh')}>中文</button><button type="button" className={language === 'en' ? 'selected' : ''} onClick={() => setLanguage('en')}>English</button></div></div>{introductions[language].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><aside><h3>My Qualification Skills</h3><ul>{skills.map(([skill, href]) => <li key={skill}><ExternalLink href={href}>{skill}</ExternalLink></li>)}</ul></aside></div><a className="section-arrow" href="#portfolio" aria-label="Go to portfolio" /></div></section>
        <section className="portfolio" id="portfolio"><div className="site-container"><h2>Portfolio</h2>{portfolioGroups.map((group) => <section className="portfolio-group" id={group.id} key={group.id}><h3>{group.company} <span>({group.years})</span></h3>{group.projects.map((project) => <PortfolioItem project={project} key={project.title} isOpen={openProject === project.title} onToggle={() => setOpenProject((open) => open === project.title ? null : project.title)} />)}</section>)}<a className="section-arrow" href="#testimonials" aria-label="Go to testimonials" /></div></section>
        <section className="testimonials" id="testimonials"><h2>Testimonials</h2><blockquote><p>“Just wanted to drop you a note to call out the wonderful work of one of your teammates, Ryan Chen. I tried to give him a peer bonus but was told I couldn&apos;t because he is a contractor.</p><p>I can&apos;t begin to tell you how awesome he has been in helping me with Google.org Marketing. He has gone above and beyond the call of duty to answer questions, troubleshoot challenges, and ensure our websites are running smoothly and effectively.</p><p>Ryan represents the best of Google and we&apos;re lucky to have him on the team.”</p><footer>Lauren Baum — Product Marketing Manager at Google, 2014</footer></blockquote><a className="section-arrow section-arrow--light" href="#contact" aria-label="Go to contact" /></section>
      </main>
      <footer className="site-footer" id="contact"><h2>Contact</h2><a href="mailto:ryan26tw@yahoo.com">ryan26tw@yahoo.com</a><ExternalLink href="https://www.linkedin.com/in/ryan-chen-web/">LinkedIn Profile</ExternalLink><ExternalLink href="/file/RyanChenResume.pdf">My resume</ExternalLink><a className="to-top" href="#top" aria-label="Back to top">▲</a><Image src="/images/logo2.png" alt="RCW" width={129} height={80} /><p>ryanchenweb.com</p><p>© {new Date().getFullYear()}</p></footer>
    </>
  );
}
