import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };

        // Sending the product as an action to the REDUX store
        dispatch(addToBasket(product))
    };

    const removeItemFromBasket = () => {
        // Remove item from redux
        // Sending the product as an action to the REDUX store
        dispatch(removeFromBasket({ id }))
    };

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} style={{ objectFit: "contain" }} />
            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="GBP" />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img className="w-12" loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuL2TSBc2PL_Z-1rjoRC9KTNeVUeS-eHz5R-8MlNFFw&s" alt="" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
            {/* Right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">Add to Basket</button>
                <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct