import HomeBanner from './ui/HomeBanner';
import HomeCard from './ui/HomeCard';
import HomeBottom from './ui/HomeBottom';
import img1 from '/img/Img_home_01.png';
import img2 from '/img/Img_home_02.png';
import img3 from '/img/Img_home_03.png';

const MAIN_SECTION_DATAS = [
  {
    id: 1,
    title: 'Hot Item',
    text: '인기 상품을 확인해 보세요',
    subtext: ['가장 HOT한 중고거래 물품을', '판다 마켓에서 확인해보세요'],
    imgSrc: img1,
    imgAlt: '인기 상품 이미지',
    reverse: false,
  },
  {
    id: 2,
    title: 'Search',
    text: '구매를 원하는 상품을 검색하세요',
    subtext: ['구매하고 싶은 물품은 검색해서', '쉽게 찾아보세요'],
    imgSrc: img2,
    imgAlt: '검색 이미지',
    reverse: true,
  },
  {
    id: 3,
    title: 'Register',
    text: '판매를 원하는 상품을 등록하세요',
    subtext: ['어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요'],
    imgSrc: img3,
    imgAlt: '등록 이미지',
    reverse: false,
  },
];

const Home = () => {
  return (
    <main>
      <HomeBanner />

      {MAIN_SECTION_DATAS.map((data) => (
        <HomeCard key={data.id} {...data} />
      ))}

      <HomeBottom />
    </main>
  );
};

export default Home;
