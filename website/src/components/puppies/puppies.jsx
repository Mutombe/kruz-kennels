// pages/Puppies.jsx
import { motion } from 'framer-motion';
import { Calendar, Check, AlertCircle } from 'lucide-react';
import PageWrapper from '../pagewrapper/pagewrapper';

const Puppies = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('dg4.jpeg')",
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
              Available Puppies
            </h1>
            <p className="text-xl">
              Find your perfect companion from our current and upcoming litters
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Litters */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Current Litters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our puppies come with health guarantees and lifetime support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentLitters.map((litter, index) => (
              <motion.div
                key={litter.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${litter.image})` }}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full">
                    {litter.availability} Available
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{litter.parents}</h3>
                  <div className="space-y-2 mb-4">
                    <p><strong>Born:</strong> {litter.birthDate}</p>
                    <p><strong>Colors:</strong> {litter.colors}</p>
                    <p><strong>Ready:</strong> {litter.readyDate}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{litter.description}</p>
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    View Puppies
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Litters */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Upcoming Litters
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Reserve your puppy from our planned breedings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingLitters.map((litter, index) => (
              <motion.div
                key={litter.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-semibold">{litter.parents}</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p><strong>Expected:</strong> {litter.expectedDate}</p>
                  <p><strong>Colors:</strong> {litter.expectedColors}</p>
                </div>
                <button className="w-full bg-accent text-white py-2 rounded-lg hover:bg-accent/90 transition-colors">
                  Join Waitlist
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const currentLitters = [
  {
    id: 1,
    parents: "Tunya x Sunny",
    image: "pup.jpeg",
    birthDate: "October 15, 2023",
    colors: "Blue, Black, Brindle",
    readyDate: "December 10, 2023",
    availability: 3,
    description: "Beautiful, healthy puppies with excellent temperaments."
  },
  {
    id: 1,
    parents: "Tunya x Sunny",
    image: "dg3.jpeg",
    birthDate: "October 15, 2023",
    colors: "Blue, Black, Brindle",
    readyDate: "December 10, 2023",
    availability: 3,
    description: "Beautiful, healthy puppies with excellent temperaments."
  },
  {
    id: 1,
    parents: "Tunya x Sunny",
    image: "dg4.jpeg",
    birthDate: "October 15, 2023",
    colors: "Blue, Black, Brindle",
    readyDate: "December 10, 2023",
    availability: 3,
    description: "Beautiful, healthy puppies with excellent temperaments."
  },
  // Add more current litters
];

const upcomingLitters = [
  {
    id: 1,
    parents: "Tunya x Sunny",
    expectedDate: "January 2024",
    expectedColors: "Blue, Black",
  },
  {
    id: 1,
    parents: "Atlas x Nova",
    expectedDate: "January 2024",
    expectedColors: "Blue, Black",
  },
  {
    id: 1,
    parents: "Tunya x Sunny",
    expectedDate: "January 2024",
    expectedColors: "Blue, Black",
  },
  // Add more upcoming litters
];

export default Puppies;