/* eslint-disable @next/next/no-img-element */
import { Stack, Badge } from "@chakra-ui/react";

const Post = ({ val }) => {
  return (
    <div className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4">
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
        <p className="font-medium text-white-400 text-sm mt-8">{val.reviews} reviews</p>
      </div>
    </div>
  );
};

export default Post;
