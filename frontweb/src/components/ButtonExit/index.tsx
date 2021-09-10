import { useHistory } from "react-router-dom";

type Props = {
  text?: string;
};

const ButtonExit = ({ text }: Props) => {
  const history = useHistory();

  const onClickExit = () => {
    localStorage.removeItem('authData');
    history.replace('/login');
  };

  return (
    <button className="mr-5 btn-exit offset-9" onClick={onClickExit}>
      {text}
    </button>
  );
};

export default ButtonExit;
