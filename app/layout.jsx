import './globals.css';

export const metadata = {
  title: 'Ryan Chen | Front-End Engineer',
  description: "Ryan Chen's portfolio of web application development work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
