/* eslint-disable @next/next/no-img-element */
import { Stack, Badge, Checkbox, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Post = ({ val }) => {
  const router = useRouter(); 
  return (
    <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4 hover:drop-shadow-md hover:cursor-pointer ease-in-out duration-200" 
      onClick={() => router.push(`/review/${val.id}`)}
    >
      <div className="w-full items-center justify-center">
        <img
          className="rounded-md object-cover w-full h-48"
          src={val.image[0]}
          alt=""
        />
        <p className="font-semibold text-black text-xl mt-2">{val.name}</p>
        <Box direction="row" className="mt-2">
          {val.foods.map((value, i) => (
            <Badge
            variant="subtle"
            className="lg:px-8 lg:text-lg text-sm"
            colorScheme="blue"
            mr='2' mb='2'
            key={i}
          >
            {value}
          </Badge>
          ))}
        </Box>
        <p className="font-medium text-white-400 text-sm mt-2">X reviews</p>
      </div>
    </div>
  );
};

export default Post;

