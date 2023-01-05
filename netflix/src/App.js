import React,{useEffect,useState} from "react";
import './App.css'
import Tmdb from "./Tmdb";
import MovieRow from "./Componentes/MovieRow";
import FeaturedMovie from "./Componentes/FeaturedMovie";
import Header from "./Componentes/Header";


// eslint-disable-next-line import/no-anonymous-default-export
export default()=>{

  const[movieList, setMovieList]= useState([]);
  const[featuredData,setFeaturedData]= useState(null);
  const[blackHeader,setBlackHeader]= useState(false);
  useEffect(()=>{
      const loadall = async()=>{
        //Pegando a lista TOTAL
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        //Pegando o Featured
        let originals = list.filter(i=>i.slug==='originais');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
        let chosen = originals[0].items.results[randomChosen];

        let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');

        setFeaturedData(chosenInfo);
      }
      loadall();
  },[])

  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY >10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }

    }
      window.addEventListener('scroll', scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  },[])
   
  return <div className="page">
    <Header black={blackHeader}/>
    {
      featuredData &&
      <FeaturedMovie item={featuredData} />
    }
    <section className="listas">
      {movieList.map((item,key)=>(
        <div>
        <MovieRow key={key} title={item.title} items={item.items}/>
       </div>
      ))}
    </section>
    <footer>
      Freito com <span role="img" arial-label='coracão'> amor pelo Carlos Wendel </span>
      Direitos de imagens para a Netflix<br/>
      Dados pegos do Site TheMovietmdb.org
    </footer>
    
    {movieList.length <=0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando"/>
      </div>
    }
  </div>

}