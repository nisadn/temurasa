/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout/Layout";
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Stack,
  Checkbox,
  Badge,
} from "@chakra-ui/react";
import { HiSearch, HiHeart } from "react-icons/hi";
import Post from "../../components/FoodList/Post";

const FoodPage = () => {
  return (
    <Layout
      title={"Welcome to TemuRasa!"}
      desc="TemuRasa: Find Your Taste in Indonesia"
    >
      <div className="w-full items-center justify-center">
        <p className="font-semibold text-black lg:text-5xl text-2xl text-center">
          Recomended Food in{" "}
          <span className="font-semibold text-primary lg:text-5xl text-2xl text-center">
            Madura
          </span>
        </p>
      </div>

      <div className="w-full flex items-center justify-center mt-8">
        <InputGroup width={"550px"}>
          <Input
            placeholder="Search"
            borderRadius={"3xl"}
            borderColor={"#D6D6D6"}
            borderWidth={"2px"}
            backgroundColor={"#FFFFFF"}
          />
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={<Box as={HiSearch} color="#000000" size={24} />}
          ></InputRightElement>
        </InputGroup>
      </div>
      <div className="lg:flex mt-8">
        <div className="lg:w-2/12 w-full">
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
            <Post val={val} key={val.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FoodPage;

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
