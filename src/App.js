import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  vcalue={this.state.query}
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={(e) => {
                    this.setState({
                      query: e.target.value.toLocaleLowerCase(),
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesFromServer} query={query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
