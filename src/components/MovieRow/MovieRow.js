import React, { useState } from 'react';
import './MovieRow.css';

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {

    }

    const handleRightArrow = () => {

    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                 <i class="fas fa-chevron-left" style={{fontSize: 50}}></i>
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <i class="fas fa-chevron-right"  style={{fontSize: 50}}></i>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}