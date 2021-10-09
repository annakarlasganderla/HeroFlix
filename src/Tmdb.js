const API_KEY = 'e4d032412d5d9b73fbd0b41d764d3ccb';

const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {

    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Em alta',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'marvel-series',
                title: 'Séries originais da marvel',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'dc-universe-series',
                title: 'Séries originais da Dc',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'marvel-movies',
                title: 'Filmes da marvel',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }


}

