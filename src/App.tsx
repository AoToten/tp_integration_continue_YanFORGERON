import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
    const [statusCode, setStatusCode] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatusCode(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (statusCode) {
            setImageUrl(`https://http.cat/${statusCode}`);
        }
    };

    return (
        <div className="app">
            <h1>HTTP Cat Image Viewer</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={statusCode}
                    onChange={handleInputChange}
                    placeholder="Enter HTTP status code"
                />
                <button type="submit">Get Image</button>
            </form>
            {imageUrl && (
                <div>
                    <h2>HTTP Status Code: {statusCode}</h2>
                    <img src={imageUrl} alt={`HTTP cat ${statusCode}`} />
                </div>
            )}
        </div>
    );
};

export default App;
