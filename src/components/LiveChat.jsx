import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("api pollong");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(10),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex-col-reverse">
      {chatMessage.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
