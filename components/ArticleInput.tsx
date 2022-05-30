
import { useMutation, gql } from "@apollo/client";
import { title } from "process";
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'



const CREATE_ARTICLE = gql`
mutation Mutation($createArticleInput: CreateArticleInput!) {
  createArticle(createArticleInput: $createArticleInput) {
                
                _id
                    title
                    description
                    subtitle
                    contentA
                    contentB
                    contentC
                    createdAt
                    author
  }
}
`;
const ArticleInput = () => {

    const [formState, setFormState] = useState({
        title: "",
        description: "",
        subtitle: "",
        contentA: "",
        contentB: "",
        contentC: "",
        author: "",
    });

    const [createArticleInput] = useMutation(CREATE_ARTICLE, {

        variables: {
            createArticleInput: {
                title: formState.title,
                description: formState.description,
                subtitle: formState.subtitle,
                contentA: formState.contentA,
                contentB: formState.contentB,
                contentC: formState.contentC,
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
                    createArticleInput();
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
                        placeholder="Title"
                        value={formState.title}
                        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="textarea"
                        placeholder="Description"
                        value={formState.description}
                        onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="Content"
                        value={formState.subtitle}
                        onChange={(e) => setFormState({ ...formState, subtitle: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="Content"
                        value={formState.contentA}
                        onChange={(e) => setFormState({ ...formState, contentA: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="Content"
                        value={formState.contentB}
                        onChange={(e) => setFormState({ ...formState, contentB: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="Content"
                        value={formState.contentC}
                        onChange={(e) => setFormState({ ...formState, contentC: e.target.value })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                        Author
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="author"
                        type="text"
                        placeholder="Author"
                        value={formState.author}
                        onChange={(e) => setFormState({ ...formState, author: e.target.value })}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="transition duration-500 ease transform hover:-translate-xy-1 hover:-translate-x-2 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-1 cursor-pointer text-center py-2"
                        type="submit"
                    >
                        Create Article
                    </button>
                </div>
            </form>
        </div>



    );
};

export default ArticleInput;


