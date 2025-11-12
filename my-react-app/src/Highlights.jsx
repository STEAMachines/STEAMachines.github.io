import React from "react";
import './Tailwind.css';
import './Highlights.css';

export default function Highlights() {
    return (
        <div className="highlights flex space-x-4 overflow-x-hidden p-4">
            <div className="higlight-item"><iframe src="https://youtube.com/embed/2yJgwwDcgV8?playlist=2yJgwwDcgV8&loop=1muted=0&controls=0&autoplay=1" frameborder="0"></iframe></div>
            <div className="higlight-item"><iframe src="https://youtube.com/embed/2yJgwwDcgV8?playlist=tgbNymZ7vqY&loop=1muted=0&controls=0&autoplay=1" frameborder="0"></iframe></div>
            <div className="higlight-item"><iframe src="https://youtube.com/embed/2yJgwwDcgV8?playlist=2yJgwwDcgV8&loop=1muted=0&controls=0&autoplay=1" frameborder="0"></iframe></div>
        </div>
    );
}
