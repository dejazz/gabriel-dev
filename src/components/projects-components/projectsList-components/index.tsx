import { Flex } from "@chakra-ui/react"
import { projects } from "../../../dataBase"
import { CardProjects } from "../cardProjects-componets"

export const ProjectsList = () => {

    return(
        <Flex direction="column" width="100%"  maxW="1100px">
            {projects.map((item,index)=><CardProjects key={index} project={item}/>)}
        </Flex>
    )
}