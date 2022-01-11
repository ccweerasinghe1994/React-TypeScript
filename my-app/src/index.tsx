import ReactDOM from "react-dom";
import GuestList from "./state/guest-list";
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
    font-family: 'Bebas Neue', cursive;
}

body{
    background-image: linear-gradient(to bottom right,rgba(241, 113, 9, 0.1),rgba(219, 80, 16, 0.1));
}

`

const App =()=>(
    <>
    <GlobalStyles/>
        <GuestList/>
    </>
)

ReactDOM.render(<App/>,document.querySelector('#root'));