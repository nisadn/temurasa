import { Box, Button, Flex, FormControl, FormErrorMessage, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { HiHeart } from 'react-icons/hi'

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = data => {
      console.log(data);
    }
    
    return (
    <div>
        <h1 className='text-4xl'>Hello World!</h1>
        <Flex direction='column' gap='4'>
          <Box p='4' bg='blue.300'>Ini box 1</Box>
          <Box p='4' bg='green.300'>Ini box 2</Box>
        </Flex>
        <Box>
          lope lope <HiHeart />
        </Box>
        <Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.content !== undefined}>
                <Textarea
                    // defaultValue={defaultContent}
                    placeholder='Write here'
                    minHeight={['300px','200px','150px']}
                    {...register("content", {required: true})}
                />
                <FormErrorMessage>This field is required</FormErrorMessage>
            </FormControl>

            <Flex direction={['column','row','row']}>
                <Button px='10' type='submit' 
                  // isLoading={mutation.isLoading} 
                >Post</Button>
                <Button px='10' >Cancel</Button>
            </Flex>

            <Box p='4' bg='random.100'>coba custom theme</Box>
            </form>
        </Flex>
    </div>
    )
}

export default Home;