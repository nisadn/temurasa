import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Link, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { authApi } from "../../config/services/authApi";
import { login } from "../../redux/features/authSlice";
import BackgroundLayout from "../Layout/BackgroundLayout";

const Account = ({isRegister}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();
    const dispatch = useDispatch();

    const postLogin = async (data) => {
        let res;
        if (isRegister) {
            res = await authApi.register(data);
        } else {
            res = await authApi.login(data)
        }
        return res;
    }

    const mutation = useMutation(postLogin, {
        onError: (err) => {
            toast({
                title: `${err.response.data.message}`,
                status: 'error',
                variant: 'left-accent',
                position: 'top',
                duration: 3000,
                isClosable: true,
            });
        },
        onSuccess: () => {
            toast({
                title: `${isRegister ? 'Registration' : 'Login'} success`,
                variant: 'left-accent',
                status: 'success',
                position: 'top',
                duration: 3000,
                isClosable: true,
            });
        }
    });

    const onSubmit = data => {
        console.log(data);
        mutation.mutate(data);
    }

    if (mutation.isSuccess) {
        if (isRegister) {
            router.push('/login');
        } else {
            dispatch(login(mutation.data));
            router.push('/');
        }
    } 

    return (
        <BackgroundLayout title={`${isRegister ? 'Register' : 'Login'} to TemuRasa`} desc='TemuRasa: Login to access more features'>
            <Flex w='full' 
                align='center' 
                textAlign='center' 
                justify='center' 
                direction='column' h='full' gap='4'
            >
                <Link href='/'>
                    <Text fontWeight='bold' fontSize='3xl' pl={[2,2,4]} color='white' className="tracking-widest">
                        TemuRasa
                    </Text>
                </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Flex direction='column' 
                            w='100%' 
                            px={[6,10,10]} py='8' 
                            boxShadow='md' 
                            borderRadius='lg' 
                            className="bg-white-200"
                        >
                        <Text as='span' fontSize='xl' fontWeight='bold'>{isRegister ? 'Register' : 'Login'}</Text>
                            {isRegister && <FormControl isInvalid={errors.name !== undefined} mt='4'>
                            <FormLabel fontWeight={'semibold'}>Name</FormLabel>
                                <Input 
                                    bg='white'
                                    placeholder='Enter name' 
                                    {...register("name", {
                                        required: true, 
                                        maxLength: 100
                                    })} 
                                />
                                <FormErrorMessage>This field is required</FormErrorMessage>
                            </FormControl>}

                            <FormControl isInvalid={errors.email !== undefined} mt='4'>
                            <FormLabel fontWeight={'semibold'}>Email</FormLabel>
                                <Input 
                                    bg='white'
                                    placeholder='Enter email'
                                    type='email' 
                                    {...register("email", {
                                        required: true, 
                                        maxLength: 100
                                    })} 
                                />
                                <FormErrorMessage>This field is required</FormErrorMessage>
                            </FormControl>

                            <FormControl mt={4} 
                                isInvalid={errors.password !== undefined}
                            >
                                <FormLabel fontWeight={'semibold'}>Password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        bg='white'
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        {...register("password", {required: true})} 
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>This field is required</FormErrorMessage>
                            </FormControl>

                        <Button px='10' type='submit' colorScheme='blue'
                            isLoading={mutation.isLoading} 
                        mt='6' >
                            {isRegister ? 'Register' : 'Login'}
                        </Button>

                        <Flex direction='column' fontSize='sm' mt='4' >
                            <Text>
                                {isRegister ? "Already have an account? " : "Don't have an account yet? "}
                            </Text>
                            <Link onClick={() => router.push(isRegister ? '/login' : '/register')}>
                                <Text color='blue.600' fontWeight='semibold' >
                                    {isRegister ? 'Login': 'Register'} here!
                                </Text>
                            </Link>
                        </Flex>

                        </Flex>
                        </form>
            </Flex>
        </BackgroundLayout>
    )
}

export default Account;