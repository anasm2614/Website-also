import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Globe, Users, Award, Heart, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50K+', label: 'Happy Travelers' },
    { value: '100+', label: 'Destinations' },
    { value: '500+', label: 'Tours Offered' },
  ];

  const values = [
    {
      icon: Globe,
      title: 'Authentic Experiences',
      description: 'We curate genuine travel experiences that connect you with local cultures and traditions.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our travel specialists have extensive first-hand knowledge of every destination we offer.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We partner only with trusted local operators to ensure the highest standards of service.',
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Every trip is tailored to your preferences, ensuring a unique and memorable journey.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-background mb-4">
            About Owais Usman Travel Agency
          </h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences around the world
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</p>
                <p className="text-primary-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for exploration and a commitment to excellence, 
                  Owais Usman Travel Agency has been helping travelers discover the world's 
                  most incredible destinations for over 15 years.
                </p>
                <p>
                  What started as a small family business has grown into a trusted travel 
                  partner for thousands of adventurers. Our deep connections with local 
                  communities and operators allow us to offer authentic experiences that 
                  go beyond typical tourist attractions.
                </p>
                <p>
                  We believe that travel has the power to transform lives, broaden 
                  perspectives, and create lasting memories. That's why we're dedicated 
                  to crafting journeys that inspire and delight.
                </p>
              </div>
              <Link to="/destinations" className="inline-block mt-6">
                <Button size="lg">Explore Destinations</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80"
                alt="Travel experience"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">Since 2009</p>
                <p>Creating memories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-card rounded-xl p-6 shadow-md card-hover">
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Our travel experts are here to help you plan your perfect trip. 
              Get in touch today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/destinations">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Browse Destinations
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
