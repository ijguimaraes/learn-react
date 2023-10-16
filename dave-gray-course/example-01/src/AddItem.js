import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <input
                type="text"
                id="addItem"
                placeholder="Add Item"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                ref={inputRef}
            />
            <button
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus/>
            </button>
        </form>
    );
}

export default AddItem;