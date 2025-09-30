import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(
      "🎉Message Received! Thank you for your interest. We'll get back to you soon."
    );
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setToast(null), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Come and receive the Blessings of Allah
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}

            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
              <a href="tel:+2348135765690" className="mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      Call us for more information
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Email */}

            <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/20">
              <a href="mailto:mubarakramadan2349@gmail.com">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      Send us your inquiries
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Media */}

            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
              <a
                href="https://www.tiktok.com/@alamaawytv?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <p className="text-sm text-muted-foreground">
                      Follow us for updates
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Highlight */}
            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center text-white">
              <h3 className="text-2xl font-bold mb-3">We Welcome You!</h3>
              <p className="text-white/90">
                Join us for this blessed celebration and be part of our
                spiritual community
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-card shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message or inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-white text-black px-4 py-3 rounded-lg shadow-lg animate-fade-in">
          {toast}
        </div>
      )}
    </section>
  );
};

export default Contact;
