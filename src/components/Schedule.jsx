import { Calendar, Clock } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "Thursday, 16th October 2025",
      events: [
        { time: "04:00 PM", title: "Maolid Nabiyy Final Football Competition", color: "primary" }
      ]
    },
    {
      day: "Day 2",
      date: "Friday, 17th October 2025",
      events: [
        { time: "6:00 AM - 11:00 AM", title: "Parade", color: "secondary" },
        { time: "1:00 PM - 3:00 PM", title: "Jum'at Service", color: "primary" },
        { time: "4:00 PM - 7:00 PM", title: "Qubrah", color: "secondary" },
        { time: "8:00 PM - 9:00 PM", title: "Nafilah", color: "primary" },
        { time: "12:00 AM till Dawn", title: "Adhikari Night", color: "secondary" }
      ]
    },
    {
      day: "Day 3",
      date: "Saturday, 18th October 2025",
      events: [
        { time: "10:00 AM", title: "Maolid Nabiyy", color: "primary" }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Event Schedule
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
            Three Days of Blessings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for a comprehensive program of spiritual activities, lectures, and celebrations
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {scheduleData.map((day, idx) => (
            <div
              key={idx}
              className="p-8 bg-card shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Day Header */}
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">{day.day}</h3>
                  </div>
                  <p className="text-muted-foreground font-medium">{day.date}</p>
                </div>

                {/* Events */}
                <div className="md:w-2/3 space-y-4">
                  {day.events.map((event, eventIdx) => (
                    <div
                      key={eventIdx}
                      className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                        event.color === "primary"
                          ? "bg-primary/5 hover:bg-primary/10"
                          : "bg-secondary/5 hover:bg-secondary/10"
                      }`}
                    >
                      <Clock
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          event.color === "primary" ? "text-primary" : "text-secondary"
                        }`}
                      />
                      <div>
                        <div
                          className={`text-sm font-semibold mb-1 ${
                            event.color === "primary" ? "text-primary" : "text-secondary"
                          }`}
                        >
                          {event.time}
                        </div>
                        <div className="font-medium text-foreground">{event.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
