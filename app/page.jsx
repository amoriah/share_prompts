import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Poweres Promts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque suscipit
        modi autem maxime quam repellendus, alias ipsa possimus assumenda unde
        quod culpa voluptate ullam necessitatibus, quisquam aliquam, pariatur
        dolorum corporis!
      </p>
      <Feed />

    </section>
  );
};

export default Home;
