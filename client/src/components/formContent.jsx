import React, { useState } from "react";


const FormContent = () => {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName: "",
        email: ""
    });

    // This function will handle the submission.
    const onSubmit = async (e) => {
        e.preventDefault();
        const friend = { ...formData };
        try {
        // if the id is present, we will set the URL to /record/:id, otherwise we will set the URL to /record.
        const response = await fetch(`http://localhost:5050/api/v1`, {
            // if the id is present, we will use the PATCH method, otherwise we will use the POST method.
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(friend),
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(`response: `, response)

        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setFormData({
                firstName:"",
                lastName: "",
                email: ""
            });
        }
    }

    return (
        <>
            {/* form */}
            <h3>Stay Connected</h3>
            {/* heading */}
            <p>Get added to our mailing list to stay updated on all the cool stuff our creative family has to offer.</p>
            <form onSubmit={onSubmit}>
               <div className="mb-2">
                    <label>First Name</label>
                    <input name="firstName" value={formData.firstName} onChange={(e) => setFormData({
                        ...formData,
                        firstName: e.target.value
                    })} required />
               </div>

                <div className="mb-2">
                    <label>Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={(e) => setFormData({
                        ...formData,
                        lastName: e.target.value
                    })} required />
                </div>

                <div className="mb-2">
                    <label>Email</label>
                    <input name="email" type="email" value={formData.email} onChange={(e) => setFormData({
                        ...formData,
                        email: e.target.value
                    })} required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormContent;