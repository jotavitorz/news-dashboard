import { useState, useEffect, type FormEvent } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./home.module.css";

interface SourcerProps {
    id: string | null;
    name: string;
}

interface NewsProps {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: SourcerProps;
    title: string;
    url: string;
    urlToImage: string;
}

interface DataProp {
    articles: NewsProps[]; 
}

export function Home() {
    const [news, setNews] = useState<NewsProps[]>([]);
    const [search, setSearch] = useState("");
    const [newsValue, setNewsValue] = useState("tecnologia");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [newsValue])

    function searchNew(event: FormEvent) {
        event.preventDefault();

        if(search === ""){
            return;
        }
        setNewsValue(search);
        setSearch("");
    }

    async function getData() {
        setLoading(true);
        fetch(`https://newsapi.org/v2/everything?q=${newsValue}&sortBy=publishedAt&apiKey=06ba1b61ad96480fbddf16318053492d`)
        .then(response => response.json())
        .then((data: DataProp) => {
            const news = data.articles;

            setNews(news);
            setLoading(false);
            console.log(news);  
        })
    }

    return (
        <main>

            <form onSubmit={searchNew} className={styles.form}>

                <input className={styles.input} type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit">
                    <BsSearch size={30} color="#121212" />
                </button>
                
            </form>   

            {loading ? (
                <h1 className={styles.loading}>Carregando Noticias ...</h1>
            ) : (
                <section className={styles.news}>
                    {news.length > 0 && news.map((item, index) => (

                        <article key={index} className={styles.info_news} onClick={() => window.open(item.url, "_blank")}
                        role="link" tabIndex={0}>

                            <p className={styles.name}>{item.source.name.toLocaleUpperCase()}</p>

                            <img 
                                src={item.urlToImage} 
                                alt={`Imagem da notícia: ${item.title}`} 
                                className={styles.image}
                            />

                            <h2 className={styles.title}>{item.title}</h2>

                            <div className={styles.publication}>
                                <strong>{item.author}</strong>
                                <span>{new Date(item.publishedAt).toLocaleDateString("pt-BR")}</span>
                            </div>
                        </article>   
                    ))}
                </section>  
            )}
        </main>
    )
}
