import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("api pollong");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(10),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex-col-reverse">
        {chatMessage.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        value={liveMessage}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Brook",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input className="w-70" type="text" />
        <button
          className="px-2 mx-2 bg-green-100"
          onChange={(e) => setLiveMessage(e.target.value)}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
