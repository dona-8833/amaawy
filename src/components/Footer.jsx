const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MAZDAR 2025
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Jamuhiyatu Maharifatil-Ilahiyyah Fi Sa&apos;adati Dahrain – 
              Celebrating the blessed birth of Prophet Muhammad (PBUH)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-primary transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-primary transition-colors">
                  Venue
                </a>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Event Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📅 October 16–18, 2025</li>
              <li>📍 MAZDAR CENTRE, Eyenkorin</li>
              <li>🕌 Ilorin, Kwara State</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MAZDAR. All rights reserved. May Allah&apos;s blessings be upon you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
