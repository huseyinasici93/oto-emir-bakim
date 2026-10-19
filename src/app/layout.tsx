import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = { title: 'Oto Emir | Dijital Bakım Defteri', description: 'Araç bakım geçmişinizi QR kod ile güvenle takip edin.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
