import { useState } from "react";
import { Mic, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AudioVisualizer } from "@/components/AudioVisualizer";
import { GlassCard } from "@/components/GlassCard";

const Recognize = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordToggle = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif text-5xl font-bold mb-4 text-gold">
            Recognize Music
          </h1>
          <p className="text-muted-foreground">
            Tap the button and let the magic happen
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 animate-fade-in-up">
          <GlassCard className="w-full">
            <div className="flex flex-col items-center gap-6 py-8">
              <AudioVisualizer isActive={isRecording} className="w-full" />
              
              <Button
                variant={isRecording ? "destructive" : "luxury"}
                size="xl"
                onClick={handleRecordToggle}
                className="relative group"
              >
                {isRecording ? (
                  <>
                    <Square className="h-6 w-6" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="h-6 w-6" />
                    Start Listening
                  </>
                )}
              </Button>

              {isRecording && (
                <div className="text-center animate-fade-in">
                  <p className="text-gold font-semibold mb-2">
                    Listening to audio...
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Play the song you want to identify
                  </p>
                </div>
              )}
            </div>
          </GlassCard>

          {!isRecording && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full animate-fade-in-up">
              {[
                { title: "Ultra Fast", desc: "Results in seconds" },
                { title: "AI Powered", desc: "Advanced recognition" },
                { title: "Accurate", desc: "99% match rate" },
              ].map((feature, i) => (
                <GlassCard key={i} className="text-center">
                  <h3 className="font-semibold text-lg mb-2 text-gold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recognize;
