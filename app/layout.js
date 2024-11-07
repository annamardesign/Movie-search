import './globals.css';

export const metadata = {
  title: 'Dashboard Home',
  description: 'HackSoft Feed',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='background'>{children}</div>
      </body>
    </html>
  );
}
