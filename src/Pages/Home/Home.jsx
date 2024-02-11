import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Categories from "./Categories";
import FeaturedAuthors from "./FeaturedAuthors";
import NewArrival from "./NewArrival";
import Blog from "./Blog";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Shelf2Borrow ||Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <NewArrival></NewArrival>
      <FeaturedAuthors></FeaturedAuthors>
      <Blog></Blog>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
