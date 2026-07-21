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

function ChineseIntroduction() {
  return <>
    <p>我是陳俊綱（Ryan Chen），歡迎來到我的個人網頁及作品集。我擁有十五年以上專業的網頁及應用開發經驗，開發一個可擴展性與 RWD 的網頁一直以來都是我的興趣。我在高中時期製作了我的第一個網頁後，到如今體驗了網路的進化與進程，可以說是一段非常奇妙的旅程。</p>
    <p>Gorilla 之後我在 <ExternalLink href="https://store.supermicro.com/us_en/">Supermicro Computer</ExternalLink> 的行銷團隊裡面擔任資深前端工程師。我們 web team 主要是負責公司全球官網以及電商平台的開發維護。我有機會在這個時間裡使用到 Functional based 的 ReactJS 以及 Tailwind CSS 技術去做開發。</p>
    <p>我曾經在 <ExternalLink href="https://www.gorilla-technology.com/">Gorilla Technology Group</ExternalLink> 的 Security Covergence 團隊裡面擔任軟體工程師。我主要是負責公司裡的各項產品以及專案的前端開發。我們團隊負責開發線上的應用程式進行網路封包的監控管理以及網路惡意程式的行為追蹤。我們主要瞄準的客戶群是小型的企業公司以及政府單位。</p>
    <p>在之前的兩年半裡我在 <ExternalLink href="https://www.verizonwireless.com/">Verizon</ExternalLink> 服務並擔任資深軟體工程師。Verizon 是全美國最大的電信服務供應商。我在公司裡的網路服務團隊裡，也號稱是 Verizon 實驗室組裡面，根據公司推展的方向以及商業目標負責 <a href="#verizon">創新產品</a> 的開發。這段時間裡我有機會學習與應用到最新的前端技術如 AngularJS 與 React。能夠參與並且明白到自己所負責的項目將會被上百萬的用戶看到與使用，真的是一種很棒的經驗。</p>
    <p>在 Verizon 之前我在 <ExternalLink href="https://www.google.com/">Google</ExternalLink> 當約聘的網路開發工程師。我在 Brand Studio 團隊裡面，我們小組主要是負責支援開發與維護 Google 旗下擁有的眾多 <a href="#google">行銷網站</a>，如 Google Maps、Gmail 以及 Google Chromes。在這短短一年的時間裡我有榮幸跟很多優秀的工程師與產品經理們合作。像我這樣以軟體工程師為職業的人，能夠在 Google 總部裡工作對我來說就像是美夢成真一樣。</p>
    <p>在進 Google 工作之前我在 <ExternalLink href="https://us.etrade.com/">E*TRADE</ExternalLink> 裡擔任軟體工程師。E*TRADE 是一家總部設在紐約並提供金融方面服務的公司，它主要給客戶進行網路上的股票基金買賣交易。我在行動應用團隊裡負責開發以網路為基礎的平板電腦 <a href="#etrade">應用程式</a>，我的工作是負責建造開發整潔、響應式與跨平台的應用程式給不同的行動裝置。我們從零開始的應用程式經歷了一整年的開發後在 2013 年按照計劃上線，並且在當時的 iTunes（App Store）與 Google Play 都可以下載得到。</p>
    <p>當我沒有在忙著寫程式的時候，我很享受打網球、聽音樂與看電影。我沒有很常旅遊，但我去過了日本兩次並且深深地喜歡上日本的文化。我自己花了一年多的時間自學了日文，並且在 2010 年如願考到了 N4 的日文檢定考試。但是從那之後好像日文就沒有再進步了 :P。至於說到網球方面，我是費德勒的超級粉絲。即使以他現在的年紀，他還是能夠打出不少非常有強度的比賽！哦，如果你好奇網頁上方那隻狗狗是誰的話，他的名字是麻吉。他是一隻聰明、善解人意、對陌生人不太友善但卻能照亮我每一天的小東西。非常地想念你，麻吉！</p>
  </>;
}

