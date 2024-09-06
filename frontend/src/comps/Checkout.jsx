import { useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { ShopContext } from '../ShopContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { cart, getCart } = useContext(ShopContext);

    useEffect(() => {
        if (!user) {
            navigate('login');
        }

    }, []);

    useEffect(() => {
        if (cart === false){
            getCart();
        }
    }, [cart])


    return (
        <div className="flex justify-center p-2 md:p-4 min-h-screen">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-4 md:p-6">
                <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">An overview of your order</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/4 md:pr-6">
                        <div className="space-y-4">
                            {[
                                { name: "Laptop", price: "€299.00", img: "https://placehold.co/100x100?text=Recliner+Chair+Steel" },
                                { name: "Gaming Chair", price: "€249.00", img: "https://placehold.co/100x100?text=Gaming+Chair" },
                                { name: "Timber Ride Padded", price: "€59.00", img: "https://placehold.co/100x100?text=Timber+Ride+Padded" },
                                { name: "Isolated Wooden Rock", price: "€165.00", img: "https://placehold.co/100x100?text=Isolated+Wooden+Rock" },
                                { name: "Colored Wooden Chair", price: "€299.00", img: "https://placehold.co/100x100?text=Colored+Wooden+Chair" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="flex items-center border border-gray-300 rounded-lg">
                                            <button className="px-2 py-1">-</button>
                                            <span className="px-4">1</span>
                                            <button className="px-2 py-1">+</button>
                                        </div>
                                        <img src={item.img} alt={item.name} className="w-16 h-16 ml-4 rounded-lg" />
                                        <span className="ml-4 font-medium">{item.name}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium">{item.price}</span>
                                        <button className="ml-4 text-gray-400 hover:text-gray-600">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mt-6 md:mt-0">
                        <h2 className="text-lg md:text-xl font-bold mb-4">Oder details</h2>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>€ 1071.00</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Estimated Tax <i className="fas fa-info-circle"></i></span>
                                <span>€ -</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg mb-4">
                                <span>Total</span>
                                <span>€ 1071.00</span>
                            </div>
                            <button className="w-full bg-black text-white py-2 rounded-md">GO TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;