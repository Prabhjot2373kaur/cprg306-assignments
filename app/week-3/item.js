export default function Item({name, quantity, category}){
    return (
        <div>
            <section>
                <h2 className="font-bold bg-gray-200 text-black p-2 w-1/3">{name}</h2>
                <p className="bg-gray-200 text-black p-2 mb-6 w-1/3">Buy {quantity} in {category}</p>
            </section>
        </div>
    );
}