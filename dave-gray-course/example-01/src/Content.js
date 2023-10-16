import ItemList from "./ItemList";

const Content = ({ items, handleChecked, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items} 
                    handleChecked={handleChecked} 
                    handleDelete={handleDelete}
                />
            ) : ('Your list is empty.')}
        </main>
    );
}

export default Content;
