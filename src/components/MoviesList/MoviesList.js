import React, {Component} from "react";

import './MoviesList.scss'


const CN = 'movie-list';

export class MoviesList extends Component {

  render() {

    const { options,  itemRenderer, genresList, onSelect} = this.props;
    const ItemRenderer = itemRenderer;
    return(
      <div className={CN}>
        {!!options.length && options.map(item => {
          return (

              <ItemRenderer key={item.id} item={item} genresList={genresList} onSelect={onSelect} />

          )
        })}
        {
          !options.length && (
            <div> No Options To Displays</div>
          )
        }
      </div>
    )
  }
}