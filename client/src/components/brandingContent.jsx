import React from "react";
import Logo from "../assets/SVG/logo.svg"


const BrandingContent = () => {
    return (
        <div className="container pt-16 px-4 text-center mx-auto flex justify-center fill-amber-600">
            {/* logo */}
            <img className="w-20 h-auto" src={Logo}/> 
        </div>
    )
}

export default BrandingContent;