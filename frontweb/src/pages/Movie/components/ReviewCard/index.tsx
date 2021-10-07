import './styles.css';
import Star from 'assets/images/star.png';

type Props = {
  userReview?: string;
  review?: string;
};
const ReviewCard = ({ userReview, review }: Props) => {
  return (
    <>
      <div className="user-and-star-aligment">
        <div className="review-star">
          <img src={Star} alt="a" />
          <span className="review-user">{userReview}</span>
        </div>
      </div>
      <div className="review-box">
        <span className="review-text">{review}</span>
      </div>
    </>
  );
};

export default ReviewCard;
