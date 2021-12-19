import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div style={{ margin: 10, padding: 5}}>
            <MenuItem >
                <IconButton aria-label="cart"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <Badge badgeContent={0} color="success">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </MenuItem>
        </div>
    )
}
export default CartWidget
