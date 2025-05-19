import './styles/globals.scss';

export const metadata = {
  title: 'Rubyrose Ventures - Interior Design Services',
  description: 'Mom’s Space Makeover Package by Rubyrose Ventures',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
