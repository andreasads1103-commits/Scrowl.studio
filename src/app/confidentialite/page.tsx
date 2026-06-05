import type { Metadata } from "next";
import Link from "next/link";
import styles from "../mentions-legales/legal.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Scrowl Studio",
  description: "Politique de confidentialité du site Scrowl Studio. Aucune donnée personnelle collectée.",
};

const SECTIONS: { title: string; body: string }[] = [
  { title: "Introduction", body: "Nous attachons une grande importance à la protection de la vie privée de nos utilisateurs. La présente politique de confidentialité a pour but de vous informer de manière transparente sur la gestion — ou l'absence de collecte — de vos données personnelles lors de votre navigation sur notre site." },
  { title: "Absence de collecte de données", body: "Nous tenons à préciser que nous ne collectons aucune donnée personnelle ou autre information vous concernant lors de votre navigation sur notre site. Aucune information relative à votre identité, adresse IP, cookies ou autre trace de navigation n'est enregistrée ou stockée sur nos serveurs." },
  { title: "Cookies et technologies similaires", body: "Notre site n'utilise pas de cookies ni d'autres technologies de suivi. Nous ne recueillons donc aucune information via ces moyens. Votre navigation reste entièrement anonyme." },
  { title: "Liens externes", body: "Bien que nous ne recueillions aucune donnée, notre site peut contenir des liens vers des sites externes — notamment vers des plateformes vidéo (YouTube, Vimeo) ou des outils de prise de rendez-vous (Calendly). Ces sites disposent de leurs propres politiques de confidentialité et nous ne sommes pas responsables de leurs pratiques. Nous vous conseillons de consulter directement leurs conditions." },
  { title: "Sécurité", body: "Même si aucune donnée n'est collectée, nous nous engageons à maintenir un environnement sécurisé et à adopter des mesures techniques adéquates pour prévenir tout accès non autorisé à notre site." },
  { title: "Modifications de la politique", body: "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. En cas de mise à jour, la nouvelle version sera publiée sur cette page avec la date de mise à jour correspondante. Nous vous invitons à consulter régulièrement cette page afin de rester informé des éventuelles modifications." },
  { title: "Contact", body: "Pour toute question ou demande relative à cette politique de confidentialité, veuillez nous contacter à l'adresse suivante : andreas.ads1103@gmail.com." },
];

export default function Confidentialite() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> Retour à l&apos;accueil
        </Link>

        <p className={styles.eyebrow}>Document légal · Scrowl Studio</p>
        <h1 className={styles.title}>Politique de confidentialité</h1>
        <p className={styles.date}>Dernière mise à jour — 28 avril 2026</p>
        <p className={styles.kicker}>— Transparence — Vie privée — Données —</p>

        <h2 className={styles.sectionTitle}>Engagement de confidentialité</h2>
        <div className={`${styles.card} ${styles.statBlock}`}>
          <span className={styles.statNumber}>0</span>
          <div>
            <p className={styles.statLabel}>Donnée personnelle collectée</p>
            <p className={styles.statBody}>Aucune information vous concernant n&apos;est enregistrée ou stockée lors de votre navigation.</p>
          </div>
        </div>

        <div className={styles.sections}>
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className={styles.blockTitle}>{s.title}</h2>
              <p className={styles.blockBody}>{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
