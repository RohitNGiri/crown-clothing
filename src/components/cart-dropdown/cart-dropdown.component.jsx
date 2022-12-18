import React from "react";

import CustomButton from '../custom-button/custom-buttom.components';
import './cart-dropdown.styles.scss';

const upperCase = 'Go To Checkout';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>{upperCase.toUpperCase()}</CustomButton>

    </div>
)


export default CartDropdown;