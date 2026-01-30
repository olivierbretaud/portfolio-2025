"use client"

import styles from './Header.module.scss'
import projects from '@/ressources/projects';
import { IProject } from '@/types/projects';
import Image from 'next/image';

export default function Header() {
  const year = new Date().getFullYear() - 2019;
  const pictures = projects.filter((p: IProject) => p.title === 'Bibliocta').map((p: IProject) => p.picture);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Olivier Bretaud</h1>
        <h1>Développeur React.js/Node.js</h1>
        <p>Développeur JavaScript full-stack depuis {year} ans,<br />je crée des applications web pensées pour offrir<br />une expérience utilisateur de qualité.</p>
      </div>
      <div className={styles.bg}>
        <div
          className={styles.imageContainer}
        >
          <Image
            src={pictures[0]}
            alt="Project background"
            fill
            objectFit="cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}