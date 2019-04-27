import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import characters from "./fixtures/characters.json";
import FilterSelector from "./components/FilterSelector/FilterSelector"
import CharacterEntry from "./components/CharacterEntry/CharacterEntry"

class App extends Component {

    state = {
      characters,
      cache: {},
      touched: false,
      categories: [],
      filters: ["Significance", "Alphabetical"]
    }

    sorterChangedHandler = (event) => {

      let characters = [...this.state.characters];
      const targetSort = event.target.value;
      switch(targetSort){
        case "Alphabetical":{
          characters.sort((a, b) => {
            const nameA = a.name.toUpperCase().replace("É", "E");
            const nameB = b.name.toUpperCase().replace("É", "E");
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
          break
        }
        case "Significance":{
          characters.sort((a, b) => a.significanceIndex - b.significanceIndex);
          break
        }
        default:{
          characters = this.state.cache.filter(obj => obj.category === targetSort)
          break
        }
      }
      this.setState( {characters: characters, touched: true})
    }

    componentWillMount(){
      if (this.state.touched === false){
        const charcache = this.state.characters;
        let catsList = []
        for (let character of this.state.characters ){
          catsList = [...catsList, character.category]
        }
        catsList = [...new Set(catsList)]
        this.setState( {categories: catsList, cache: charcache } )
      }
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        Lord of the Rings Character Index
                    </h1>
                </header>

                <section className="App-content">

                  <FilterSelector
                  title="Category"
                  changed={this.sorterChangedHandler}
                  options={this.state.categories} />

                  <FilterSelector
                  title="Order by"
                  changed={this.sorterChangedHandler}
                  options={this.state.filters} />

                  {this.state.characters.map(character => {
                    return <CharacterEntry
                      name={character.name}
                      category={character.category}
                      description={character.description}
                      significanceIndex={character.significanceIndex}
                      key={character.significanceIndex}
                      avatar={character.avatar}
                    />
                  })}
                </section>
            </div>
        );
    }
}

export default App;
