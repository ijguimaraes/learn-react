import { FaTrashAlt } from "react-icons/fa"

const LineItem = ({item, handleChecked, handleDelete}) => {
    return (
        <li className="item">
            <input 
                type="checkbox" 
                checked={item.checked} 
                onChange={() => handleChecked(item.id)} 
            />
            <label 
                style={item.checked ? {
                    textDecoration: 'line-through'
                } : null} 
                onDoubleClick={() => handleChecked(item.id)}
            >{item.item}</label>
            <FaTrashAlt 
                onClick={() => handleDelete(item.id)} 
                role="button" 
                tabIndex="0" 
            />
        </li>
    );
}

export default LineItem;
