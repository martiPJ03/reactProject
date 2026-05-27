import styles from './IconButton.module.css';

export default function IconButton({ icon, label, onClick }) {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      <span className={styles.iconWrapper}>
        {icon}
      </span>
      <span className={styles.label}>
        {label}
      </span>
    </button>
  );
}