"use client"

import { motion } from "framer-motion";
import { IProject } from '@/types/projects'
import styles from './Card.module.scss'
import React from 'react'
import Image from 'next/image'
import { ImLink } from 'react-icons/im'
import { useWindowSize } from "usehooks-ts";

export default function Card({ project, index }:{ project: IProject, index: number }) {

  const { width } = useWindowSize();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      {...(width > 768
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
      )}
      exit={{ opacity: 0,  y: 20 }}
      transition={{ duration: 0.5, delay: width >= 768 ? index * 0.2 : 0.2 }}
      className={styles.card}>
      <div className={styles.image}>
        <Image src={project.picture} alt={project.title} />
      </div>
      <div className={styles.infos}>
        {project?.link ? <a href={project?.link} target='_blank'>
          <h3>{project.title}</h3>
          <ImLink />
        </a>: <h3>{project.title}</h3>}
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag: string) => <p key={`${project.title} ${tag}`}>
            {tag}
          </p>)}
          {project?.tools?.map((tag: string) => <p key={`${project.title} ${tag}`}>
            {tag}
          </p>)}
        </div>
      </div>
    </motion.div>
  )
}