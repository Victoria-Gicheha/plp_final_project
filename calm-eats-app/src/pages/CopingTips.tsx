import { Card } from "@/components/ui/card";
import { Heart, Brain, Users, Book, Music, Wind } from "lucide-react";

const tips = [
  {
    icon: Heart,
    title: "Practice Self-Compassion",
    description: "Speak to yourself as you would to a friend. You deserve kindness, especially from yourself.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Brain,
    title: "Mindful Breathing",
    description: "Take 5 deep breaths. Inhale for 4 counts, hold for 4, exhale for 6. This can help calm your nervous system.",
    color: "bg-accent/20 text-accent"
  },
  {
    icon: Users,
    title: "Reach Out",
    description: "Connect with someone you trust. You don't have to go through this alone. Text a friend or call a support line.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Book,
    title: "Journaling",
    description: "Write down your thoughts and feelings. Getting them out of your head and onto paper can bring relief.",
    color: "bg-accent/20 text-accent"
  },
  {
    icon: Music,
    title: "Soothing Sounds",
    description: "Listen to calming music, nature sounds, or a guided meditation. Sound can be a powerful tool for regulation.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Wind,
    title: "Ground Yourself",
    description: "Use the 5-4-3-2-1 technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
    color: "bg-accent/20 text-accent"
  }
];

const CopingTips = () => {
  return (
    <div className="min-h-screen bg-calm-gradient pb-24 md:pb-8 pt-8 md:pt-24">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Coping Strategies</h1>
          <p className="text-muted-foreground">Tools and techniques to support your wellbeing</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-lg transition-all duration-300 border-none bg-card group cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="space-y-4">
                <div className={`p-3 rounded-xl w-fit ${tip.color} group-hover:scale-110 transition-transform duration-300`}>
                  <tip.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-wellness-gradient text-white shadow-card border-none">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Remember</h2>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
              These are tools to help you through difficult moments. What works for one person may not work for another, 
              and that's okay. Be patient with yourself as you find what helps you feel better.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CopingTips;
