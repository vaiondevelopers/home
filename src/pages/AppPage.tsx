
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const AppPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="https://onkarpatil4394.github.io/Chainreact-Assets/android-chrome-192x192.png" 
              alt="ChainReact Logo" 
              className="w-12 h-12"
            />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChainReact
            </h1>
          </div>
          
          <p className="text-xl text-slate-600 mb-8">
            Your habit tracking app is coming soon! This is where the main app functionality will be implemented.
          </p>

          <Card className="mb-8 border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <span>🚧</span>
                <span>App Under Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                We're building an amazing habit tracking experience for you. 
                The app will include habit creation, streak tracking, progress analytics, and more!
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm">Landing page design ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-sm">Habit tracking interface (in progress)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="text-sm">Progress analytics (planned)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="text-sm">Offline functionality (planned)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowDown className="mr-2 h-4 w-4" />
              Back to Landing Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
