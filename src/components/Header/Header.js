import React, {Component} from "react";
import ImageLogo from '../../assets/logo.png';
import {connect} from "react-redux";
import {searchByTitle} from "../../actions/movies.action";
import {Form} from "../Form/Form";
import './Header.scss'

const CN = 'header';
export class HeaderComponent extends Component{

  renderFormPanel = () => {
    const {actions: {searchByTitle}} = this.props;
    return (
      <div className="sorting-options d-flex justify-items-center align-items-center">
        <Form
          onSortingChange={searchByTitle}
        />
      </div>

    )
  };


  render(){
    return(
      <div className={`${CN} container`}>
        <div className='img-logo'>
          <img src={ImageLogo} alt="logo"/>
        </div>
        <div className='d-flex w-50 justify-content-between'>
          {this.renderFormPanel()}
          <div className='user-info'>
            <div className='img-avatar'>
              <img src="https://i0.wp.com/slovami.net/wp-content/uploads/2018/04/1-36-1024x1024.jpg" alt="avatar"/>
            </div>
            <p>Surname Name</p>
          </div>
        </div>

      </div>

    )
  }
};

const mapStateToProps = (state) => {
  // console.log('state', state);
  const {movies} = state;
  return ({
    moviesConfig: movies
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      searchByTitle: (searchTitle) => dispatch(searchByTitle(searchTitle)),
    }
  }
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);