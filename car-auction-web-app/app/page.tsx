import Listings from "./auctions/Listings";


export default function Home() {
  return (
    <div suppressHydrationWarning={true}>
       <Listings />
    </div>
  );
}
