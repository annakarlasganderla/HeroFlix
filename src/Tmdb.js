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
                slug: 'marvel-movies',
                title: 'Marvel',
                items: await basicFetch(`/discover/movie?with_keywords=180547&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'dc-movie',
                title: 'Dc',
                items: await basicFetch(`/discover/movie?with_keywords=849&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'marvel-series',
                title: 'Séries da Marvel',
                items: await basicFetch(`/discover/tv?with_keywords=180547&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'dc-series',
                title: 'Séries da Dc',
                items: await basicFetch(`/discover/tv?with_keywords=849&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comic-series',
                title: 'Séries baseadas nos quadrinhos',
                items: await basicFetch(`/discover/tv?with_keywords=9717&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comic-movies',
                title: 'Filmes baseados nos quadrinhos',
                items: await basicFetch(`/discover/movie?with_keywords=9717&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'originals',
                title: 'Em alta',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {

        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                default:
                    info = null;
                break;
            }
        }

        return info;
    }


}

