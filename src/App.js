import './App.css';
import ListOfGifts from './Components/ListOfGifts';
import { Link, Route, useLocation } from "wouter";

function App() {
  const [setlocation] = useLocation();
  function redirect() {
    let q = document.getElementById("buscar").value;
    let url = `/gift/${q}/`;
    if (q === '')
      setlocation(`/`);
    else
      setlocation(url);
  }

  return (
    <div className="App">
      <section className="App-content">
        <div className="input" >
          <form onSubmit={redirect}>
            <input type="text" className="input-text" placeholder="Buscar..." id="buscar" ></input>
            <button type="submit" className="button">
              <span className="button-text">Buscar</span>
              <span className="button-icon"><i className="fa fa-search" aria-hidden="true"></i></span>
            </button>
          </form>
        </div>

        <Link to="/gift/iu singer">Gifts IU Singer</Link>
        <Link to="/gift/Yoona">Gifts Yoona</Link>
        {/* <a href="/gift/iu singer/20">Gifts IU</a> */}
        <Route
          component={ListOfGifts}
          path="/gift/:keyword" />
        {/* path="/gift/:keyword/:limit" /> */}
        {/* <ListOfGifts keyword={keyword} limit={limit} ></ListOfGifts> */}
      </section>
    </div >
  );
}

export default App;
