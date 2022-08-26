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
  Select,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { HiSearch, HiHeart } from "react-icons/hi";
import Post from "../../components/RestoList/Post";

const RestoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Layout
      title={"Welcome to TemuRasa!"}
      desc="TemuRasa: Find Your Taste in Indonesia"
    >
      <div className="w-full items-center justify-center">
        <p className="font-semibold text-black lg:text-5xl text-2xl text-center">
          Recomended Restaurants in{" "}
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
          <p className="font-medium text-black text-lg mb-2">Location</p>
          <Flex direction="column" w="200px" gap="1">
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
          <p className="font-medium text-black text-lg mb-2 mt-2">Foods</p>
          <Stack spacing={2} direction="column">
            {filters.map((val) => (
              <Checkbox
                colorScheme="blue"
                className="font-medium text-black text-xl"
                defaultChecked
                key={val.id}
              >
                {val.name}
              </Checkbox>
            ))}
          </Stack>
        </div>
        <div className="lg:w-10/12 w-full lg:flex lg:flex-wrap gap-4">
          {resto.map((val) => (
            <Post val={val} key={val.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RestoPage;

const filters = [
  {
    id: "1",
    name: "Sate",
  },
  {
    id: "2",
    name: "Campur",
  },
  {
    id: "3",
    name: "Rujak",
  },
];

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
const resto = [
  {
    id: "1",
    name: "Sate Lalat Pak Kandes",
    badge: ["Lontong", "Sate"],
    image: "/assets/images/RujakCingur.jpg",
    reviews: 24,
  },
  {
    id: "2",
    name: "Soto Pak Abas",
    badge: ["Lontong", "Sate"],
    image: "/assets/images/RujakCingur.jpg",
    reviews: 14,
  },
  {
    id: "3",
    name: "Rujak Cingur",
    badge: ["Lontong", "Sate"],
    image: "/assets/images/RujakCingur.jpg",
    reviews: 27,
  },
];
