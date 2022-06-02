
import { useMutation, gql } from "@apollo/client";
import { title } from "process";
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'



const CREATE_ARTICLE = gql`
mutation Mutation($createArticleInput: CreateArticleInput!) {
  createArticle(createArticleInput: $createArticleInput) {
                
    _id
    image
    title
    description
    subtitle
    contentA
    contentB
    contentC
    contentD
    contentE
    contentF
    url
    createdAt
    author
  }
}
`;
const ArticleInput = () => {

    const [formState, setFormState] = useState({
        image: "",
        title: "",
        description: "",
        subtitle: "",
        contentA: "",
        contentB: "",
        contentC: "",
        contentD: "",
        contentE: "",
        contentF: "",
        url: "",
        author: "",
    });

    const [createArticleInput] = useMutation(CREATE_ARTICLE, {

        variables: {
            createArticleInput: {
                image: formState.image,
                title: formState.title,
                description: formState.description,
                subtitle: formState.subtitle,
                contentA: formState.contentA,
                contentB: formState.contentB,
                contentC: formState.contentC,
                contentD: formState.contentD,
                contentE: formState.contentE,
                contentF: formState.contentF,
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
                    createArticleInput();
                })}
            >
                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="text"
                        placeholder="Image"
                        value={formState.image}
                        onChange={(e) => setFormState({ ...formState, image: e.target.value })}
                    />
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
                        subtitle
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
                        ContentA
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="ContentA"
                        value={formState.contentA}
                        onChange={(e) => setFormState({ ...formState, contentA: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        ContentB
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="ContentB"
                        value={formState.contentB}
                        onChange={(e) => setFormState({ ...formState, contentB: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        ContentC
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="ContentC"
                        value={formState.contentC}
                        onChange={(e) => setFormState({ ...formState, contentC: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        ContentD
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="ContentD"
                        value={formState.contentD}
                        onChange={(e) => setFormState({ ...formState, contentD: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        ContentE
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="ContentE"
                        value={formState.contentE}
                        onChange={(e) => setFormState({ ...formState, contentE: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        ContentF
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="ContentF"
                        value={formState.contentF}
                        onChange={(e) => setFormState({ ...formState, contentF: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Url
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="textarea"
                        placeholder="URL"
                        value={formState.url}
                        onChange={(e) => setFormState({ ...formState, url: e.target.value })}
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


