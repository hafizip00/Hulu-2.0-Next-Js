import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../Utils/requests'

const index = ({ result }) => {
    console.log(result[0])
    return (
        <div>
            <Head>
                <title>The Hulu 2.0</title>
            </Head>
            <Header />
            <Nav />
            <Results results={result} />
        </div>
    )
}

export default index


export async function getServerSideProps(context) {
    const genre = context.query.genre
    console.log(genre)
    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchAction.url}`).
        then((res) => res.json())

    return {
        props: {
            result: request.results
        }
    }
}