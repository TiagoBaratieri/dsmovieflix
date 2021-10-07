import ButtonExit from 'components/ButtonExit';
import { useHistory } from 'react-router-dom';
import './styles.css';

type Props = {
  btnexit?: string;
  visible?: boolean;
};

const Navbar = ({ btnexit, visible }: Props) => {
  const history = useHistory();

  const mainBack = () => {
    history.push('/');
  };

  return (
    <nav className="row bg-primary main-nav">
      <div className="col-2">
        <a href="/#" onClick={mainBack} className="nav-logo-text">
          <h4>MovieFlix</h4>
        </a>
      </div>
      <div className="col-10">{visible && <ButtonExit text="SAIR" />}</div>
    </nav>
  );
};

export default Navbar;
