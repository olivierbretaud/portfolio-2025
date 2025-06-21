import { ReactNode } from 'react';
import styles from './Button.module.scss';

export default function Button({ children, variant = 'default', color = 'primary' }: { children: ReactNode , variant?: string, color?: string }) {
  return (
    <button type="button" className={`${styles.button} ${variant === 'large' ? styles['button--large'] : ''} ${color === 'primary' ? styles['button--primary'] : ''}`}>
      {children}
    </button>
  );
}