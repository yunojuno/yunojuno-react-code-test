import React, { Component } from "react";
import logo from "./logo.svg";
import classes from "./App.module.scss";

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

    alphaSorter = (sortMe) =>{
      sortMe.sort((a, b) => {
        //Could a plugin give better coverage to replace nonstandard glyphs?
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
    }

    sorterChangedHandler = (event) => {

      let characters = [...this.state.characters];
      let allCharacters = this.state.cache;
      //Must be a better way of keeping a backup of the full list of characters than running twice the operations ever time?
      const targetSort = event.target.value;
      switch(targetSort){
        case "Alphabetical":{
          this.alphaSorter(characters)
          this.alphaSorter(allCharacters)
          break
        }
        case "Significance":{
          characters.sort((a, b) => a.significanceIndex - b.significanceIndex);
          allCharacters.sort((a, b) => a.significanceIndex - b.significanceIndex);
          break
        }
        case "All":{
          characters = allCharacters
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
        let catsList = ["All"]
        for (let character of this.state.characters ){
          catsList = [...catsList, character.category]
        }
        catsList = [...new Set(catsList)]
        this.setState( {categories: catsList, cache: charcache } )
      }
    }


    render() {
        return (
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    <img src={logo} className={classes.AppLogo} alt="logo" />
                    <h1 className={classes.AppTitle}>
                        Lord of the Rings Character Index
                    </h1>
                </header>

                <section className={classes.AppContent}>

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
