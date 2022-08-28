import { Stack, Badge, Checkbox, Select, Flex, Text } from "@chakra-ui/react";
/* eslint-disable @next/next/no-img-element */
import { HiHeart } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useQuery } from 'react-query';
import { foodApi } from "../../config/services/foodApi";
import { useEffect } from "react";

const Post = ({ isAllFoods }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const getFoods = async (data) => {
    return res.data;
  };

  const { status, data, error } = useQuery("foods", getFoods);

  return (
    <div className="lg:flex mt-8">
      <div className="lg:w-2/12 w-full">
        {isAllFoods && (
          <div className="allfood">
            <p className="font-medium text-black text-lg mb-2">Location</p>
            <Flex direction="column" w="200px" gap="1" mb="2">
              <Select
                placeholder="Select option"
                w="full"
                borderColor="blue.600"
                {...register("location", { required: true })}
              >
                {locations.map((val) => (
                  <option value={val.id} key={val.id}>
                    {val.name}
                  </option>
                ))}
              </Select>
              {errors.location?.type === "required" && (
                <Text color="red.500">Please select your destination</Text>
              )}
            </Flex>
          </div>
        )}
        <p className="font-semibold text-black text-xl mb-2">Filters</p>
        <Stack spacing={2} direction="column">
          {filters.map((val) => (
            <Checkbox
              key={val.id}
              colorScheme="blue"
              className="font-medium text-black text-xl"
              defaultChecked
            >
              {val.name}
            </Checkbox>
          ))}
        </Stack>
      </div>
      <div className="lg:w-10/12 w-full lg:flex lg:flex-wrap gap-4">
        {foods.map((val) => (
          <div
            className="lg:w-1/5 w-full h-max-content bg-white rounded-2xl px-4 py-4 mb-4"
            key={val.id}
          >
            <div className="w-full items-center justify-center">
              <img
                className="rounded-md object-cover w-full h-48"
                src="/assets/images/RujakCingur.jpg"
                alt=""
                // width='900px'
                // height='1100px'
                // objectFit="cover"
              />
              <p className="font-semibold text-black text-xl mt-2">
                {val.name}
              </p>
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
    </div>
  );
};

export default Post;

const locations = [
  {
    id: "1",
    name: "Madura",
  },
  {
    id: "2",
    name: "Palembang",
  },
  {
    id: "3",
    name: "Bali",
  },
];

const filters = [
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Sweet",
  },
  {
    id: "3",
    name: "Savory",
  },
];

const foods = [
  {
    id: "1",
    name: "Rujak Cingur",
    badge: ["Food", "Spicy"],
    image: "/assets/images/RujakCingur.jpg",
    description:
      "Cingur is taken from the Madurese regional language which means mouth. This food has a salty taste, and is served with a variety of ingredients such as cucumber, jicama",
    likes: 100,
  },
  {
    id: "2",
    name: "Soto",
    badge: ["Food", "Spicy"],
    image: "/assets/images/RujakCingur.jpg",
    description:
      "Cingur is taken from the Madurese regional language which means mouth. This food has a salty taste, and is served with a variety of ingredients such as cucumber, jicama",
    likes: 100,
  },
  {
    id: "3",
    name: "Rujak Cingur",
    badge: ["Food", "Spicy"],
    image: "/assets/images/RujakCingur.jpg",
    description: "Cingur is taken from the Madurese ",
    likes: 100,
  },
  {
    id: "4",
    name: "Rujak Cingur",
    badge: ["Food", "Spicy"],
    image: "/assets/images/RujakCingur.jpg",
    description:
      "language which means mouth. This food has a salty taste, and is served with a variety of ingredients such as cucumber, jicama",
    likes: 100,
  },
  {
    id: "5",
    name: "Rujak Cingur",
    badge: ["Food", "Spicy"],
    image: "/assets/images/RujakCingur.jpg",
    description:
      "means mouth. This food has a salty taste, and is served with a variety of ingredients such as cucumber, jicama",
    likes: 100,
  },
  {
    id: "6",
    name: "Rujak Cingur",
    badge: ["Food", "Savory"],
    image: "/assets/images/RujakCingur.jpg",
    description: "Cingur is taken",
    likes: 100,
  },
];
