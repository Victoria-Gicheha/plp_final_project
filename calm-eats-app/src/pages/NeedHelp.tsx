import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, ExternalLink, Heart } from "lucide-react";

const resources = [
  {
    name: "National Eating Disorders Association (NEDA)",
    phone: "1-800-931-2237",
    description: "Get support, resources, and treatment options for eating disorders.",
    hours: "Mon-Thu: 9am-9pm ET, Fri: 9am-5pm ET",
    icon: Phone,
    link: "https://www.nationaleatingdisorders.org"
  },
  {
    name: "Crisis Text Line",
    contact: "Text HOME to 741741",
    description: "Free, 24/7 crisis support via text message for any crisis.",
    hours: "Available 24/7",
    icon: MessageCircle,
    link: "https://www.crisistextline.org"
  },
  {
    name: "NAMI Helpline",
    phone: "1-800-950-NAMI (6264)",
    description: "Information, resources, and referrals about mental health.",
    hours: "Mon-Fri: 10am-10pm ET",
    icon: Phone,
    link: "https://www.nami.org"
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    phone: "Call or text 988",
    description: "Free and confidential support for people in distress.",
    hours: "Available 24/7",
    icon: Phone,
    link: "https://988lifeline.org"
  }
];

const NeedHelp = () => {
  return (
    <div className="min-h-screen bg-calm-gradient pb-24 md:pb-8 pt-8 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Heart className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">You're Not Alone</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you're struggling, please reach out. These resources are here to help you anytime.
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-destructive/5 border-destructive/20">
          <div className="space-y-3">
            <h2 className="font-bold text-lg text-foreground flex items-center gap-2">
              <Phone className="h-5 w-5 text-destructive" />
              In Crisis?
            </h2>
            <p className="text-foreground">
              If you're in immediate danger or having thoughts of hurting yourself:
            </p>
            <div className="space-y-2 pl-4">
              <p className="font-semibold text-foreground">• Call 911</p>
              <p className="font-semibold text-foreground">• Call or text 988 (Suicide & Crisis Lifeline)</p>
              <p className="font-semibold text-foreground">• Text HOME to 741741 (Crisis Text Line)</p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Support Resources</h2>
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-lg transition-all duration-300 border-none bg-card"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">{resource.name}</h3>
                    <div className="space-y-1">
                      {resource.phone && (
                        <p className="font-medium text-primary">
                          <a href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                            {resource.phone}
                          </a>
                        </p>
                      )}
                      {resource.contact && (
                        <p className="font-medium text-primary">{resource.contact}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                      <p className="text-xs text-muted-foreground">{resource.hours}</p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto"
                  onClick={() => window.open(resource.link, '_blank')}
                >
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-wellness-gradient text-white shadow-card border-none">
          <div className="text-center space-y-4">
            <Mail className="h-10 w-10 mx-auto text-white/90" />
            <h2 className="text-2xl font-bold">Additional Support</h2>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
              Consider speaking with a licensed therapist or counselor who specializes in eating disorders. 
              Your doctor can provide referrals, or you can search for providers through your insurance.
            </p>
          </div>
        </Card>

        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>This app is a wellness tool and not a replacement for professional medical advice.</p>
          <p>Please consult with healthcare providers for diagnosis and treatment.</p>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
