import { useAccount } from '@web3modal/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function UseAccount() {
    const { account, isReady } = useAccount()

    return (
        <section>
            <Button colorScheme='blue'>Human Check </Button>
        </section>

    )
}