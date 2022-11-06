import { Select, Grid } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const SkillsTab = ()=> {
    return (
        <Grid>
            <Heading as='h5' size='md'>
            What they are good at?
            </Heading>
            <Select placeholder='Select option'>
                <option value='option1'>Javascript</option>
                <option value='option2'>Typescript</option>
                <option value='option3'>Solidity</option>
                <option value='option4'>CSS</option>
                <option value='option5'>Rust</option>
                <option value='option6'>Golang</option>
                <option value='option7'>NextJs</option>
                <option value='option8'>Python</option>
                <option value='option9'>SQL</option>
            </Select>
            
        </Grid>

    )
}

export default SkillsTab;