import styles from './Header.module.css';
import IconButton from '../iconButton/IconButton';
import PhoneIcon from '../../assets/phone.svg';

export default function Header() {
  const hacerLlamada = () => {
    window.location.href = "tel:+34930000000"; 
  };

  return (
    <header className={styles.header}> 
      <div className={styles['header-inner']}> {}
        <div className="logo">
          <span className="logo-mark">◆</span>
          <span className="logo-text">Clínica Dental Elsa Juvés</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Inici</a>
          <a href="#" className="nav-link">Sobre nosaltres</a>
          <a href="#" className="nav-link">Serveis</a>
          <a href="#" className="nav-link">Contacte</a>
        </nav>
        <IconButton 
          icon={<img src={PhoneIcon} alt="Teléfono" width="16" height="16" />}
          label="Truca'ns: 930 00 00 00" 
          onClick={hacerLlamada}
        />
      </div>
    </header>
  );
}