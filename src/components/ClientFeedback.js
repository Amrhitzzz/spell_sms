import React from 'react';

let userfeedback = `"I’m a happy customer who uses Spell Hosting! The hosting plans are very reasonably priced , and I like Spell Hosting’s WordPress Hosting Plan. Forme, as a bloger, its the superior plan"`,
    username = "Rajan Dahal";

export default function ClientFeedback() {
    return (
        <div>
            <div>
                <p> Client Feedback </p>
                <p> What Client Say About </p>
            </div>

            <div>
                <div>
                    <img alt="user icon image" />
                    <p> { userfeedback } </p>
                    <p> { username } </p>
                </div>
                
                <div>
                    <img alt="user icon image" />
                    <p> { userfeedback } </p>
                    <p> { username } </p>
                </div>
                
                <div>
                    <img alt="user icon image" />
                    <p> { userfeedback } </p>
                    <p> { username } </p>
                </div>
                
                <div>
                    <img alt="user icon image" />
                    <p> { userfeedback } </p>
                    <p> { username } </p>
                </div>
                
            </div>
        </div>
    )
}
