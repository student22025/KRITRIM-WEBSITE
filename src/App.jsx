import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, ChevronDown, Star, Users, Award, Heart, Zap, Shield, Target, Search } from 'lucide-react'
import './App.css'

// Import images
import heroProsthetic from './assets/hero-prosthetic.jpg'
import bionicHand from './assets/bionic-hand.jpg'
import heroArm from './assets/hero-arm.jpg'
import printed3d from './assets/3d-printed.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
                  KRITRIM
                </div>
              </div>
              <div className="ml-2 text-sm text-gray-600">
                INNOVATIONS Pvt. LTD
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
                <a href="#people" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">People</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">FAQ</a>
                <Button className="bg-blue-600 hover:bg-blue-700">Get a Quote</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">About</a>
                <a href="#people" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">People</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Contact</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">FAQ</a>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full mt-2">Get a Quote</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroProsthetic} 
            alt="Prosthetic hand technology" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Revolutionizing Physical Medicine and Rehabilitation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Cutting-Edge Solutions for Personalized Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
                Explore Our Innovations
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Feature Cards */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-1 h-12 bg-blue-500 mx-auto mb-2"></div>
                <h3 className="text-white font-semibold">Innovative Designs</h3>
              </div>
              <div className="text-center">
                <div className="w-1 h-12 bg-blue-500 mx-auto mb-2"></div>
                <h3 className="text-white font-semibold">Advanced Technologies</h3>
              </div>
              <div className="text-center">
                <div className="w-1 h-12 bg-blue-500 mx-auto mb-2"></div>
                <h3 className="text-white font-semibold">Customized Solutions</h3>
              </div>
              <div className="text-center">
                <div className="w-1 h-12 bg-blue-500 mx-auto mb-2"></div>
                <h3 className="text-white font-semibold">Empowering Individuals</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0">
          <img 
            src={heroProsthetic} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg p-4 mb-6 inline-block">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-white leading-relaxed">
              At Kritrim Innovations, we are dedicated to revolutionizing physical medicine and rehabilitation by integrating advanced technology with individualized care. Our focus is on enhancing the quality of life for individuals with physical disabilities, empowering them to overcome challenges and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="services" className="py-16 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg" 
            alt="Medical technology background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-white opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-4 mb-12 inline-block">
            <h2 className="text-2xl font-bold text-gray-900">Why Choose Kritrim Innovations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovative Solutions</h3>
              <div className="bg-yellow-200 p-4 rounded-lg">
                <p className="text-gray-800 text-sm">
                  We specialize in designing and developing innovative solutions in prosthetics, orthotics, rehabilitation devices, and digital health, leveraging advanced technologies such as 3D scanning, 3D printing, artificial intelligence (AI), and IoT to create highly customized, durable, and intelligent products.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Materials</h3>
              <div className="bg-yellow-200 p-4 rounded-lg">
                <p className="text-gray-800 text-sm">
                  We prioritize the use of durable, high-quality materials to ensure the longevity and effectiveness of our products in meeting the needs of our clients.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Care</h3>
              <div className="bg-yellow-200 p-4 rounded-lg">
                <p className="text-gray-800 text-sm">
                  Our personalized care approach ensures that each individual's unique needs are addressed with bespoke solutions tailored to their specific requirements.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
              <div className="bg-yellow-200 p-4 rounded-lg">
                <p className="text-gray-800 text-sm">
                  Our experienced advisors provide personalized guidance and support, ensuring that our clients receive the best possible care and solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Gallery */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-4 mb-12 inline-block">
            <h2 className="text-2xl font-bold text-gray-900">Explore Our Innovations</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg" 
                alt="Eye Tracker" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Eye Tracker</h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={bionicHand} 
                alt="Myo-Electric Hand" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Myo-Electric Hand</h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/8376308/pexels-photo-8376308.jpeg" 
                alt="Smart Prosthetic Socket" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Smart Prosthetic Socket</h3>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">View Solutions</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="people" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-4 mb-12 inline-block">
            <h2 className="text-2xl font-bold text-gray-900">Success Stories</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-white">
              <div className="w-1 h-16 bg-blue-500 mb-4"></div>
              <blockquote className="text-gray-300 mb-6">
                "Kritrim Innovations has been instrumental in transforming the lives of individuals with physical disabilities. Their commitment to innovation and personalized care is truly inspiring."
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg" 
                  alt="Dr. Maya Patel" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">Dr. Maya Patel</div>
                  <div className="text-sm text-gray-400">Rehabilitation Specialist, Vitality Clinic</div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="w-1 h-16 bg-blue-500 mb-4"></div>
              <blockquote className="text-gray-300 mb-6">
                "The solutions provided by Kritrim Innovations have made a significant impact on the rehabilitation landscape. Their dedication to excellence is commendable."
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg" 
                  alt="James Lee" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">James Lee</div>
                  <div className="text-sm text-gray-400">Director of Orthopedics, CareWell Hospital</div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="w-1 h-16 bg-blue-500 mb-4"></div>
              <blockquote className="text-gray-300 mb-6">
                "Kritrim Innovations' focus on customized, high-quality solutions has set a new standard in the industry. Their commitment to empowering individuals is truly remarkable."
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg" 
                  alt="Sarah Thompson" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">Sarah Thompson</div>
                  <div className="text-sm text-gray-400">Physical Therapist, ActiveLife Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg" 
            alt="Technology background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">FAQs</h2>
              <p className="text-lg text-gray-300">Frequently asked questions</p>
            </div>
            <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2">
              <input 
                type="text" 
                placeholder="Looking for something?" 
                className="bg-transparent text-white placeholder-gray-400 outline-none"
              />
              <Search className="h-5 w-5 text-gray-400 ml-2" />
            </div>
          </div>
          
          <div className="flex space-x-8 mb-8">
            <button className="text-blue-400 border-b-2 border-blue-400 pb-2">General</button>
            <button className="text-gray-400 hover:text-white">Setting up FAQs</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Ready to transform lives with innovative solutions?</p>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-lg inline-block mb-4">
                KRITRIM
              </div>
              <p className="text-gray-400">
                Revolutionizing physical medicine and rehabilitation through innovative technology and personalized care.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Prosthetics</li>
                <li>Orthotics</li>
                <li>Rehabilitation Devices</li>
                <li>Digital Health</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Documentation</li>
                <li>Support Center</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kritrim Innovations Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Let's Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-3 shadow-lg">
          💬 Let's Chat!
        </Button>
      </div>
    </div>
  )
}

export default App