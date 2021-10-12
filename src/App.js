import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';
import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {

    const loadAll = async () => {
      // pegando a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);

    }

    loadAll();

  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
     window.removeEventListener('scroll', scrollListener);
    }

   }, []);

  return (

    <div className="page">

     <Header black={blackHeader} /> 

    {featuredData && 
      <FeaturedMovie item={featuredData} />
    }


     <section className="lists">
      {movieList.map((item, key) => (
         <MovieRow key={key} title={item.title} items={item.items} />
      ))}
     </section>

     <footer>
       Feito com <span role="img" aria-label="coração">♥</span> por Anna Sganderla <br/>
       Direitos de imagem para Netflix <br/>
       Dados pegos do site <a href="https://www.themoviedb.org/">The Movie Db</a>
     </footer>

     {movieList.length <=  0 &&

     <div class="loading">
       <img src="https://1.bp.blogspot.com/-B9juta27w6o/Xzk4GGrOziI/AAAAAAABtpE/0OMhU_0hPTY7PhayDfL3eJ5mIc2csWWWwCLcBGAsYHQ/s1600/Netflix_LoadTime.gif" alt="carregando" />
     </div>

     }

    </div>
    
  );
}
