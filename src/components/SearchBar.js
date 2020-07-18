import React from 'react';
//bra att kunna med Forms i react
class SearchBar extends React.Component {
  state = { term: '' };
  //notera de 2 olika sätten med events. En i onFormSubmit, och en i input onChange, inline mot callback
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
