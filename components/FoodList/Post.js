import { Stack, Badge } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";

const Post = ({ val }) => {
  return (
    <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4" key={val.id}>
      <div className="w-full items-center justify-center">
        <img
          className="rounded-md object-cover w-full h-48"
          src="/assets/images/RujakCingur.jpg"
          alt=""
        />
        <p className="font-semibold text-black text-xl mt-2">{val.name}</p>
        <Stack direction="row" className="mt-2">
          {val.badge.map((value, i) => (
           <Badge
              variant="subtle"
              className="lg:px-8 lg:text-lg text-sm"
              colorScheme="blue"
              key={i}
            >
              {value}
            </Badge> 
          ))}
        </Stack>
        <div className="flex align-middle mt-2">
          <HiHeart
            color="#e11d48
"
            borderColor="#000000"
            size={20}
          />
          <p className="font-medium text-white-400 text-sm ml-1">{val.likes} likes</p>
        </div>
        <p className="font-semibold text-black text-lg mt-2">Description</p>
        <p className="font-medium text-white-400 text-base mt-2 text-justify">{val.description}
        </p>
      </div>
    </div>
  );
};

export default Post;
