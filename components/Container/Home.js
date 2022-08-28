import { Button, Flex, Select, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { locationApi } from '../../config/services/locationApi';

import BackgroundLayout from '../Layout/BackgroundLayout';
import Navbar from '../Menu/Navbar';

const Home = () => {
    const getLocation = async () => {
        const res = await locationApi.getLocation();
        return res.data;
    }

    const { status, data, error } = useQuery("location", getLocation);

    if (status === 'success') {
        console.log(data.data);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = data => {
    //   console.log(data);
      router.push(`/foodlist/${data?.data?.id}`);
    }

    return (
    <BackgroundLayout title={'Welcome to TemuRasa!'}>
        <Navbar page='home' />
        <Flex color='white' w='full' 
            align='center' 
            textAlign='center' 
            justify='center' 
            direction='column' h='full' gap='4'
        >
            <Flex direction='column' fontSize={['3xl','4xl','5xl']} fontWeight='bold'>
                <Text>Discover Your Taste</Text>
                <Text>Wherever You&apos;re Going</Text>
            </Flex>
            <Flex fontSize={['lg','lg','xl']} px='6'>Let’s find the best food of your destination in Indonesia with us.</Flex>
            <Flex direction='column' align='left' bg='white' color='black' px={[5,8,10]} py={[4,6,6]}
                w={['90%','70%','50%']} borderRadius='3xl' gap='2' mt='10' textAlign='left'
            >
                <Text fontWeight='semibold' fontSize='lg'>Where do you want to go?</Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Flex gap='2' mb='2'>
                    <Flex direction='column' w='full' gap='1'>
                        <Select placeholder='Select option' w='full' borderColor='blue.600' 
                            {...register("location", {required: true})}
                            >
                            {data?.data.map((val) => (
                                <option value={val.id} key={val.id}>{val.name}</option>
                                ))}
                        </Select>
                        {errors.location?.type === 'required' && 
                            <Text color='red.500'>Please select your destination</Text>
                        }
                    </Flex>
                    <Button type='submit' colorScheme='blue'>Go</Button>
                </Flex>
                </form>
            </Flex>
        </Flex>
    </BackgroundLayout>
    )
}

export default Home;

const locations = [{
    id: '1',
    name: 'Madura',
},{
    id: '2',
    name: 'Palembang',
},{
    id: '3',
    name: 'Bali',
}
]