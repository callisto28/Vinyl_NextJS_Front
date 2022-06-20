import { gql } from '@apollo/client';
import client from '../../apollo-client';
import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
        query Article {
                Article  {
                    _id
                    title
                    image
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
                }`,
    });
    const paths = data.Article.map((article: any) => {

        return {
            params: { id: article._id.toString() },
        }

    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const { data } = await client.query({
        query: gql`
    query Query($articleId: ID!) {
                    article(id: $articleId) {
                        _id
                        title
                        image
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
}`,
        variables: {
            articleId: id
        }
    });

    return {

        props: {
            article: data.article,
        },
    }
}

function strUcFirst(a) { return (a + '.').charAt(0).toUpperCase() + a.substr(1); }
function strUcReturn(a) { return (a + '.').charAt(0).includes('\n') + a.substr(1); }


const DetailArticle = ({ article }) => {


    /* return (
         <div className="flex justify-center ">
             <div className="flex flex-col w-4/6 h-autotext-white bg-white bg-opacity-50 rounded-lg p-6 pb-10 mb-8 shadow-[inset_-0_-15px_30px_-5px_#FEF08A]">
                 <h1 className="lg:text-2xl sm:text-xl text-center font-bold  border-2 border-yellow-500 rounded-lg">{article.title}</h1>
                 <p className="lg:text-xl sm:text-base justify-center pb-2">{strUcFirst(article.description)}</p>
                 <h2 className="lg:text-2xl sm:text-lg border-2 border-yellow-500 rounded-lg pb-2">{article.subtitle}</h2>
                 <p className="lg:text-xl sm:text-sm pb-4 pt-2">{article.contentA}</p>
                 <p className="lg:text-xl sm:text-sm pb-4">{(article.contentB)}</p>
                 <p className="lg:text-xl sm:text-sm pb-4">{article.contentC}</p>
                 <p className="lg:text-xl sm:text-sm pb-4">{article.contentD}</p>
                 <p className="lg:text-xl sm:text-sm pb-4">{article.contentE}</p>
                 <p className="lg:text-xl sm:text-sm pb-4">{article.contentF}</p>
                 <a href={article.url} className="lg:text-xl sm:text-sm pb-4" >Lien</a>
                 <p className="lg:text-xl sm:text-sm">Propulsé par : <span className='text-orange-400'>{article.author}</span></p>
                 <p className="lg:text-xl sm:text-sm">{new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
             </div>
         </div>
 
     );*/
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-12">
                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">ARTICLE</span>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{article.title}</h2>
                        <p className="leading-relaxed mb-8">{article.subtitle}.</p>
                        <div className='flex justify-center  mb-8'>
                            <img alt="blog" src={(article.image != '') ? (article.image) : ('https://www.abondance.com/wp-content/uploads/2015/08/actualite-logo-300x262.jpg')} className="lg:w-1/2 w-full lg:h-auto h-64 object-contain rounded" />
                        </div>
                        <p className="leading-relaxed mb-8">{article.description}.</p>



                        <a className="text-blue-500 inline-flex items-center">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>

                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            {new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>

                        <a className="inline-flex items-center">
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Auteur :</span>
                                <span className="text-gray-400 text-xs tracking-widest mt-0.5">{article.author}</span>
                            </span>
                        </a>
                    </div>
                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">Dans le détail</span>
                        <p className="leading-relaxed mb-8">{article.contentA}.</p>
                        <p className="leading-relaxed mb-8">{article.contentB}.</p>
                        <p className="leading-relaxed mb-8">{article.contentC}.</p>
                        <p className="leading-relaxed mb-8">{article.contentD}.</p>
                        <p className="leading-relaxed mb-8">{article.contentE}.</p>
                        <p className="leading-relaxed mb-8">{article.contentF}.</p>
                        <a href={article.url}>Consulter</a>


                    </div>

                </div>
            </div>
        </section>
    );
}
export default DetailArticle;
