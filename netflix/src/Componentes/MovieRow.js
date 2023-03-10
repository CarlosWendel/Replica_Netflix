import React,{useState} from "react";
import './MovieRow.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


//const Poster_path ='/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg';
// eslint-disable-next-line import/no-anonymous-default-export
export default({title,items})=>{
    const [scrollX, setscrollX] = useState(-0);
    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerHeight / 2);
        if(x > 0){
            x=0;
            
        }
        setscrollX(x);
    }
    const handleRightArrow = ()=>{
        let x = scrollX - Math.round(window.innerHeight / 2);
        let listW= items.results.length *150;
        if((window.innerWidth - listW) >x){
            x=(window.innerWidth - listW) -60;
        }
        setscrollX(x);
    }
   return (
    <div className="movieRow">
        <h2>{title}</h2>
        <div className="movieRow--left" onClick={handleLeftArrow}>
           <NavigateBeforeIcon style={{fontSize:50}}/>
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
            <NavigateNextIcon style={{fontSize:50}}/>
        </div>

        <div className="movieRow--litarea">
            <div className="movieRow--list" style={{
                marginLeft: scrollX,
                width: items.results.length *150
            }}>
            {items.results.length > 0 && items.results.map((item, key)=>(
                // eslint-disable-next-line jsx-a11y/alt-text
                <div key={key} className="movieRow--item">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}` } alt={item.original_title}/>
                </div>
            ))}
            </div>    
        </div>
    </div>
    );
}