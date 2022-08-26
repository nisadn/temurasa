import { Badge, Box, Button, Checkbox, Flex, Text, useDisclosure } from "@chakra-ui/react";
import GallerySet from "../../components/Gallery/Gallery";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Review/Post";
import ReviewModal from "../../components/Review/ReviewModal";
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

const ReviewPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Layout
            title="Detail Review"
            desc="Showing user reviews regarding certain resto"
        >
            <Flex direction='column' w='full' align='center'>
                <Flex direction='column' w={['95%','90%','80%']} gap='10'>
                <Flex bg='white' direction={['column','row','row']} borderRadius='2rem' px='10' py='8' boxShadow='md' gap='4'>
                    <Flex w='full' direction='column' justify='center' gap='2' >
                        <Text fontWeight='bold' fontSize='3xl'>{makanan.name}</Text>
                        <Text color='blue.500' fontWeight='medium'>{makanan.location}</Text>
                        <Text color='gray.500'>{makanan.open}</Text>
                        <Text color='gray.500'>{makanan.telp}</Text>
                        <Box >
                            {makanan.category.map((val, idx) => (
                                <Badge key={idx} mr='2' mb='2' colorScheme='pink' px='2'>{val}</Badge>
                            ))}
                        </Box>
                    </Flex>
                    <Flex w={['100%','65%','65%']} >
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' 
                            className={styles.imgReview} 
                            width='500px' height='300px'
                        />
                    </Flex>
                </Flex>
                <Flex>
                    <GallerySet />
                </Flex>
                <Flex direction='column' w='full' >
                    <Flex h='fit-content' mb='2'>
                        <Box w='full' fontSize='xl' fontWeight='bold'>Reviews</Box>
                        <Button colorScheme='blue' onClick={onOpen}>Add Review</Button>
                        <ReviewModal onClose={onClose} isOpen={isOpen} />
                    </Flex>
                    <Box h='1.5px' bg='black'></Box>
                    <Flex gap='6' mt='6' mb='10'>
                    <Checkbox
                            colorScheme="blue"
                            className="text-xl"
                            defaultChecked
                        >
                        English
                        </Checkbox>
                        <Checkbox
                            colorScheme="blue"
                            className="text-xl"
                        >
                        Bahasa
                        </Checkbox>
                    </Flex>
                    <Flex direction='column' gap='6'>
                    {posts.map((val) => (
                        <Post val={val} key={val.id} />
                    ))}
                    </Flex>
                </Flex>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default ReviewPage;

const makanan = {
    name: 'Bebek Kaleyo',
    location: 'Jl. Jalanan, Kecamatan, Kota, Prov Jl. Jalanan, Kecamatan, Kota, Prov',
    open: '08.00 AM - 10.00 PM',
    telp: '0895 1313 5656',
    category: ['Gudeg', 'Mi Jawa', 'Lumpia']
}

const posts = [{
    id: '1',
    profile: 'https://bit.ly/dan-abramov',
    name: 'Fairuz Hasna R',
    review: 'Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.',
    img: 'https://bit.ly/dan-abramov',
},{
    id: '2',
    profile: 'https://bit.ly/dan-abramov',
    name: 'Fairuz Hasna R',
    review: 'Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.',
}]