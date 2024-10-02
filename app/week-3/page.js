import ItemList from "./item-list";


export default function Page(){
    return(
      <main>
          <h1 className="font-bold text-3xl p-4">Shopping List</h1>
          <ItemList></ItemList>
      </main>

        
    );
}