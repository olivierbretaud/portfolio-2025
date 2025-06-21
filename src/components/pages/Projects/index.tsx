import React from 'react'
import styles from './Projects.module.scss';
import Card from '@/components/ui/Card';
import projects from '@/ressources/projects';
import { ProjectType } from '@/types/projects';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.cards}>
        {projects.map((p:ProjectType,i: number) => <Card key={`${p.title}`} index={i} project={p} />)}
      </div>
    </div>
  )
}