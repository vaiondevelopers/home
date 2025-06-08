
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Plus, 
  ArrowDown, 
  ArrowUp 
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://onkarpatil4394.github.io/Chainreact-Assets/android-chrome-192x192.png" 
                alt="ChainReact Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ChainReact
              </span>
            </div>
            <Link to="/app">
              <Button variant="outline" className="hidden sm:inline-flex">
                Open App
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              🎉 Free Forever • No Ads • Privacy First
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                ChainReact
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-4 font-medium">
              Build momentum. One habit at a time.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              Track your habits, build powerful chains, and watch your progress grow. 
              A privacy-first habit tracker that works offline and respects your data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/app">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg">
                Get Started Free
                <ArrowUp className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {isInstallable && (
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleInstallClick}
                className="w-full sm:w-auto border-blue-200 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
              >
                <Plus className="mr-2 h-5 w-5" />
                Install App
              </Button>
            )}
          </div>

          {/* Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="overflow-hidden shadow-xl border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-0">
                <img 
                  src="https://onkarpatil4394.github.io/Chainreact-Assets/Screenshot%202025-06-01%20151646.png" 
                  alt="ChainReact Desktop View" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-xl border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-0">
                <img 
                  src="https://onkarpatil4394.github.io/Chainreact-Assets/Screenshot%202025-06-01%20151657.png" 
                  alt="ChainReact Stats View" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-xl border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-0">
                <img 
                  src="https://onkarpatil4394.github.io/Chainreact-Assets/Screenshot%202025-06-01%20151727.png" 
                  alt="ChainReact Mobile View" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to build lasting habits, with none of the complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Build Habit Chains</h3>
                <p className="text-slate-600 leading-relaxed">
                  Create powerful habit chains and watch your streaks grow day by day.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <ArrowUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Track Progress</h3>
                <p className="text-slate-600 leading-relaxed">
                  Monitor your streaks and see detailed statistics of your habit journey.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <ArrowDown className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Works Offline</h3>
                <p className="text-slate-600 leading-relaxed">
                  Track habits anywhere, anytime. No internet connection required.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">100% Private</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your data stays on your device. No tracking, no analytics, no data collection.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <Plus className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Free Forever</h3>
                <p className="text-slate-600 leading-relaxed">
                  No subscriptions, no premium features. Everything is free, always.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-rose-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Simple & Elegant</h3>
                <p className="text-slate-600 leading-relaxed">
                  Clean, intuitive design that gets out of your way and lets you focus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Built with Trust in Mind
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Privacy First</h3>
              <p className="text-slate-600">No data collection, no tracking, no analytics. Your habits are yours alone.</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Always Free</h3>
              <p className="text-slate-600">No hidden costs, no premium tiers. Free today, free tomorrow, free forever.</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Quality Focused</h3>
              <p className="text-slate-600">Built by Vaion Developers with attention to detail and user experience.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <p className="text-xl mb-6">
              "We believe habit tracking should be simple, private, and accessible to everyone."
            </p>
            <p className="text-blue-100 font-medium">— Vaion Developers</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="https://onkarpatil4394.github.io/Chainreact-Assets/android-chrome-192x192.png" 
                alt="ChainReact Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">ChainReact</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link to="/privacy" className="text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/app" className="text-slate-300 hover:text-white transition-colors">
                Open App
              </Link>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 ChainReact by Vaion Developers. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Made with ❤️ for building better habits
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
