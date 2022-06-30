import { useMutation, gql } from "@apollo/client";
import React, { useState } from 'react';

const CREATE_PLAN = gql`
mutation Mutation($input: CreateVinylInput!) {
  createVinyl(input: $input) {
                     _id
                    createdAt
                    updatedAt
                    title
                    subtitle
                    description
                    image
                    imageB
                    referral_url
                    priceEur
                    priceUSD
                    label
                    genre
                    seller
                    author
                    featured
                    slug
  }
}

`;

const VinylInput = () => {
    // const [ featured, setFeatured ] = useState(false);

    const [formState, setFormState] = useState({
        title: "",
        subtitle: "",
        description: "",
        image: "",
        imageB: "",
        referral_url: "",
        priceEur: 0,
        priceUSD: 0,
        label: "",
        genre: "",
        seller: "",
        author: "",
        featured: true,
        slug: "vinyl"
    });

    const [createPlanInput] = useMutation(CREATE_PLAN, {
        variables: {
            input: {
                title: formState.title,
                subtitle: formState.subtitle,
                description: formState.description,
                image: formState.image,
                imageB: formState.imageB,
                referral_url: formState.referral_url,
                priceEur: formState.priceEur,
                priceUSD: formState.priceUSD,
                label: formState.label,
                genre: formState.genre,
                seller: formState.seller,
                author: formState.author,
                featured: formState.featured
            }

        }
    });

    return (
        <div className="container h-full mx-auto px-10 mb-8">
            <form
                className="flex flex-col text-center justify-around"
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
                        type="textaera"
                        value={formState.title}
                        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subtitle">
                        Subtitle
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subtitle"
                        type="textaera"
                        value={formState.subtitle}
                        onChange={(e) => setFormState({ ...formState, subtitle: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"

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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image2
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="url"
                        value={formState.imageB}
                        onChange={(e) => setFormState({ ...formState, imageB: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                        Url vendeur
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="url"
                        type="url"
                        value={formState.referral_url}
                        onChange={(e) => setFormState({ ...formState, referral_url: e.target.value })}
                    />
                    <div className="flex flex-wrap">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            PriceEur €
                        </label>
                        <input
                            className="shadow appearance-none border hover:border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="priceEur"
                            type="number"

                            value={formState.priceEur}
                            onChange={(e) => setFormState({ ...formState, priceEur: parseInt(e.target.value) })}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            PriceUSD $
                        </label>
                        <input
                            className="shadow appearance-none border hover:border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="priceUSD"
                            type="number"

                            value={formState.priceUSD}
                            onChange={(e) => setFormState({ ...formState, priceUSD: parseInt(e.target.value) })}
                        />
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
                        label
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="label"
                        type="text"
                        value={formState.label}
                        onChange={(e) => setFormState({ ...formState, label: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
                        Genre
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="genre"
                        type="text"
                        value={formState.genre}
                        onChange={(e) => setFormState({ ...formState, genre: e.target.value })}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
                        Seller
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="seller"
                        type="text"
                        value={formState.seller}
                        onChange={(e) => setFormState({ ...formState, seller: e.target.value })}
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
                    {/* <label htmlFor="accept"> Visible </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="visible"
                        type="checkbox"
                        checked={formState.featured}
                        onChange={(e) => setFormState({ ...formState, featured: e.target.checked })}
                    /> */}

                </div>
                <div className="mb-4">
                    <button
                        className="transition duration-500 ease transform hover:-translate-xy-1 hover:-translate-x-2 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-1 cursor-pointer text-center py-2"
                        type="submit"
                    >
                        Ajouter un vinyle
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VinylInput;