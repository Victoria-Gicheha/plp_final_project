import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const Home = () => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="min-h-screen bg-calm-gradient pb-24 md:pb-8 pt-8 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Heart className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {greeting} ✨
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to your wellness companion. Take a moment to check in with yourself today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          <Card className="p-6 shadow-card hover:shadow-lg transition-all duration-300 border-none bg-card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">Your Wellness Journey</h3>
                <p className="text-sm text-muted-foreground">
                  This is a safe space to track your mood, meals, and find support when you need it.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-lg transition-all duration-300 border-none bg-card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-xl">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">Take It One Day at a Time</h3>
                <p className="text-sm text-muted-foreground">
                  Remember, progress isn't linear. Every small step counts, and you're doing great.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-wellness-gradient text-white shadow-card border-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Quick Reminder</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              You deserve care, nourishment, and kindness. If you're struggling today, that's okay. 
              Reach out for support when you need it.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
