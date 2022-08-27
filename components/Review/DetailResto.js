import { Box, Flex, Text, Badge, Button, Icon } from "@chakra-ui/react";
import Image from "next/image";
import styles from '../../styles/Home.module.css';
import { useQuery } from 'react-query';
import { restoApi } from "../../config/services/restoApi";
import GallerySet from "../Gallery/Gallery";
import { HiLocationMarker } from 'react-icons/hi';

const DetailResto = ({ id }) => {

    const getDetailResto = async () => {
        const res = await restoApi.getDetail(id);
        return res.data;
    }

    const { status, data, error } = useQuery('resto', getDetailResto); 

    if (status === 'success') {
        console.log(data);
    }

    return (
        <>
        <Flex bg='white' direction={['column','row','row']} borderRadius='2rem' px='10' py='8' boxShadow='md' gap='4'>
            {status === 'success' && data ? <><Flex w='full' direction='column' justify='center' gap='2' >
                <Text fontWeight='bold' fontSize='3xl'>{data.name}</Text>
                <Text color='blue.500' fontWeight='medium'>{data.address}</Text>
                <Text color='gray.500'>{data.openHours}</Text>
                <Text color='gray.500'>{data.phone}</Text>
                <Box mt='2'>
                    {data.foods.map((val, idx) => (
                        <Badge key={idx} mr='2' mb='2' colorScheme='pink' px='2'>{val}</Badge>
                    ))}
                </Box>
                <Button leftIcon={<Icon as={HiLocationMarker} color='blue.600' />} 
                    colorScheme='blue' variant='outline' w='fit-content' size='sm'
                    onClick={() => window.open(data.map, '_blank')}
                >
                    Maps
                </Button>
            </Flex>
            <Flex w={['100%','65%','65%']} >
                <Image src={data.image[0]} alt='Dan Abramov' 
                    className={styles.imgReview} 
                    width='500px' height='300px'
                />
            </Flex></> 
            :
                data ? <div>No data provided</div>
            : <p>Loading...</p>}
        </Flex>
        <Flex direction='column' gap='2'>
            <Text fontSize='xl' fontWeight='bold'>Menu</Text>
            <div>
                {status === 'success' && data ? <GallerySet data={data.menu} /> : <p>Loading</p>}
            </div>
        </Flex>

        <Flex direction='column' gap='2'>
            <Text fontSize='xl' fontWeight='bold'>Gallery</Text>
            <div>
                {status === 'success' && data ? <GallerySet data={data.image} /> : <p>Loading</p>}
            </div>
        </Flex>
        </>
    )
}

export default DetailResto;
