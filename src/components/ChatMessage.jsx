import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
    
    
   

  return (
    <div className="flex items-center shadow-sm px-2">
      <img className="h-8" alt="usericon" src={USER_ICON} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
