import { User } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Sheikh Muhammad Muhammad Al-Hamawy",
      title: "Sheikul Amaawy",
      role: "Chief Host",
      subtitle: "Baba Leyenkorin (Mukadam Oko Erin)",
      organization: "Founder of MAZDAR",
      color: "primary",
      image:"/og1.jpg"
    },
    {
      name: "Sheikh (Dr.) Sulaimon Faruq Onikijipa",
      title: "Mufti Ilorin Emirate",
      role: "Guest Lecturer",
      subtitle: "Al Misikinu Billahi",
      organization: "Mudir Markaz-L-Amaani",
      color: "secondary",
      image:"/sule.jpg"
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Distinguished Speakers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
            Our Honored Guests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from esteemed scholars and spiritual leaders
          </p>
        </div>

        {/* Speaker Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl bg-gradient-to-br ${
                speaker.color === "primary"
                  ? "from-primary/5 to-transparent border-primary/20"
                  : "from-secondary/5 to-transparent border-secondary/20"
              } border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
            >
              {/* Icon Placeholder for Photo */}
              <div
                className={`w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center ${
                  speaker.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                }`}
              >
                <img src={speaker.image} alt="" />
              </div>

              {/* Speaker Info */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-foreground">{speaker.name}</h3>

                <div
                  className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                    speaker.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  {speaker.role}
                </div>

                <p className="text-muted-foreground font-medium">{speaker.title}</p>

                <p className="text-sm text-muted-foreground italic">{speaker.subtitle}</p>

                <p className="text-sm text-muted-foreground">{speaker.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
