import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

interface MealEntry {
  id: string;
  meal: string;
  notes: string;
  timestamp: string;
}

const MealLog = () => {
  const [meal, setMeal] = useState("");
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState<MealEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("mealEntries");
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const saveMeal = () => {
    if (!meal.trim()) {
      toast.error("Please enter what you ate");
      return;
    }

    const newEntry: MealEntry = {
      id: Date.now().toString(),
      meal: meal.trim(),
      notes: notes.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("mealEntries", JSON.stringify(updatedEntries));

    toast.success("Meal logged! You're doing great.");
    setMeal("");
    setNotes("");
  };

  const deleteMeal = (id: string) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem("mealEntries", JSON.stringify(updatedEntries));
    toast.success("Entry deleted");
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today, " + date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday, " + date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    } else {
      return date.toLocaleDateString("en-US", { 
        month: "short", 
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  };

  return (
    <div className="min-h-screen bg-calm-gradient pb-24 md:pb-8 pt-8 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Meal Log</h1>
          <p className="text-muted-foreground">Track what you eat without judgment</p>
        </div>

        <Card className="p-6 md:p-8 shadow-card border-none">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                What did you have?
              </label>
              <Input
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                placeholder="e.g., Breakfast: oatmeal with berries"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                How did it feel? (optional)
              </label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any thoughts about this meal..."
                className="min-h-[80px] resize-none bg-background"
              />
            </div>

            <Button 
              onClick={saveMeal}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Log Meal
            </Button>
          </div>
        </Card>

        {entries.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Your Meal History</h2>
            <div className="space-y-3">
              {entries.map((entry) => (
                <Card key={entry.id} className="p-4 shadow-sm border-none bg-card group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-foreground">{entry.meal}</h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {formatDate(entry.timestamp)}
                        </span>
                      </div>
                      {entry.notes && (
                        <p className="text-sm text-muted-foreground">{entry.notes}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteMeal(entry.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {entries.length === 0 && (
          <Card className="p-12 text-center shadow-sm border-none bg-card">
            <p className="text-muted-foreground">No meals logged yet. Start by adding your first entry above.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MealLog;
