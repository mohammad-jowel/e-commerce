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
            getCart()
        }
    }, [cart])

    return (
        <div>Checkout</div>
    )
}

export default Checkout;