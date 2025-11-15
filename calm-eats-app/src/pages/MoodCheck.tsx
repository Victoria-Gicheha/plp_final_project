import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface MoodEntry {
  id: string;
  mood: string;
  note: string;
  timestamp: string;
}

const moods = [
  { emoji: "😊", label: "Great", value: "great" },
  { emoji: "🙂", label: "Good", value: "good" },
  { emoji: "😐", label: "Okay", value: "okay" },
  { emoji: "😔", label: "Low", value: "low" },
  { emoji: "😢", label: "Struggling", value: "struggling" },
];

const MoodCheck = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("moodEntries");
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const saveMood = () => {
    if (!selectedMood) {
      toast.error("Please select a mood");
      return;
    }

    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      mood: selectedMood,
      note,
      timestamp: new Date().toISOString(),
    };

    const updatedEntries = [newEntry, ...entries].slice(0, 30); // Keep last 30 entries
    setEntries(updatedEntries);
    localStorage.setItem("moodEntries", JSON.stringify(updatedEntries));

    toast.success("Mood saved! Thank you for checking in.");
    setSelectedMood("");
    setNote("");
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="min-h-screen bg-calm-gradient pb-24 md:pb-8 pt-8 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">How are you feeling?</h1>
          <p className="text-muted-foreground">Take a moment to check in with yourself</p>
        </div>

        <Card className="p-6 md:p-8 shadow-card border-none">
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium text-foreground">Select your mood</label>
              <div className="grid grid-cols-5 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                      selectedMood === mood.value
                        ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                        : "bg-secondary hover:bg-accent"
                    }`}
                  >
                    <span className="text-3xl">{mood.emoji}</span>
                    <span className="text-xs font-medium">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Any thoughts? (optional)
              </label>
              <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What's on your mind?"
                className="min-h-[100px] resize-none"
              />
            </div>

            <Button 
              onClick={saveMood}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Save Mood Check-In
            </Button>
          </div>
        </Card>

        {entries.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Recent Check-Ins</h2>
            <div className="space-y-3">
              {entries.slice(0, 5).map((entry) => (
                <Card key={entry.id} className="p-4 shadow-sm border-none bg-card">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">
                      {moods.find((m) => m.value === entry.mood)?.emoji}
                    </span>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">
                          {moods.find((m) => m.value === entry.mood)?.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(entry.timestamp)}
                        </span>
                      </div>
                      {entry.note && (
                        <p className="text-sm text-muted-foreground">{entry.note}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodCheck;
