import type { Metadata } from "next";
import Link from "next/link";
import styles from "./legal.module.css";

export const metadata: Metadata = {
  title: "Mentions légales — Scrowl Studio",
  description: "Mentions légales du site Scrowl Studio.",
};

const INFOS: { label: string; value: string }[] = [
  { label: "Nom de l'éditeur", value: "ALVES DA SILVA Andréas" },
  { label: "Adresse", value: "10 rue Jean Jaurès, 03100 Montluçon" },
  { label: "Email", value: "andreas.ads1103@gmail.com" },
  { label: "Forme juridique", value: "Entrepreneur Individuel" },
  { label: "Numéro SIRET", value: "999 225 139 00016" },
];

const SECTIONS: { title: string; body: string }[] = [
  { title: "Directeur de la publication", body: "Le directeur de la publication est : ALVES DA SILVA Andréas." },
  { title: "Propriété intellectuelle", body: "L'ensemble des contenus présents sur ce site (textes, images, graphismes, logos, icônes, etc.) est la propriété exclusive de ALVES DA SILVA Andréas ou de tiers ayant autorisé ALVES DA SILVA Andréas à les utiliser. Toute reproduction, totale ou partielle, sans autorisation expresse écrite, est interdite." },
  { title: "Limitation de responsabilité", body: "Les informations et services proposés sur ce site le sont à titre indicatif. ALVES DA SILVA Andréas ne saurait être tenu pour responsable des erreurs ou omissions, ainsi que des éventuelles incompatibilités liées à la consultation du site. L'utilisateur est seul responsable de l'utilisation des informations et contenus présents sur ce site." },
  { title: "Absence de collecte de données personnelles", body: "Conformément à notre politique de confidentialité, aucune donnée personnelle n'est collectée lors de la navigation sur ce site." },
  { title: "Liens hypertextes", body: "Le site peut contenir des liens vers des sites tiers. ALVES DA SILVA Andréas ne peut être tenu pour responsable du contenu ou des pratiques de ces sites, qui relèvent de la compétence exclusive de leurs éditeurs respectifs." },
  { title: "Droit applicable et juridiction compétente", body: "Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents." },
  { title: "Contact", body: "Pour toute question ou information complémentaire : andreas.ads1103@gmail.com." },
];

export default function MentionsLegales() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> Retour à l&apos;accueil
        </Link>

        <p className={styles.eyebrow}>Document légal · Scrowl Studio</p>
        <h1 className={styles.title}>Mentions légales</h1>
        <p className={styles.date}>Dernière mise à jour — 28 avril 2026</p>
        <p className={styles.kicker}>— Éditeur — Propriété — Responsabilité —</p>

        <h2 className={styles.sectionTitle}>Éditeur du site</h2>
        <p className={styles.subLabel}>Informations légales</p>

        <div className={styles.card}>
          {INFOS.map((info) => (
            <div key={info.label} className={styles.row}>
              <span className={styles.rowLabel}>{info.label}</span>
              <span className={styles.rowValue}>{info.value}</span>
            </div>
          ))}
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
