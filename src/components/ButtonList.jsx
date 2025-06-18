import Button from "./Button";

const ButtonList = () => {
  const lists = [
    "All",
    "Music",
    "Cooking",
    "Anime",
    "Vlog",
    "Gaming",
    "Podcast",
    "Skill",
    "Trailers",
    "Live",
    "Avengers",
  ];
  return (
    <div className="flex">
      {lists.map((items, index) => (
        <Button key={index} name={items} />
      ))}
    </div>
  );
};

export default ButtonList;
