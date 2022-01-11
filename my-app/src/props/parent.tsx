import {ChildAsFC} from './child'
const Parent = ()=>{
    return(
        <ChildAsFC onClick={()=>{console.log(
            "clicked"
        );
        }} color='red' >
            this is children
        </ChildAsFC>
    )
}

export default Parent;