import { Stack, Badge, Checkbox, Select, Flex, Text } from "@chakra-ui/react";
/* eslint-disable @next/next/no-img-element */
import { HiHeart } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useQuery } from 'react-query';
import { foodApi } from "../../config/services/foodApi";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Post = ({ foods }) => {

  const router = useRouter();

  return (
      <div className="w-full lg:flex lg:flex-wrap gap-4">
        {foods.map((val) => (
          <div
            className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4 hover:drop-shadow-md hover:cursor-pointer ease-in-out duration-200"
            key={val.id}
            onClick={() => router.push(`/restolist/${val.id}`)}
          >
            <div className="w-full items-center justify-center">
              <img
                className="rounded-md object-cover w-full h-48"
                src={val.image}
                alt=""
              />
              <p className="font-semibold text-black text-xl mt-2">
                {val.name}
              </p>
              <Stack direction="row" className="mt-2">
                {val.tags.map((value, i) => (
                  <Badge
                    variant="subtle"
                    className="lg:px-8 lg:text-lg text-sm"
                    colorScheme="blue"
                    key={i}
                  >
                    {value.name}
                  </Badge>
                ))}
              </Stack>
              <div className="flex align-middle mt-2">
                <HiHeart color="#e11d48" borderColor="#000000" size={20} />
                <p className="font-medium text-white-400 text-sm ml-1">
                  {val.likes} likes
                </p>
              </div>
              <p className="font-semibold text-black text-lg mt-2">
                Description
              </p>
              <p className="font-medium text-white-400 text-base mt-2 text-justify">
                {val.description}
              </p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Post;

// const foods = [
//   {
//     id: "1",
//     name: "Rujak Cingur",
//     badge: ["Food", "Spicy"],
//     image: "/assets/images/RujakCingur.jpg",
//     description:
//       "Cingur is taken from the Madurese regional language which means mouth. This food has a salty taste, and is served with a variety of ingredients such as cucumber, jicama",
//     likes: 100,
//   },
//   {
//     id: "2",
//     name: "Soto",
//     badge: ["Food", "Spicy"],
//     image: "/assets/images/RujakCingur.jpg",
//     description:
//       "Cingur is taken from the Madurese regional language which means mouth. This food has a salty taste, and is served with a variety of ingredients such as cucumber, jicama",
//     likes: 100,
//   },
//   {
//     id: "3",
//     name: "Rujak Cingur",
//     badge: ["Food", "Spicy"],
//     image: "/assets/images/RujakCingur.jpg",
//     description: "Cingur is taken from the Madurese ",
//     likes: 100,
//   },
//   {
//     id: "4",
//     name: "Rujak Cingur",
//     badge: ["Food", "Spicy"],
//     image: "/assets/images/RujakCingur.jpg",
//     description:
//       "language which means mouth. This food has a salty taste, and is served with a variety of ingredients such as cucumber, jicama",
//     likes: 100,
//   },
//   {
//     id: "5",
//     name: "Rujak Cingur",
//     badge: ["Food", "Spicy"],
//     image: "/assets/images/RujakCingur.jpg",
//     description:
//       "means mouth. This food has a salty taste, and is served with a variety of ingredients such as cucumber, jicama",
//     likes: 100,
//   },
//   {
//     id: "6",
//     name: "Rujak Cingur",
//     badge: ["Food", "Savory"],
//     image: "/assets/images/RujakCingur.jpg",
//     description: "Cingur is taken",
//     likes: 100,
//   },
// ];
