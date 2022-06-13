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


    return (
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

    );
}
export default DetailArticle;
