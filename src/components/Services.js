import React from 'react';
import ServicesCard from "../components/ServicesCard";

let services_info = "As a bulk SMS Company, We provide enterprise messaging Solution."

export default function services() {
    return (
        <div className ="home_services">

            {/* title section  */}
            <div className ="services_title">
                <p> Services </p>
                <p> { services_info } </p>
            </div>
            {/* title section ends  */}

            {/* services card section starts here  */}
            <div>
                <ServicesCard />
            </div>

        </div>
    )
}
