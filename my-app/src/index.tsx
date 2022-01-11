import ReactDOM from "react-dom";
import {createGlobalStyle} from 'styled-components';
import EventHandler from "./evemt/eventHandler";
import FindUser from "./state/findUser";

const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
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
        <EventHandler/>
    </>
)

ReactDOM.render(<App/>,document.querySelector('#root'));