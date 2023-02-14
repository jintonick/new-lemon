import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import '../../App.css';

const Raiting = () => {
    return (
        <div className="raiting" >
            <FontAwesomeIcon icon={faStar} size="1x" color="#f4ce14" />
            <FontAwesomeIcon icon={faStar} size="1x" color="#f4ce14" />
            <FontAwesomeIcon icon={faStar} size="1x" color="#f4ce14" />
            <FontAwesomeIcon icon={faStar} size="1x" color="#f4ce14" />
            <FontAwesomeIcon icon={faStar} size="1x" color="#f4ce14" />
        </div>
    );
};

export default Raiting;