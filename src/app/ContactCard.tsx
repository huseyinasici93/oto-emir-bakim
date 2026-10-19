import Image from 'next/image';

export default function ContactCard() {
  return (
    <a className="contact-brand-card" href="tel:+905434465835" aria-label="Caner Aşıcı'yı ara: 0543 446 58 35">
      <Image
        src="/caner-contact-card.jpg"
        alt="Oto Emir — Caner Aşıcı, 0543 446 58 35"
        width={1400}
        height={868}
        sizes="(max-width: 600px) 130px, 148px"
      />
    </a>
  );
}
