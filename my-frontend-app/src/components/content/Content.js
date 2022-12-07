import { useState, useEffect } from "react";

// Functional component
const Content = (props) => {
    // Hook state
    const [name, setName] = useState("Bambang");
    const [age, setAge] = useState(0);

    // Effect hook
    useEffect (() => {
        setName("Ilham");
    }, []);

    useEffect (() => {
        setAge(10);
    }, []);

    return (
        <div>
            <p>Ceritanya ini isi content</p>
            <button onClick={() => setName("Agus")}>Ganti Pemeran</button>
            <button onClick={() => setAge(23)}>Ganti Umur</button>
            <h2>{props.name} suka bermain air</h2>
            <h2>Umur {name} adalah {age}</h2>
            <h4>nama : {props.person.name}</h4>
        </div>
    );
};

export default Content;