const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-up">
          Your Gateway to Insightful Articles & Trending Topics
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Creative stories, life hacks, and everything you didn't know you needed to read — from across the UK.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
