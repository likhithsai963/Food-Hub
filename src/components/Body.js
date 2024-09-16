import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestraunts] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const {setUserName,loggedInUser} = useContext(UserContext)

    const VegRestaurantCard = withVegLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setListOfRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1> Looks like You're offline!! Please check your internet connection</h1>
    }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 rounded-lg">
                    <input data-testid="searchInput" type="text" className=" border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurant(filteredRestaurants)
                    }}>Search</button>

                </div>
                <div className="search m-4 p-4 flex items-center ">
                    <button className="filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) =>
                            res?.info.avgRating > 4);
                        setListOfRestraunts(filteredRestaurants)
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="search m-4 p-4 flex items-center ">
                    <label>User Name :</label>
                    <input className=" border border-black px-2" onChange={(e)=> setUserName(e.target.value)} value={loggedInUser}></input>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                        {
                            restaurant?.info?.veg  ? <VegRestaurantCard resData={restaurant?.info} /> : <RestaurantCard resData={restaurant?.info} />
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;