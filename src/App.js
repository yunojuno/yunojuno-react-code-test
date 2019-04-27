import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import characters from "./fixtures/characters.json";
import FilterSelector from "./components/FilterSelector/FilterSelector"
import CharacterEntry from "./components/CharacterEntry/CharacterEntry"

class App extends Component {

  state = {
    characters
  }


filterChangedHandler = () => {

}

orderChangedHandler = () => {
  
}



    render() {
        let catsList = []
        for (let character of this.state.characters ){
          catsList = [...catsList, character.category]
        }
        const uniqueCategories = [...new Set(catsList)]
        const filters = ["Alphabetical", "Significance"]

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        Lord of the Rings Character Index
                    </h1>
                </header>

                <section className="App-content">

                  <FilterSelector title="Category" click={this.filterChangedHandler} options={uniqueCategories} />
                  <FilterSelector title="Order by" click={this.orderChangedHandler} options={filters} />

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

//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">
//                         Lord of the Rings Character Index
//                     </h1>
//                 </header>
//
//                 <section className="App-content">
//                     {/* Lovely character list goes here */}
//                 </section>
//             </div>
//         );
//     }
// }
//
// export default App;
