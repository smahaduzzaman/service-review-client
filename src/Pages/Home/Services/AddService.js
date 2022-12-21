import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const AddService = () => {
    const serviceInfos = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const email = user?.email || 'Unregistered User';
        const address = form.address.value;
        const city = form.city.value;
        const state = form.state.value;
        const zip = form.zip.value;
        const service = form.service.value;
        const price = form.price.value;
        const description = form.description.value;
        const photoUrl = form.photoUrl.value;


        const serviceData = {
            name,
            email,
            address,
            city,
            state,
            zip,
            service,
            price,
            description,
            photoUrl
        };

        console.log(serviceData);

        fetch('https://b6a11-service-review-server-side-smahaduzzaman.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service added successfully');
                    form.reset();
                }
                toast.success('Service added successfully');
            })
            .catch(err => {
                console.log(err);
                toast.error('Something went wrong');
            })

    }

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleAddService} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Inormation</p>
                        <p className="text-xs">For adding a servie, you have fill out this form and submit it to the databaase, thank you</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm">First name</label>
                            <input id="firstname" name='firstname' type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="lastname" className="text-sm">Last name</label>
                            <input id="lastname" name='lastname' type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" name='email' type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="address" className="text-sm">Address</label>
                            <input id="address" name='address' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="city" className="text-sm">City</label>
                            <input id="city" name='city' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="state" className="text-sm">State / Province</label>
                            <input id="state" name='state' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="zip" className="text-sm">ZIP / Postal</label>
                            <input id="zip" name='zip' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Please input here your profile information.</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="service" className="text-sm">Service</label>
                            <input id="service" name='service' type="text" placeholder="Service" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="price" className="text-sm">Price</label>
                            <input id="price" name='price' type="number" placeholder="0000" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="description" className="text-sm">Description</label>
                            <textarea id="description" name='description' placeholder="Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label for="photoUrl" className="text-sm">Photo Url</label>
                            <input id="photoUrl" name='photoUrl' type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                    </div>
                    <button type="submit" className="inline-flex text-center  items-center rounded dark:bg-violet-400 dark:text-gray-800 divide-gray-700 px-8 py-3 font-bold">Add Service</button>
                </fieldset>
            </form>
        </section>
    );
};

export default AddService;