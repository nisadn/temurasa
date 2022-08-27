import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Review/Post";
import ReviewModal from "../../components/Review/ReviewModal";
import DetailResto from "../../components/Review/DetailResto";
import { useRouter } from "next/router";
import { useQuery } from 'react-query';
import { reviewApi } from "../../config/services/reviewApi";

const Reviews = ({ id }) => {

    const getReviews = async () => {
        const res = await reviewApi.getReview(id);
        return res.data;
    }

    const { status, data, error } = useQuery('reviews', getReviews); 

    // if (status === 'success') {
    //     console.log(data);
    // }

    return status === 'success' && data ? <>
        {data.data.map((val) => (
            <Post val={val} key={val.id} />
        ))}
    </> : status === 'success' ? <div>This restaurant has no reviews yet.</div> : <p>Loading...</p>
}

const ReviewPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const id = router.query.id;

    return (
        <Layout
            title="Detail Review"
            desc="Showing user reviews regarding certain resto"
        >
            <Flex direction='column' w='full' align='center'>
                <Flex direction='column' w={['95%','90%','80%']} gap='10'>
                {id ? <>
                <DetailResto id={id} />
                <Flex direction='column' w='full' >
                    <Flex h='fit-content' mb='2'>
                        <Box w='full' fontSize='xl' fontWeight='bold'>Reviews</Box>
                        <Button colorScheme='blue' onClick={onOpen}>Add Review</Button>
                        <ReviewModal onClose={onClose} isOpen={isOpen} />
                    </Flex>
                    <Box h='1.5px' bg='black' mb='6'></Box>
                    <Flex direction='column' gap='8'>
                        <Reviews id={id} />
                    </Flex>
                </Flex></>: <p>Loading...</p>}
                </Flex>
            </Flex>
        </Layout>
    )
}

export default ReviewPage;