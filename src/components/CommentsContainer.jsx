import { USER_ICON } from "../utils/constants";

const commentData = [
  {
    name: "Luffy",
    text: "this island is so cold",
    replies: [{}],
  },
  {},
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img className="w-12 h-12" alt="user" src={USER_ICON} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      {/* <div className="pl-5 border   border-l-black">
        <CommentsList key={index} comments={comment.replies}/>
      </div> */}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
