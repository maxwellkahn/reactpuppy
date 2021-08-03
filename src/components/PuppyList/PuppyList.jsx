import PuppyListItem from "../PuppyListItem/PuppyListItem";

export default function PuppyList({ puppys, handleDeletePuppy }) {
  return (
    <main>
      {puppys.map((puppy) => {
        return <PuppyListItem key={puppy._id} puppyItem={puppy} handleDeletePuppy={handleDeletePuppy} />;
      })}
    </main>
  );
}
