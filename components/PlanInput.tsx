import { useMutation, gql } from "@apollo/client";
import { title } from "process";
import React, { useState } from 'react';

const CREATE_PLAN = gql`
mutation Mutation($createPlanInput: CreatePlanInput!) {
  createPlan(createPlanInput: $createPlanInput) {
    _id
    title
    description
    image
    url
    createdAt
    author
  }
}

`;

const PlanInput = () => {

    const [formState, setFormState] = useState({
        title: "",
        description: "",
        image: "",
        url: "",
        author: "",
    });

    const [createPlanInput] = useMutation(CREATE_PLAN, {
        variables: {
            createPlanInput: {
                title: formState.title,
                description: formState.description,
                image: formState.image,
                url: formState.url,
                author: formState.author,
            }
        }
    });

    return (
        <div>
            <form
                className="flex flex-row flex-wrap text-center justify-around w-min-content"
                onSubmit={(e => {
                    console.log(e, 'event');
                    e.preventDefault();
                    createPlanInput();
                })}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        value={formState.title}
                        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="textarea"
                        value={formState.description}
                        onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="url"
                        value={formState.image}
                        onChange={(e) => setFormState({ ...formState, image: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                        Url
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="url"
                        type="url"
                        value={formState.url}
                        onChange={(e) => setFormState({ ...formState, url: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                        Author
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="author"
                        type="text"
                        value={formState.author}
                        onChange={(e) => setFormState({ ...formState, author: e.target.value })}
                    />
                </div>
                <div className="flex flex-col items-center ">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Create Bon plan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PlanInput;