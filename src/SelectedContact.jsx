import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }){
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        }

        if (selectedContactId) {
            fetchSelectedContact();
        }
    }, [selectedContactId]);

    return (
        <div>
            {contact ? (
                <div>
                    <h1>{contact.name}</h1>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
            ) : ("Loading...")}
        </div>
    );
}

