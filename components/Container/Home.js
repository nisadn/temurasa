import { Box, Button, Center, Flex, FormControl, FormErrorMessage, Select, Text, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiHeart } from 'react-icons/hi'

import styles from '../../styles/Home.module.css'
import Layout from '../Layout/Layout';
import Navbar from '../Menu/Navbar';

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = data => {
    //   console.log(data);
      router.push(`/foodlist/${data.location}`);
    }

    return (
    <div className={styles.home}>
        <Navbar page='home' />
        <Flex color='white' w='full' 
            align='center' 
            // textAlign='center' 
            justify='center' 
            direction='column' h='full' gap='4'
        >
            <Flex direction='column' fontSize='5xl' fontWeight='bold'>
                <Text>Discover Your Taste</Text>
                <Text>Wherever You Going</Text>
            </Flex>
            <Flex fontSize='xl'>Let’s find the best food of your destination in Indonesia with us.</Flex>
            <Flex direction='column' align='left' bg='white' color='black' px='10' py='6'
                w={['90%','70%','50%']} borderRadius='3xl' gap='2' mt='10'
            >
                <Text fontWeight='semibold' fontSize='lg'>Where are you going?</Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Flex gap='2' mb='2'>
                    <Flex direction='column' w='full' gap='1'>
                        <Select placeholder='Select option' w='full' borderColor='blue.600' 
                            {...register("location", {required: true})}
                            >
                            {locations.map((val) => (
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
    </div>
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