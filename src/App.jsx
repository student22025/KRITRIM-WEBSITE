import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, ChevronDown, Star, Users, Award, Heart, Zap, Shield, Target } from 'lucide-react'
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
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2 text-sm">
                Innovative Designs
              </Badge>
              <Badge variant="secondary" className="bg-green-600 text-white px-4 py-2 text-sm">
                Advanced Technologies
              </Badge>
              <Badge variant="secondary" className="bg-purple-600 text-white px-4 py-2 text-sm">
                Customized Solutions
              </Badge>
              <Badge variant="secondary" className="bg-orange-600 text-white px-4 py-2 text-sm">
                Empowering Individuals
              </Badge>
            </div>
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
      </section>

      {/* Mission Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Kritrim Innovations, we are dedicated to revolutionizing physical medicine and rehabilitation by integrating advanced technology with individualized care. Our focus is on enhancing the quality of life for individuals with physical disabilities, empowering them to overcome challenges and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Kritrim Innovations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Innovative Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We specialize in designing and developing innovative solutions in prosthetics, orthotics, rehabilitation devices, and digital health, leveraging advanced technologies such as 3D scanning, 3D printing, artificial intelligence (AI), and IoT.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Quality Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We prioritize the use of durable, high-quality materials to ensure the longevity and effectiveness of our products in meeting the needs of our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our personalized care approach ensures that each individual's unique needs are addressed with bespoke solutions tailored to their specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our experienced advisors provide personalized guidance and support, ensuring that our clients receive the best possible care and solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Innovations</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={bionicHand} 
                alt="Bionic hand technology" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Bionic Hand Control</h3>
                <p className="text-sm">Advanced neural control systems</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={heroArm} 
                alt="Hero arm prosthetic" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Hero Arm Technology</h3>
                <p className="text-sm">Multi-grip prosthetic solutions</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={printed3d} 
                alt="3D printed prosthetics" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">3D Printed Solutions</h3>
                <p className="text-sm">Custom-designed prosthetics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="people" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "Kritrim Innovations has been instrumental in transforming the lives of individuals with physical disabilities. Their commitment to innovation and personalized care is truly inspiring."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Maya Patel</div>
                    <div className="text-sm text-gray-500">Rehabilitation Specialist, Vitality Clinic</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "The solutions provided by Kritrim Innovations have made a significant impact on the rehabilitation landscape. Their dedication to excellence is commendable."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">James Lee</div>
                    <div className="text-sm text-gray-500">Director of Orthopedics, CareWell Hospital</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "Kritrim Innovations' focus on customized, high-quality solutions has set a new standard in the industry. Their commitment to empowering individuals is truly remarkable."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Thompson</div>
                    <div className="text-sm text-gray-500">Physical Therapist, ActiveLife Center</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs</h2>
            <p className="text-lg text-gray-600">Frequently asked questions</p>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  What is an FAQ section?
                  <ChevronDown className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Why do FAQs matter?
                  <ChevronDown className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Where can I add my FAQs?
                  <ChevronDown className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.
                </p>
              </CardContent>
            </Card>
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
    </div>
  )
}

export default App

