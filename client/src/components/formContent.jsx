import React, { useState } from "react";


const FormContent = () => {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName: "",
        email: ""
    });

    const [successMsg, setSuccessMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    // This function will handle the submission.
    const onSubmit = async (e) => {
        e.preventDefault();
        const friend = { ...formData };
        setLoading(true)
        try {
        // if the id is present, we will set the URL to /record/:id, otherwise we will set the URL to /record.
        const response = await fetch(`https://its-me-dani-b-server.vercel.app/api/v1/`, {
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

        const jsonData = await response.json();

        setSuccessMsg(jsonData.message)
        setLoading(false)

        console.log(`response: `, jsonData)

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
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-800 my-auto">
                <div className="flex flex-col justify-between">
                    <div className="my-auto">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-fuchsia-800">Stay Connected!</h2>
                        <div className="dark:text-gray-600 text-3xl">Get added to our mailing list to stay updated on all the cool stuff our creative family has to offer.</div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="relative">
                    <div className="mb-2">
                            <label className="text-sm text-fuchsia-800 font-bold">First Name</label>
                            <input className="w-full p-3 rounded bg-white" name="firstName" value={formData.firstName} onChange={(e) => setFormData({
                                ...formData,
                                firstName: e.target.value
                            })} required />
                    </div>

                    <div className="mb-2">
                        <label className="text-sm text-fuchsia-800 font-bold">Last Name</label>
                        <input className="w-full p-3 rounded bg-white" name="lastName" value={formData.lastName} onChange={(e) => setFormData({
                            ...formData,
                            lastName: e.target.value
                        })} required />
                    </div>

                    <div className="mb-2">
                        <label className="text-sm text-fuchsia-800 font-bold ">Email</label>
                        <input className="w-full p-3 rounded bg-white" name="email" type="email" value={formData.email} onChange={(e) => setFormData({
                            ...formData,
                            email: e.target.value
                        })} required />
                    </div>

                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded  bg-fuchsia-800 text-gray-50 cursor-pointer ">Submit</button>
                    {loading && (
                        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center bg-fuchsia-800">
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
                                <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
                                <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
                            </div>
                        </div>
                    )}
                    {successMsg && (
                        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
                            <div className="flex shadow-md gap-6 rounded-lg overflow-hidden max-w-[300px] bg-fuchsia-800 text-gray-800 divide-fuchsia-950">
                                <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-600">
                                    <span className="text-2xl text-gray-50 font-bold leading-tight">Thank you!</span>
                                </div>
                                <button className="px-4 flex items-center text-xs uppercase tracking-wide text-gray-50 border-l border-l-fuchsia-950 cursor-pointer bg-fuchsia-950" onClick={() => setSuccessMsg(null)}>Dismiss</button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default FormContent;