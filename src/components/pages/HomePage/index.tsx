import React from 'react'
import styles from './HomePage.module.scss';
import Card from '@/components/ui/Card';
import projects from '@/ressources/projects';
import { IProject } from '@/types/projects';
import Header from '@/components/ui/Header';
import Techno from '@/components/ui/Techno';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.projects}>
        <h2>Projets réalisés</h2>
        <div className={styles.cards}>
          {projects.map((p:IProject,i: number) => <Card key={`${p.title}`} index={i} project={p} />)}
        </div>
      </div>
      <Techno />
    </div>
  )
}