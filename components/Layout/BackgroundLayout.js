import Head from "next/head";
import styles from '../../styles/Home.module.css';

const BackgroundLayout = ({ title, desc, children }) => {
    return (
        <div className={styles.home}>
            <Head>
                <title>{title ? title : "TemuRasa"}</title>
                <meta
                    name="description"
                    content={desc ? desc : "TemuRasa: Find Your Taste in Indonesia"}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { children }
        </div>
    )
}

export default BackgroundLayout;