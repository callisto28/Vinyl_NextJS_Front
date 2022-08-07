/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { log } from 'console';
import React, { useEffect, useState } from 'react';

import { CardVinyl } from './CardPlan';

const Filter = ({ dataFilter }) => {
    

    const [filter, setFilter] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        setFilter(dataFilter);
    }
        , [dataFilter]);

    const handleSubmit = (e) => {
        let value = e.target.value;
        value.length >= 2 && setSearchFilter(value);
    }

    return (
        <>
            <div>
                <h4>Rechercher par titre d&apos;album, artiste, genre</h4>
                <form className='flex ' autoComplete='on'>
                    <input type="text"
                        name='searchBar'
                        className="focus:ring-2 focus:ring-green-400 rounded-4 p-3 flex-1"
                        placeholder="Rechercher un vinyl..."
                        value={searchFilter}
                        onChange={handleSubmit}
                    />
                    <br />
                </form>

            </div>
            {dataFilter && dataFilter.filter((plan: any) => {
                console.log(plan, 'plan');
                
                if (searchFilter === '') {
                    <div key={plan._id}>
                        <div className='flex flex-row justify-center items-center m-2'>
                            <h1 className='text-xl font-bold px-4 text-black'>{new Date(parseInt(plan.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</h1>
                            <img src="./headphone-front-color.png" width={30} height={30} />
                        </div>

                        <CardVinyl keyCardPl={plan._id}
                            linkPL={`/plan/${plan._id}`}
                            linkTitlePL={`/plan/${plan._id}`}
                            artistCardPL={plan.artiste}
                            imgCardPL={(plan.image != "") ? (plan.image) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                            img2CardPL={(plan.imageB != "") ? (plan.imageB) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                            texteCardPL={plan.subtitle}
                            priceCardPLEUR={(plan.priceUSD === 0) ? (`${plan.priceEur}  €`) : (plan.priceUSD + '  $')}
                            titleCardPL={plan.title}
                            promoCardPl={plan.promo}
                            authorCardPL={plan.author}
                            dateCardPL={plan.createdAt}
                            releaseCardPL={plan.release}
                        />
                    </div>
                } else {
                    if (plan.title.match(searchFilter) || plan.genre.match(searchFilter) || plan.artiste.match(searchFilter)) {
                        <div key={plan._id}>
                            <div className='flex flex-row justify-center items-center m-2'>
                                <h1 className='text-xl font-bold px-4 text-black'>{new Date(parseInt(plan.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</h1>
                                <img src="./headphone-front-color.png" width={30} height={30} />
                            </div>

                            <CardVinyl keyCardPl={plan._id}
                                linkPL={`/plan/${plan._id}`}
                                linkTitlePL={`/plan/${plan._id}`}
                                artistCardPL={plan.artiste}
                                imgCardPL={(plan.image != "") ? (plan.image) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                img2CardPL={(plan.imageB != "") ? (plan.imageB) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                texteCardPL={plan.subtitle}
                                priceCardPLEUR={(plan.priceUSD === 0) ? (`${plan.priceEur}  €`) : (plan.priceUSD + '  $')}
                                titleCardPL={plan.title}
                                promoCardPl={plan.promo}
                                authorCardPL={plan.author}
                                dateCardPL={plan.createdAt}
                                releaseCardPL={plan.release}
                            />
                        </div>
                    }
                }
            })}
        </>

    );

};

export default Filter;