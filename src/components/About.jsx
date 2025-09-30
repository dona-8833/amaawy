const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              About the Event
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
              A Blessed Gathering
            </h2>
          </div>

          {/* Two Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 shadow-lg rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Organizer</h3>
              <p className="text-foreground leading-relaxed">
                <strong>Jamuhiyatu Maharifatil-Ilahiyyah Fi Sa'adati Dahrain</strong>
                <br />
                <span className="text-muted-foreground">(MAZDAR 2025)</span>
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/20 shadow-lg rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-secondary">Motto</h3>
              <p className="text-foreground leading-relaxed italic text-lg">
                "اِسْتَسْفِحُوا فَقَدْ جَاءَكُمُ الْفَتْحُ"
              </p>
            </div>
          </div>

          {/* Event Purpose Card */}
          <div className="p-8 bg-card border border-border shadow-lg rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Event Purpose</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                The Al Amaawy 2025 Maolid Nabiyy Celebration is a sacred gathering commemorating 
                the birth of Prophet Muhammad (Peace Be Upon Him). This three-day event brings together 
                the Muslim community for spiritual reflection, learning, and celebration.
              </p>
              <p className="leading-relaxed mb-4">
                Through prayers, lectures, and communal activities, we honor the Prophet's life 
                and teachings while strengthening the bonds of our community. Join us for this 
                blessed occasion and receive the blessings of Allah.
              </p>
              <p className="leading-relaxed text-center mt-8 text-lg font-semibold text-primary">
                Come and receive the Blessings of Allah
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
