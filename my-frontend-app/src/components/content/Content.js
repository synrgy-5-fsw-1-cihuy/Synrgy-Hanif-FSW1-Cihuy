import { useState } from "react";

// Functional component
const Content = () => {
    const [name, setName] = useState("Ilyas");

    return (
        <div>
            <p>Ceritanya ini isi content</p>
            <button onClick={() => setName("Dila")}>Ganti Pemeran</button>
            <h2>{name} suka bermain air</h2>
        </div>
    );
};

export default Content;