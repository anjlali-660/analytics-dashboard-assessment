import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User } from "lucide-react";
import { evData, getAnalytics } from "@/data/evData";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your EV Analytics AI assistant. Ask me anything about the electric vehicle data, like 'Which EV make is most popular?' or 'What's the average range of BEVs?'",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Simple AI simulation - in a real app, this would call an LLM API
  const generateAIResponse = (question: string): string => {
    const analytics = getAnalytics();
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('most popular') || lowerQuestion.includes('popular make')) {
      const mostPopular = Object.entries(analytics.makeStats)
        .sort(([,a], [,b]) => b - a)[0];
      return `The most popular EV make is ${mostPopular[0]} with ${mostPopular[1]} vehicles registered (${Math.round(mostPopular[1]/analytics.totalVehicles*100)}% of total).`;
    }

    if (lowerQuestion.includes('tesla')) {
      const teslaCount = analytics.makeStats['TESLA'] || 0;
      return `Tesla has ${teslaCount} vehicles registered, making up ${Math.round(teslaCount/analytics.totalVehicles*100)}% of all EVs in the dataset.`;
    }

    if (lowerQuestion.includes('range') || lowerQuestion.includes('average')) {
      return `The average electric range across all EVs is ${analytics.avgRange} miles. Tesla Model 3 has the highest range at 322 miles.`;
    }

    if (lowerQuestion.includes('bev') || lowerQuestion.includes('battery')) {
      return `There are ${analytics.bevCount} Battery Electric Vehicles (BEVs) and ${analytics.phevCount} Plug-in Hybrid Electric Vehicles (PHEVs). BEVs make up ${Math.round(analytics.bevCount/analytics.totalVehicles*100)}% of the fleet.`;
    }

    if (lowerQuestion.includes('county') || lowerQuestion.includes('location')) {
      const topCounty = Object.entries(analytics.countyStats)
        .sort(([,a], [,b]) => b - a)[0];
      return `${topCounty[0]} County has the most EVs with ${topCounty[1]} vehicles registered. This makes sense as it includes major urban areas.`;
    }

    if (lowerQuestion.includes('year') || lowerQuestion.includes('model year')) {
      const years = Object.entries(analytics.yearStats)
        .sort(([,a], [,b]) => b - a);
      return `The most common model year is ${years[0][0]} with ${years[0][1]} vehicles. We can see EV adoption increasing in recent years.`;
    }

    if (lowerQuestion.includes('total') || lowerQuestion.includes('how many')) {
      return `There are ${analytics.totalVehicles} electric vehicles in the dataset, with ${analytics.bevCount} BEVs and ${analytics.phevCount} PHEVs.`;
    }

    // Default insights
    return `Here are some key insights from the EV data:
    
• Total EVs: ${analytics.totalVehicles}
• Most popular make: ${Object.entries(analytics.makeStats).sort(([,a], [,b]) => b - a)[0][0]}
• Average range: ${analytics.avgRange} miles
• BEV vs PHEV: ${Math.round(analytics.bevCount/analytics.totalVehicles*100)}% are BEVs
• Top county: ${Object.entries(analytics.countyStats).sort(([,a], [,b]) => b - a)[0][0]} County

Feel free to ask more specific questions!`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(input),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="h-96 p-4 border-border bg-card/50 backdrop-blur-sm flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-5 h-5 text-electric-blue" />
        <h3 className="text-lg font-semibold text-foreground">AI Assistant</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                message.isUser ? 'bg-electric-blue' : 'bg-electric-green'
              }`}>
                {message.isUser ? (
                  <User className="w-3 h-3 text-background" />
                ) : (
                  <Bot className="w-3 h-3 text-background" />
                )}
              </div>
              <div className={`p-3 rounded-lg ${
                message.isUser 
                  ? 'bg-electric-blue text-background' 
                  : 'bg-muted text-foreground'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-2 justify-start">
            <div className="w-6 h-6 rounded-full bg-electric-green flex items-center justify-center">
              <Bot className="w-3 h-3 text-background" />
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about EV data..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1"
        />
        <Button 
          onClick={handleSend} 
          disabled={!input.trim() || isLoading}
          size="icon"
          className="bg-electric-blue hover:bg-electric-blue/80"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};