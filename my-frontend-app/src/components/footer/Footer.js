import style from "./footer.module.css";
import {Div, H1} from "./StyledDiv.js";

// Functional component
const Footer = () => {
    return (
        <>
        <div>
            <div className={style["Footer"]}>Ini Footer</div>
        </div>
        <Div>
            Ini Footer 2
        </Div>
        <H1>
            Ini Footer 3
        </H1>
        </>
    );
};

export default Footer;