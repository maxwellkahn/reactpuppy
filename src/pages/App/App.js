import { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import * as puppyAPI from '../../utilities/puppys-api';
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import PuppyHistoryPage from "../PuppyHistoryPage/PuppyHistoryPage";
import PuppyDetailPage from "../PuppyDetailPage/PuppyDetailPage";
import EditPuppyPage from "../EditPuppyPage/EditPuppyPage";

function App() {
  const [user, setUser] = useState(getUser());
  const [puppy, setPuppy] = useState([]);
  const history = useHistory();

  useEffect(() => {
    history.push('/puppies')
  }, [puppy, history])

  async function handleAddPuppy(newPuppyInfo) {
    const newPuppy = await puppyAPI.create(newPuppyInfo);
    setPuppy([...puppy, newPuppy]);
  }

  async function handleUpdatePuppy(updatedPuppyInfo) {
    const updatedPuppy = await puppyAPI.update(updatedPuppyInfo);
    const newPuppysArray = puppy.map(p => 
      p._id === updatedPuppy._id ? updatedPuppy: p
      )
      setPuppy(newPuppysArray)
  }

  async function handleDeletePuppy(id) {
    await puppyAPI.deleteOne(id);
    setPuppy(puppy.filter(puppy => puppy._id !== id));
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/puppies/new">
              <NewPuppyPage handleAddPuppy={handleAddPuppy}/>
            </Route>
            <Route exact path="/puppies">
              <PuppyHistoryPage puppy={puppy} setPuppy={setPuppy} handleDeletePuppy={handleDeletePuppy} />
            </Route>
            <Route exact path="/details">
              <PuppyDetailPage handleUpdatePuppy={handleUpdatePuppy}/>
            </Route>
            <Route exact path="/edit">
              <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy}/>
            </Route>
            <Redirect to="/puppies" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
