'use client';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body>
          <StyledComponentsRegistry>
            <div>{children}</div>
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
