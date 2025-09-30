
const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center  justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-secondary/5" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                MAZDAR 2025
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Al Amaawy
              <span className="block text-primary mt-2">2025</span>
              <span className="block text-secondary mt-2">Maolid Nabiyy</span>
              <span className="block mt-2">Celebration</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Join us for a blessed three-day celebration honoring the birth of
              Prophet Muhammad (Peace Be Upon Him)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* Tailwind Button 1 */}
              <button
                onClick={() => scrollToSection("schedule")}
                className="px-6 py-3 rounded-lg text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                View Schedule
              </button>

              {/* Tailwind Button 2 */}
              <button
                onClick={() => scrollToSection("venue")}
                className="px-6 py-3 rounded-lg text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Get Directions
              </button>
            </div>
          </div>

          {/* Flyer Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
            <img
              src="/hero.jpg"
              alt="Al Amaawy 2025 Maolid Nabiyy Celebration Flyer"
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
