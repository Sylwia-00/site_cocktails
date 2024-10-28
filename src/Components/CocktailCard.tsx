import React {useState} from "react";

interface cocktailsProps{
    name: string;
    image: string;
    ingredients: string;
    isFavorite:boolean;
    addedToCart: boolean;
}

interface CocktailCard{
    cocktails: cocktailsProps;
}


function CocktailCard(props)
 {
    const [isFavorite, setIsFavorite] = useSate(isFavorite);

    function handleClickFavorite () {
        setIsFavorite(!isFavorite);
    }

    return (
        <>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name}/>
        <p>{props.ingredients}</p>
        <button type="button" onClick={handleClickFavorite}>
            {isFavorite ? "❤️" : "🖤"}
        </button>
        <button type="button" onClick={handleClickFavorite}>
            
        </>
    )

}


export default CocktailCard;
