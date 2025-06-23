"use client"

import styles from './Header.module.scss'
import projects from '@/ressources/projects';
import { IProject } from '@/types/projects';
import Image from 'next/image';

export default function Header() {
  const year = new Date().getFullYear() - 2019;
  const pictures = projects.filter((p:IProject, i: number) => i === 3).map((p:IProject) => p.picture);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Olivier Bretaud</h1>
        <h1>Développeur React.js/Node.js</h1>
        <p>Je développe des applications JavaScript<br/>au sein de l&apos;agence Bakasable depuis {year} ans.<br/>Voici quelques-uns de mes projets préférés.</p>
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