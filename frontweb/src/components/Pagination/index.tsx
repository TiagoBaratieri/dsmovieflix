import { generateList } from "util/list";
import './styles.scss';

type Props = {
  totalPages: number;
  activePage: number;
  onChange: (item: number) => void;
};

const Pagination = ({ totalPages, activePage, onChange }: Props) => {
  const items = generateList(totalPages);

  return (
    <>
      {items.map((item) => (
        <div
          className={`pagination-item ${item === activePage ? 'active' : ''}`}
          onClick={() => onChange(item)}
          key={item}
        >
          {item + 1}
        </div>
      ))}
    </>
  );
};

export default Pagination;
