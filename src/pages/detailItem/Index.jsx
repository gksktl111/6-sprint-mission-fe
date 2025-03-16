import { useParams } from 'react-router-dom';

const DetailItem = () => {
  const { itemId } = useParams();

  return <div>현재 상품의 아이디: {itemId}</div>;
};

export default DetailItem;
