"use client"

import { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import projects from '@/ressources/projects';
import { IProject } from '@/types/projects';
import Image from 'next/image';

const SLIDE_INTERVAL = 5000;

export default function Header() {
  const year = new Date().getFullYear() - 2019;
  const pictures = projects
    .filter((p: IProject) => ['Bibliocta', 'Bakalab', 'Rennes Ville et Métropole', 'Quadrare', 'Bretagne Développement Innovation', 'OIIKOS'].includes(p.title))
    .map((p: IProject) => p.picture);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (pictures.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pictures.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [pictures.length]);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Olivier Bretaud</h1>
        <h1>Développeur React.js/Node.js</h1>
        <p>Depuis {year} ans, je crée des applications web<br />pensées pour offrir une expérience <br />utilisateur de qualité.</p>
      </div>
      <div className={styles.bg}>
        <div className={styles.slider}>
          {pictures.map((picture, index) => (
            <div
              key={index}
              className={`${styles.imageContainer} ${index === currentIndex ? styles.active : ''}`}
            >
              <Image
                src={picture}
                alt={`Project background ${index + 1}`}
                fill
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}