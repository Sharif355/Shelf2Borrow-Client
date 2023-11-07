import Banner from "./Banner";
import Categories from "./Categories";
import DealOfTheWeek from "./DealOfTheWeek";
import FeaturedAuthors from "./FeaturedAuthors";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <DealOfTheWeek></DealOfTheWeek>
      <NewArrival></NewArrival>
      <FeaturedAuthors></FeaturedAuthors>
    </div>
  );
};

export default Home;
