import { BotMessageSquare } from "lucide-react";

interface IChatBotProps {
  name?: string;
  onMessageSend?: (message: string) => Promise<string>;
  styles?: React.CSSProperties;
}

const ChatBot = ({ name = "" }: IChatBotProps) => {
  return (
    <main>
      <button className="hover:scale-110 cursor-pointer flex items-center justify-center gap-2 text-sm p-2 border-2 border-amber-500 text-amber-500 bg-amber-500/10 hover:bg-amber-500/20  duration-300 rounded-full ">
        <BotMessageSquare className="w-4 h-4" /> {name}
      </button>
    </main>
  );
};

export default ChatBot;
