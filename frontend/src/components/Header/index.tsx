import Logo from '../../assets/images/logo.svg';

import './styles.css';

export function Header() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={Logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Semana Spring Boot React
            </p>
        </div>
    </header>
  );
}