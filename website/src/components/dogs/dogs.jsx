import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Award, Heart, X, 
  PawPrint, Medal, Shield, 
  Bone, Ruler, Thermometer, 
  Edit, Trophy, Clock, 
  FlagIcon, BookOpenIcon, 
  HeartPulseIcon, UserIcon 
} from 'lucide-react';
import PageWrapper from '../pagewrapper/pagewrapper';

// Enhanced dog data with more detailed information
const dogs = [
  {
    id: 1,
    name: "GSD Female",
    breed: "German Shepherd",
    image: "dg8.jpeg",
    age: "3 years",
    color: "Black and Mahogany",
    weight: "85 lbs",
    height: "26 inches",
    championships: "Multiple International Champion",
    description: "A pinnacle of German Shepherd excellence with unparalleled lineage.",
    awards: [
      { icon: Star, tooltip: "Star Performer" }, 
      { icon: Medal, tooltip: "Gold Medal Winner" }, 
      { icon: Trophy, tooltip: "Championship Winner" },
      { icon: Shield, tooltip: "Certified Protection Dog" },
      { icon: PawPrint, tooltip: "Breed Standard Excellence" }
    ],
    fullBio: "King Zeus represents the gold standard in German Shepherd breeding. With a lineage tracing back to world-renowned champions, he embodies the perfect blend of strength, intelligence, and temperament.",
    healthCertificates: [
      "OFA Hip Certification",
      "Genetic Health Screening",
      "Elite Breeding Approval"
    ],
    trainingAchievements: [
      "International Obedience Champion",
      "Advanced Protection Training",
      "Search and Rescue Certified"
    ],
    specialSkills: [
      "Scent Detection",
      "Advanced Obedience",
      "Therapy Dog Training"
    ]
  },
  {
    id: 2,
    name: "Bantu Sunny",
    breed: "Boerboels",
    image: "dg2.jpeg",
    age: "4 years",
    color: "Sable",
    weight: "95 lbs",
    height: "24 inches",
    championships: "Breeding Female",
    description: "A majestic Boerboel with exceptional maternal instincts and strength.",
    awards: [
      { icon: Heart, tooltip: "Exceptional Temperament" }, 
      { icon: BookOpenIcon, tooltip: "Certified Trainer" }, 
      { icon: HeartPulseIcon, tooltip: "Health Certified" },
      { icon: UserIcon, tooltip: "Family Companion" },
      { icon: Bone, tooltip: "Training Excellence" }
    ],
    fullBio: "Bella Royal is more than just a show dog - she's a testament to the Boerboels breed's intelligence, loyalty, and versatility. Her calm demeanor and protective instincts make her an ideal family companion.",
    healthCertificates: [
      "Comprehensive Health Screening",
      "Genetic Diversity Tested",
      "Premium Breeding Certification"
    ],
    trainingAchievements: [
      "Advanced Obedience Champion",
      "Therapy Dog Certification",
      "Family Protection Training"
    ],
    specialSkills: [
      "Child-Friendly Interaction",
      "Advanced Obedience",
      "Emotional Support Training"
    ]
  },
  {
    id: 3,
    name: "Swaliymo Tunya",
    breed: "Boerboels",
    image: "dog1.jpg",
    age: "2 years",
    color: "Black and White",
    weight: "45 lbs",
    height: "20 inches",
    championships: "Agility Competition Winner",
    description: "An extraordinary Border Collie with unmatched intelligence and energy.",
    awards: [
      { icon: Clock, tooltip: "Speed Champion" }, 
      { icon: FlagIcon, tooltip: "Agility Master" }, 
      { icon: Edit, tooltip: "Trainability Expert" },
      { icon: Ruler, tooltip: "Precision Performer" },
      { icon: Thermometer, tooltip: "High Performance" }
    ],
    fullBio: "Silver Arrow embodies the Border Collie's legendary intelligence and work ethic. With lightning-fast reflexes and an uncanny ability to learn, he's a true champion in agility and obedience.",
    healthCertificates: [
      "Genetic Health Screening",
      "Athletic Performance Certification",
      "Vision and Hearing Tested"
    ],
    trainingAchievements: [
      "National Agility Champion",
      "Advanced Herding Skills",
      "Trick Dog Certification"
    ],
    specialSkills: [
      "Complex Trick Performance",
      "Herding Precision",
      "Obstacle Course Mastery"
    ]
  },
  // Add more unique dog entries...
];

const DogDetailsModal = ({ dog, onClose }) => {
  if (!dog) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-8">
          {/* Image Section */}
          <div className="aspect-square rounded-xl overflow-hidden">
            <img 
              src={dog.image} 
              alt={dog.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dog Details */}
          <div>
            <h2 className="text-3xl font-bold mb-4">{dog.name}</h2>
            
            <div className="space-y-2 mb-4">
              <p><strong>Breed:</strong> {dog.breed}</p>
              <p><strong>Age:</strong> {dog.age}</p>
              <p><strong>Color:</strong> {dog.color}</p>
              <p><strong>Championships:</strong> {dog.championships}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Health Certificates</h3>
              <ul className="list-disc list-inside text-gray-700">
                {dog.healthCertificates.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Training Achievements</h3>
              <ul className="list-disc list-inside text-gray-700">
                {dog.trainingAchievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 italic">{dog.fullBio}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Dogs = () => {
  const [selectedDog, setSelectedDog] = useState(null);

  return (
    <PageWrapper>
      {/* Hero Section (Unchanged from previous version) */}
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('dogs.jpeg')",
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
              Our Dogs
            </h1>
            <p className="text-xl">
              Meet our exceptional breeding dogs with champion bloodlines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dogs Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogs.map((dog, index) => (
              <motion.div
                key={dog.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-square">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${dog.image})` }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">{dog.name}</h3>
                    <div className="flex gap-2">
                      {dog.awards.map((award, i) => (
                        <div 
                          key={i} 
                          className="group relative"
                          title={award.tooltip}
                        >
                          <award.icon 
                            className="w-6 h-6 text-accent hover:text-accent/70 transition-colors" 
                          />
                          <span className="absolute hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded absolute -top-8 left-1/2 transform -translate-x-1/2">
                            {award.tooltip}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p><strong>Breed:</strong> {dog.breed}</p>
                    <p><strong>Age:</strong> {dog.age}</p>
                    <p><strong>Color:</strong> {dog.color}</p>
                    <p><strong>Weight:</strong> {dog.weight}</p>
                    <p><strong>Height:</strong> {dog.height}</p>
                    <p><strong>Championships:</strong> {dog.championships}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{dog.description}</p>
                  <button 
                    onClick={() => setSelectedDog(dog)}
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dog Details Modal with AnimatePresence for smooth animations */}
      <AnimatePresence>
        {selectedDog && (
          <DogDetailsModal 
            dog={selectedDog} 
            onClose={() => setSelectedDog(null)} 
          />
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Dogs;


