import { useState } from 'react';
import { CustomButton, CustomInput, Header, ListContainer, Wrapper } from './guest-list.styles';

const GuestList:React.FC=()=>{
    
    const [name,setName] =  useState("");
    const [guestList,setGuestList] = useState<string[]>([])
    const onClick = ()=>{
       
        setGuestList([...guestList,name]);
         setName("");
    }
   
    return <Wrapper>
        <Header>Guest List</Header>
        <CustomInput placeholder='enter a name' value={name} onChange={(e)=>setName(e.target.value)} type="text" />
        <CustomButton onClick={onClick} >Add Guest</CustomButton>
        <ListContainer>
            {
                guestList && guestList.map(guest=><li key={guest} >{guest}</li>)
            }
        </ListContainer>
    </Wrapper>
    
}

export default GuestList;