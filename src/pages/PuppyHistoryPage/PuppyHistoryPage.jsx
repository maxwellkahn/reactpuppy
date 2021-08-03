import * as usersService from "../../utilities/users-service";
import PuppyList from "../../components/PuppyList/PuppyList";

export default function PuppiesHistoryPage({puppy, handleDeletePuppy}) {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }
  return (
    <>
      <h1>PuppiesHistoryPage</h1>
      <PuppyList puppys={puppy} handleDeletePuppy={handleDeletePuppy}/>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
