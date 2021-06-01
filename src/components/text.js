import React from 'react';
import '../components/text.css';

const TextMain = ({size, content}) => {
    return (
        <div className="Text">
            {content}
        </div>
    );
};

export default TextMain;