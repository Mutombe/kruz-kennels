// pages/Home.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Award, Shield, Star } from 'lucide-react';
import PageWrapper from '../pagewrapper/pagewrapper';

const Home = () => {
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true });

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('home.jpeg')",
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-7xl mb-6">
              Welcome to <strong>Kobe Kruz Kennels</strong> 
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Breeding exceptional companions with love, dedication, and expertise
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="/puppies"
                className="bg-accent text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-secondary transition-colors"
              >
                View Available Puppies
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Why Choose Kobe Kruz Kennels?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on maintaining the highest standards in dog breeding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dogs Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-accent mb-6">
              Meet Our Champions
            </h2>
            <p className="text-lg text-accent/80 max-w-2xl mx-auto">
              Our breeding dogs are carefully selected for health, temperament, and breed standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {champions.map((dog, index) => (
              <motion.div
                key={dog.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden"
              >
                <div className="relative h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${dog.image})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dog.name}</h3>
                  <p className="text-gray-600">{dog.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Happy Families
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What our clients say about their experience with Kobe Kruz Kennels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Ready to Find Your Perfect Companion?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today to learn more about our available puppies and upcoming litters
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="bg-accent text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-white transition-colors"
              >
                Contact Us Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

const features = [
  {
    icon: Heart,
    title: "Loving Care",
    description: "Our puppies are raised with love and attention in a family environment"
  },
  {
    icon: Shield,
    title: "Health Guaranteed",
    description: "Comprehensive health testing and guarantees for all our puppies"
  },
  {
    icon: Award,
    title: "Champion Bloodlines",
    description: "Premium breeding stock from renowned champion bloodlines"
  },
  {
    icon: Star,
    title: "Expert Support",
    description: "Lifetime support and guidance for all our puppy families"
  }
];

const champions = [
  {
    name: "Swaliymo Tunya",
    image: "dg1.jpeg",
    description: " Known for exceptional temperament and perfect breed conformation.",
    achievements: ["Best in Show 2024", "Champion Bloodline", "Perfect Scoring"]
  },
  {
    name: "Bantu Sunny",
    image: "dg2.jpeg",
    description: "Elite breeding program cornerstone with an outstanding pedigree.",
    achievements: ["Show Champion", "Superior Breeding Line", "Excellence in Conformation"]
  },
  {
    name: "GSD Female",
    image: "dg8.jpeg",
    description: "Exemplary female champion combining grace and power.  A true testament to excellence in German Shepherd breeding. A perfect blend of beauty and working ability.",
    achievements: ["Champion Bloodline", "Working Title", "Show Excellence"]
  }
  // Add more champions
];



const testimonials = [
  {
    name: "John & Sarah Smith",
    image: "happy1.jpg",
    location: "Harare",
    quote: "The best experience we could have hoped for in finding our new family member."
  },
  {
    name: "Jim & Samantha Kapara",
    image: "happy2.jpg",
    location: "Gweru",
    quote: "The best experience we could have hoped for in finding our new family member."
  },
  {
    name: "Jeff & Serah Moyana",
    image: "happy3.jpg",
    location: "Victoria Falls",
    quote: "The best experience we could have hoped for in finding our new family member."
  },
  // Add more testimonials
];

export default Home;
