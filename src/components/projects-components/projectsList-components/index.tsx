import { Flex, Heading } from "@chakra-ui/react"
import { projects } from "../../../dataBase"
import { CardProjects } from "../cardProjects-componets"

export const ProjectsList = () => {

    return(
         
        <Flex direction="column" width="100%" mt="7rem"  maxW="1100px" h="100%">
                
            <Heading colorScheme={'whiteAlpha'} textAlign="center" variant={["mobile", "primary", "primary"]} mb="2rem">&#60;Meus Projetos/&#62;</Heading>
            {projects.map((item,index)=><CardProjects key={item.id}  project={item}/>)}
        </Flex>
           
    )
}