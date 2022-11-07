import { useState } from "react";

export const useImageVisor = () => {
    const [imageVisor, setImageVisor] = useState(false);
    const [image, setImage] = useState('');
    const handleImageVisor = (imagen) => {
        setImageVisor(!imageVisor);
        setImage(imagen)
    }	
    const closeImageVisor = () => {
        setImageVisor(false);
    }
    return {
        image,
        imageVisor,
        handleImageVisor,
        closeImageVisor
    }
}