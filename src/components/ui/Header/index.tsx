import styles from './Header.module.scss'
import { year } from '@/ressources/projects';
import Image from 'next/image';
import quadrare from "@/ressources/projects/pictures/quadrare.jpg"

export default function Header() {

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Olivier Bretaud</h1>
        <h1>Développeur React.js/Node.js</h1>
        <p>Depuis {year} ans, je crée des applications web<br />pensées pour offrir une expérience <br />utilisateur de qualité.</p>
      </div>
      <div className={styles.bg}>
        <div className={styles.slider}>
          <div className={`${styles.imageContainer} ${styles.active}`}>
            <Image
              src={quadrare}
              alt="Quadrare project background"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}