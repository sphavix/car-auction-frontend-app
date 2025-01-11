import Listings from "./auctions/Listings";


export default function Home() {
  console.log('Server Component: Home');
  return (
    <div>
       <Listings />
    </div>
  );
}
