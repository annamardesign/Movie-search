import Image from 'next/image';
export default function Home() {
  return (
    <div className='container'>
      <nav className='nav'>
        <Image
          width={247}
          height={43}
          priority
          src='/public/images/logo.svg'
          alt='HackSoft Logo'
          className='logo'
        />
        <div className='avatar'></div>
      </nav>
      <div className='feed'>
        <aside className='sidebar'>Side</aside>
        <main className='content'>
          <div className='share'>
            <p className='shareText'>Share something to the community...</p>
            <hr className='line' />
            <button className='shareButton'>Post</button>
          </div>
          <div className='card'>
            Despite our total project numbers only increasing by 2% compared to
            last month, the 58 projects we are working on contain a significant
            increase in deliverables.
          </div>
        </main>
      </div>
    </div>
  );
}
