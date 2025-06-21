import React from 'react'
import styles from './Gui.module.scss';
import Button from '@/components/lib/Button';
import Card from '@/components/ui/Card';
import projects from '@/ressources/projects';

export default function Gui() {
  return (
    <div className={styles.gui}>
      <div className={styles.item}>
        <h1>Headling 1</h1>
      </div>
      <div className={styles.item}>
        <h2 className="bg-brand-500">Headling 2</h2>
      </div>

      <div className={styles.item}>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </div>

      <div className={styles.item}>
        <Button>
          click on me
        </Button>
      </div>
      <div className={styles.item}>
        <Button variant='large'>
          click on me
        </Button>
      </div>

      <div className={styles.card}>
        <Card project={projects[0]} />
      </div>

    </div>
  )
}