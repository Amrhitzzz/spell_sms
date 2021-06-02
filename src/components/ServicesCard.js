import React from 'react';

// Bulk SMS Content here
let bulksms_title = "Bulk SMS",
bulksms_content = "Bulk refers to the distribution of a large number of SMS messages to cell phone terminals. It is frequently used for warnings, reminders, marketing, as well as information and communication SMS among stakeholders.",
bulksms_button = "learn more";

// bulk mms content here 
let bulkmms_title ="Bulk MMS",
bulkmms_content = "Multimedia Messaging Service (MMS) is a standard way to send messages that include multimedia content to a mobile phone over a cellular network. Using our MMS platform, your business is able to contact thousands of potential customers around the world with eye-catching promotions, coupons, or special announcements.",
bulkmms_button = "learn More";

// sms getaway api content here 
let smsapi_title ="Bulk MMS",
smsapi_content = "Multimedia Messaging Service (MMS) is a standard way to send messages that include multimedia content to a mobile phone over a cellular network. Using our MMS platform, your business is able to contact thousands of potential customers around the world with eye-catching promotions, coupons, or special announcements.",
smsapi_button = "learn More";

// smsvoting content here 
let smsvoting_title ="Bulk MMS",
smsvoting_content = "Multimedia Messaging Service (MMS) is a standard way to send messages that include multimedia content to a mobile phone over a cellular network. Using our MMS platform, your business is able to contact thousands of potential customers around the world with eye-catching promotions, coupons, or special announcements.",
smsvoting_button = "learn More";

// smsshortcode content here 
let smsshortcode_title ="Bulk MMS",
smsshortcode_content = "Multimedia Messaging Service (MMS) is a standard way to send messages that include multimedia content to a mobile phone over a cellular network. Using our MMS platform, your business is able to contact thousands of potential customers around the world with eye-catching promotions, coupons, or special announcements.",
smsshortcode_button = "learn More";



export default function ServicesCard() {
    return (
        <>
        {/*1. bulk sms section  */}
        <div>
            <div>
                <p> { bulksms_title } </p>
                <p> { bulksms_content } </p>
                <p> { bulksms_button } </p>
            </div>
            <div>
                <img alt="bulk sms" />
            </div>
        </div>
        
        {/* 2. bulk mms  */}
        <div>
            <div>
                <p> { bulkmms_title } </p>
                <p> { bulkmms_content } </p>
                <p> { bulkmms_button } </p>
            </div>
            <div>
                <img alt="bulk mms" />
            </div>
        </div>
        
        {/*3.  sms gateaway api  */}
        <div>
            <div>
                <p> { smsapi_title } </p>
                <p> { smsapi_content } </p>
                <p> { smsapi_button } </p>
            </div>
            <div>
                <img alt="sms api" />
            </div>
        </div>
        
        {/*4.  sms voting  */}
        <div>
            <div>
                <p> { smsvoting_title } </p>
                <p> { smsvoting_content } </p>
                <p> { smsvoting_button } </p>
            </div>
            <div>
                <img alt="sms voting " />
            </div>
        </div>
        
        {/*5.  sms shortcode  */}
        <div>
            <div>
                <p> { smsshortcode_title } </p>
                <p> { smsshortcode_content } </p>
                <p> { smsshortcode_button } </p>
            </div>
            <div>
                <img alt="sms shortcode" />
            </div>
        </div>
        </>
        
    )
}
