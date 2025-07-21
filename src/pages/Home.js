import SlideShow from "../components/SlideShow";

const Home = () => (
  <main className="w-full space-y-10">
    <SlideShow />

    <section className="max-w-6xl mx-auto text-center mt-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to CineScope 🎬</h2>
      <p className="text-lg text-gray-700">
        Dive into the world of movies — from iconic classics to latest reviews.
        Discover what to watch and what to skip.
      </p>
    </section>
  </main>
);

export default Home;
