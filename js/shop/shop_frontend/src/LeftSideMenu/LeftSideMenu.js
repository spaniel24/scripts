import './LeftSideMenu.css'
import CategoryButton from "./CategoryButton/CattegoryButton";

const LeftSideMenu = ({categories, categoryCallback}) => {

    const renderButtonsArray = () => {
        if (categories) {
            const buttonsTable = [];
            categories.forEach(category=>{
                buttonsTable.push(<CategoryButton key={category.name} categoryName={category.name} categoryCallback={categoryCallback}/>)
            })
            return buttonsTable;
        }
    }

    return (
        <div className="left-side-menu">
            {renderButtonsArray()}
        </div>
    )
}

export default LeftSideMenu;