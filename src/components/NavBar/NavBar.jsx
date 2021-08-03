import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return <nav>
        <Link to="/Puppies">Puppy History</Link>
        &nbsp; &nbsp;
        <Link to="/Puppies/new">New Puppy</Link>
        &nbsp; &nbsp;
        <span>welcome, {user.name}</span>
        &nbsp; &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>;
}
