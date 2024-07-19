import Image from 'next/image';
export default function Home() {
  return (
    <div className='wrapper'>
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
            <p>Share something to the community...</p>
            <button>Post</button>
          </div>
          <div className='card'></div>
        </main>
      </div>
    </div>
  );
}
