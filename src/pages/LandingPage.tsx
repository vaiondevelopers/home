
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  Check, 
  Plus, 
  Shield,
  Zap,
  Heart
} from "lucide-react";

const LandingPage = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://onkarpatil4394.github.io/Chainreact-Assets/android-chrome-192x192.png" 
                alt="ChainReact Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-foreground">
                ChainReact
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/app">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Get Started
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  Privacy-First • Free Forever
                </Badge>
                
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Build momentum.
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      One habit at a time.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    ChainReact is a free, privacy-first habit tracking PWA that helps you 
                    build powerful habit chains, track your progress, and stay motivated
                    —all without ads or tracking.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/app">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg h-12">
                    Get Started Free
                  </Button>
                </Link>
                {isInstallable && (
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={handleInstallClick}
                    className="w-full sm:w-auto font-semibold px-8 py-4 text-lg h-12"
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Install App
                  </Button>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500" />
                  No Sign-up Required
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500" />
                  Works Offline
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500" />
                  100% Private
                </div>
              </div>
            </div>

            {/* Right Content - App Preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-8 shadow-2xl border border-border/50">
                <img 
                  src="https://onkarpatil4394.github.io/Chainreact-Assets/Screenshot%202025-06-01%20151646.png" 
                  alt="ChainReact App Interface" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-background border border-border rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <div>
                      <div className="text-sm font-semibold">21 Day Streak</div>
                      <div className="text-xs text-muted-foreground">Keep it up!</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <div>
                      <div className="text-sm font-semibold">5 Habits</div>
                      <div className="text-xs text-muted-foreground">Tracked daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, powerful features designed to help you build lasting habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-sm bg-background">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Build Chains</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create powerful habit chains and watch your streaks grow day by day.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-sm bg-background">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Track Progress</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor your streaks and see detailed statistics of your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-sm bg-background">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">100% Private</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your data stays on your device. No tracking, no analytics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to build better habits?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of people building momentum with ChainReact.
            </p>
            <Link to="/app">
              <Button size="lg" variant="secondary" className="font-semibold px-8 py-4 text-lg h-12">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="https://onkarpatil4394.github.io/Chainreact-Assets/android-chrome-192x192.png" 
                alt="ChainReact Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-foreground">ChainReact</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/app" className="text-muted-foreground hover:text-foreground transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 ChainReact by Vaion Developers. Made with ❤️ for building better habits.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
