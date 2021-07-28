import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport'    content='width=device-width, initial-scale=1' />
            <meta name='keywords'    content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/WD.png' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'The Winners Daily',
    keywords: 'architecture',
    description: 'Get the latest architecture news',
}

export default Meta