function EnglishIntroduction() {
  return <>
    <p>My name is Ryan Chen (陳俊綱), and I welcome you to my site. I have more than 15 years of professional experience in web applications development. Building scalable and responsive web has always been my passion. I started my first web site when I was in high school, and it has been an amazing journey to see how the web has evolved and progressed through out the past decades.</p>
    <p>After Gorilla, I worked for <ExternalLink href="https://store.supermicro.com/us_en/">Supermicro Computer</ExternalLink> as a Sr. Front-End Engineer in the marketing team. Our web team is responsible for developing and maintaing the company&apos;s global offical site and the E-commerce platform. I was able to use the functional componenets based ReactJS and Tailwind CSS to develop our products.</p>
    <p>I worked for <ExternalLink href="https://www.gorilla-technology.com/">Gorilla Technology Group</ExternalLink> as a Software Engineer in the Security Convergence team. I was responsible for developing and maintaining the company&apos;s various products and projects. Our team is focusing on developing an online applications that tracks internet packets and detect malware and suspicious behaviors. Our clients are the small/medium business and government organizations.</p>
    <p>I worked for <ExternalLink href="https://www.verizonwireless.com/">Verizon</ExternalLink> as a Sr. Software Engineer for 2.5 years while I was in the United States. Verizon is the largest U.S. wireless communications service provider. I was in the Verizon Lab under Internet Services Team, where we built <a href="#verizon">innovate products</a> to meet the company&apos;s directions and business goals. I had an opportunity to learn and apply some of the latest technologies like AngularJS and React on the projects. It was such a rewarding experience to know that the products I worked on have been viewed and used by millions of Verizon&apos;s customers in U.S.</p>
    <p>Before Verizon I was working for <ExternalLink href="https://www.google.com/">Google</ExternalLink> as a contract Web Developer. I was in the Brand Studio team, and our team supported many of the Google&apos;s <a href="#google">marketing sites</a> including Google Maps and Google Chromes. During that year I have worked with many talented Engineers and Product Managers. It is really a dream come true for me to work for a company like Google.</p>
    <p>Prior to Google I worked for <ExternalLink href="https://us.etrade.com/">E*TRADE Financial</ExternalLink> as a Software Engineer. E*TRADE is a financial services company headquartered in New York, and it provides the services for the customers to trade their securities online. I was in the Mobile App team and we built a <a href="#etrade">web based applications</a> for mobile devices. My job was to build responsive cross-platforms applications for different devices like iPhone and iPad. When I joined the team we built the app from scratch, and it was completed and released in March 2013. The app was available to download on App Store and Google Play Store.</p>
    <p>When not coding I enjoy playing tennis, listening music and watching movies. I don&apos;t travel a lot, but I have been to Japan several times and I really like its culture. I self-learned Japanese and passed a JLPT N4 exam in 2010, but my Japanese didn&apos;t really improve from that point :p. As far as the tennis goes, I am a big fan of Roger Federer. Despite his current age, he is still able to play many compitive games. Oh, in case you are wondering about the adorable dog on top of this page, his name is Mochi. He was a smart, thoughtful and not-always-friendly little thing who always brighten up my day. Really miss you, Mochi!</p>
  </>;
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
        <section className="about" id="about"><div className="site-container"><h2>About Me</h2><div className="about__grid"><div><div className="intro-heading"><h3>My Introduction</h3><div><button type="button" className={language === 'zh' ? 'selected' : ''} onClick={() => setLanguage('zh')}>中文</button><button type="button" className={language === 'en' ? 'selected' : ''} onClick={() => setLanguage('en')}>English</button></div></div>{language === 'zh' ? <ChineseIntroduction /> : <EnglishIntroduction />}</div><aside><h3>My Qualification Skills</h3><ul>{skills.map(([skill, href]) => <li key={skill}><ExternalLink href={href}>{skill}</ExternalLink></li>)}</ul></aside></div><a className="section-arrow" href="#portfolio" aria-label="Go to portfolio" /></div></section>
        <section className="portfolio" id="portfolio"><div className="site-container"><h2>Portfolio</h2>{portfolioGroups.map((group) => <section className="portfolio-group" id={group.id} key={group.id}><h3>{group.company} <span>({group.years})</span></h3>{group.projects.map((project) => <PortfolioItem project={project} key={project.title} isOpen={openProject === project.title} onToggle={() => setOpenProject((open) => open === project.title ? null : project.title)} />)}</section>)}<a className="section-arrow" href="#testimonials" aria-label="Go to testimonials" /></div></section>
        <section className="testimonials" id="testimonials"><h2>Testimonials</h2><blockquote><p>“Just wanted to drop you a note to call out the wonderful work of one of your teammates, Ryan Chen. I tried to give him a peer bonus but was told I couldn&apos;t because he is a contractor.</p><p>I can&apos;t begin to tell you how awesome he has been in helping me with Google.org Marketing. He has gone above and beyond the call of duty to answer questions, troubleshoot challenges, and ensure our websites are running smoothly and effectively.</p><p>Ryan represents the best of Google and we&apos;re lucky to have him on the team.”</p><footer>Lauren Baum — Product Marketing Manager at Google, 2014</footer></blockquote><a className="section-arrow section-arrow--light" href="#contact" aria-label="Go to contact" /></section>
      </main>
      <footer className="site-footer" id="contact"><h2>Contact</h2><a href="mailto:ryan26tw@yahoo.com">ryan26tw@yahoo.com</a><ExternalLink href="https://www.linkedin.com/in/ryan-chen-web/">LinkedIn Profile</ExternalLink><ExternalLink href="/file/RyanChenResume.pdf">My resume</ExternalLink><a className="to-top" href="#top" aria-label="Back to top">▲</a><Image src="/images/logo2.png" alt="RCW" width={129} height={80} /><p>ryanchenweb.com</p><p>© {new Date().getFullYear()}</p></footer>
    </>
  );
}
