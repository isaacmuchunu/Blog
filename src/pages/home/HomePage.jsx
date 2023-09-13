import MainLayout from "../../components/MainLayout";
import Articles from "./container/Articles";
import CTA from "./container/CTA";
import Hero from "./container/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Articles />
      <CTA/>
      
    </div>
  );
};

export default HomePage;
