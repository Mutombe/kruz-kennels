// pages/Contact.jsx
import { motion } from 'framer-motion';
import PageWrapper from '../pagewrapper/pagewrapper';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

// Import Leaflet components and CSS
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Import the marker icon fix for Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const position = [-17.9221657,30.8778291];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('dog2.webp')",
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-7xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-4xl text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600">
                  Have questions about our puppies? We're here to help!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-8">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialMedia.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <platform.icon className="w-5 h-5 text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        {/* Add your map component or iframe here */}
        <div className="absolute inset-0 bg-gray-300">
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={false}
          className="h-full w-full z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Kobe Kruz Kennels <br /> Located in Harare
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </section>
    </PageWrapper>
  );
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "0772248508"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@kobekruzkennels.com"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "3100, Harare"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Sat: 9AM-5PM"
  }
];

const socialMedia = [
  {
    icon: Facebook,
    link: "#"
  },
  {
    icon: Instagram,
    link: "#"
  },
  {
    icon: Linkedin,
    link: "#"
  },
  // Add more social media
];

export default Contact;
