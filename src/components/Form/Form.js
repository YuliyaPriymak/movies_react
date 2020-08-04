import React, {Component, createRef} from "react";

export class Form extends Component{

  onInputChange = (e) => {
    console.log(e.target.value);
  };

  valueRef = createRef();

  onSubmit = (e) => {
    const {onSortingChange} = this.props;
    e.preventDefault();
    onSortingChange(this.valueRef.current.value);
    this.valueRef.current.value = '';
  };
  render() {
    return(
      <form className='' onSubmit={this.onSubmit}>
        <div className='input-group mx-sm-3 mb-2'>
          <input
            className='form-control'
            ref={this.valueRef}
            type="text"
            placeholder={'enter movie title'}
            onChange={this.onInputChange}
            defaultValue=""
          />
          <button className='btn btn-outline-secondary' type='submit'>search</button>
        </div>
      </form>
    )
  }

}