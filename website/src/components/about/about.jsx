// pages/About.jsx
import { motion } from 'framer-motion';
import { Users, Heart, Award } from 'lucide-react';
import PageWrapper from '../pagewrapper/pagewrapper';

const About = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('page.jpeg')",
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
              Our Story
            </h1>
            <p className="text-xl">
              Dedicated to breeding excellence since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Kobe Kruz Kennels, our mission is to breed exceptional dogs that bring joy and companionship to families worldwide. We prioritize health, temperament, and breed standard excellence in every breeding program.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to responsible breeding practices and ongoing support for our puppy families sets us apart in the industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square p-4">
                <img
                  src="/logo.png"
                  alt="Our Mission"
                  className="object-cover w-100 h-100 "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-accent/80 max-w-2xl mx-auto">
              Our experienced team of breeders and caretakers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center rounded-xl p-8"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full">
                  <div
                    className="absolute inset-0 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-accent mb-4">{member.role}</p>
                <p className="text-white/80">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art breeding facilities designed for comfort and care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group rounded-xl"
              >
                <div className="aspect-video rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${facility.image})` }}
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                        <p>{facility.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const team = [
  {
    name: "Stowell Madzure",
    role: "Head Breeder",
    image: "user.webp",
    bio: "18+ years of breeding experience"
  },
  {
    name: "Kobe Kruz",
    role: "Head Breeder",
    image: "user.webp",
    bio: "6+ years of breeding experience"
  },
  {
    name: "Doctor Richard",
    role: "VET",
    image: "user.webp",
    bio: "20+ years of breeding experience"
  },
  // Add more team members
];

const facilities = [
  {
    title: "Whelping Area",
    image: "dg7.jpeg",
    description: "State-of-the-art whelping facilities for mother and puppies"
  },
  {
    title: "Whelping Area",
    image: "dg10.jpeg",
    description: "State-of-the-art whelping facilities for mother and puppies"
  },
  {
    title: "Whelping Area",
    image: "dg9.jpeg",
    description: "State-of-the-art whelping facilities for mother and puppies"
  },
  // Add more facilities
];

export default About;
