type Props = {
  msg: string;
};

const MsgReview = ({ msg }: Props) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};
export default MsgReview;
