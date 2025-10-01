import { MapPin, Navigation } from "lucide-react";

const Venue = () => {
  const venueAddress =
    "MAZDAR CENTRE, Ogele Road, Eyenkorin, Ilorin, Kwara State";
  const googleMapsUrl =
    "https://maps.app.goo.gl/AnNqQhs38riJ98e17";

  return (
    <section id="venue" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/20 px-4 py-2 rounded-full">
            Event Location
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
            Find Us Here
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at MAZDAR CENTRE for this blessed celebration
          </p>
        </div>

        {/* Card Container */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Address Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">MAZDAR CENTRE</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ogele Road, Eyenkorin
                      <br />
                      Ilorin, Kwara State
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Getting There
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The MAZDAR CENTRE is easily accessible from major roads in
                    Ilorin. Click the button below to get directions from your
                    current location.
                  </p>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition"
                    onClick={() => window.open(googleMapsUrl, "_blank")}
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Map Embed */}
              <div className="h-full min-h-[300px] rounded-lg overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1973.5408304639684!2d4.466146495701922!3d8.39362918826647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjMnMzcuMCJOIDTCsDI3JzU4LjIiRQ!5e0!3m2!1sen!2sng!4v1759319304505!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MAZDAR CENTRE Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
