import { Link } from 'react-router-dom';

export default function PuppyListItem({ puppyItem, handleDeletePuppy }) {
    return (
        <>
        {puppyItem.name}
        {puppyItem.breed}
        {puppyItem.age}
        <Link to={{
            pathname: '/details',
            state: {puppyItem}
        }}>Details Shmetails</Link>
        <Link to={{
            pathname: '/edit',
            state: {puppyItem}
        }}>Edit the dog</Link>
        <button onClick={() => handleDeletePuppy(puppyItem._id)}>Adopt</button>
        </>
    )
}