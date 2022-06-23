import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql`
mutation Mutation($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    _id
    email
    role
  }
}
`;

const Signup = () => {



    const [data, setData] = useState({
        email: '',
        password: '',
        role: 'admin'
    });

    const [createUserInput] = useMutation(CREATE_USER, {
        variables: {
            createUserInput: {
                email: data.email,
                password: data.password,
                role: data.role,
            }
        }
    });


    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>ENREGISTREMEMT</h1>
            <form
                className="flex lg:flex-col lg:text-center lg:justify-around p-2 sm:flex-wrap sm:text-center sm:justify-around"
                onSubmit={(e => {
                    console.log(e, 'event');

                    e.preventDefault();
                    createUserInput();
                })}
            >
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="email">email</label>
                    <input className="w-full p-2 mb-6 text-indigo-700 border-2 border-indigo-500 outline-none focus:bg-gray-300"
                        type="email"
                        placeholder="Enter email"
                        required
                        value={data.email}
                        onChange={(e: any) => setData({ ...data, email: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                    <input className="w-full p-2 mb-6 text-indigo-700 border-2 border-indigo-500 outline-none focus:bg-gray-300"
                        type="password"
                        placeholder="Password"
                        required
                        value={data.password}
                        onChange={(e: any) => setData({ ...data, password: e.target.value })}
                    />
                </div>

                <div>
                    <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                        type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Signup;