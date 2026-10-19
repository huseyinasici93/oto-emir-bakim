import Image from 'next/image';

export default function ContactCard() {
  return (
    <footer className="contact-footer">
      <a href="tel:+905434465835" aria-label="Caner Aşıcı'yı ara: 0543 446 58 35">
        <Image
          src="/caner-contact-card.jpg"
          alt="Oto Emir servis iletişimi: Caner Aşıcı, 0543 446 58 35"
          width={1400}
          height={868}
          sizes="(max-width: 760px) calc(100vw - 36px), 760px"
        />
      </a>
    </footer>
  );
}
