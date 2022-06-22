import "./App.css";
import { useEffect, useState } from "react";
import Search from "./component/search/search.component";
import CardList from "./component/card-list/card-list.component";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b59407378dmshadb62ed97b56668p1b0f73jsn081f6415ca3c",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      options
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredRecipes(filtered);
  }, [searchField, recipes]);

  const handleChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };
  return (
    <div className="App">
      <h1>Tasty Search Recipe</h1>
      <Search placeholderTxt="search recipe..." handleChange={handleChange} />
      <CardList filteredRecipes={filteredRecipes} />
    </div>
  );
};

export default App;

// b59407378dmshadb62ed97b56668p1b0f73jsn081f6415ca3c
