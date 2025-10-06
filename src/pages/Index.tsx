import { Link } from "react-router-dom";
import { Mic2, Search, Zap, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { ParticleBackground } from "@/components/ParticleBackground";
import heroImage from "@/assets/hero-music.jpg";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get song results in seconds with our AI-powered recognition",
      gradient: "from-anime-yellow to-anime-orange",
    },
    {
      icon: Heart,
      title: "High Accuracy",
      description: "99% accuracy rate with our advanced audio fingerprinting",
      gradient: "from-anime-pink to-anime-purple",
    },
    {
      icon: TrendingUp,
      title: "Always Learning",
      description: "Constantly updated database with millions of songs",
      gradient: "from-anime-cyan to-anime-blue",
    },
  ];

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Music visualization" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue bg-clip-text text-transparent">
                Discover Music
              </span>
              <br />
              <span className="text-foreground text-glow">
                Instantly
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The fastest way to identify any song with our anime-inspired AI music recognition app
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Link to="/recognize">
                <Button variant="hero" size="xl" className="group relative overflow-hidden">
                  <Mic2 className="h-6 w-6" />
                  Recognize Now
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
              <Link to="/search">
                <Button variant="glass" size="xl">
                  <Search className="h-6 w-6" />
                  Search Songs
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up">
            <GlassCard className="text-center">
              <div className="text-4xl font-black text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Songs Recognized</div>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-4xl font-black text-secondary mb-2">99%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-4xl font-black text-accent mb-2">&lt;3s</div>
              <div className="text-muted-foreground">Average Speed</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-anime-blue via-anime-cyan to-anime-green bg-clip-text text-transparent">
              Magical Features
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
            {features.map((feature, i) => (
              <GlassCard key={i} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <GlassCard className="text-center p-12 animate-fade-in relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue opacity-5 group-hover:opacity-10 transition-opacity" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">
              Ready to Find Your Music?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 relative z-10">
              Start recognizing songs with just one tap
            </p>
            <Link to="/recognize">
              <Button variant="hero" size="xl" className="relative z-10">
                <Mic2 className="h-6 w-6" />
                Get Started Now
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Index;
