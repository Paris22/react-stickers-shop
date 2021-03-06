import React from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {FlexTheme} from "../Configs/DirectionTheme.styled";
import {
    UpperHeader
} from "./Header.styled";
import {MarginWrapper} from "../Configs/Global.styled";
import Logo from "../img/Logo.png"
import Image from "mui-image";
import {CART, MAIN} from "../Configs/constant";

const Header = () => {
    return (
        <UpperHeader>
            <FlexTheme>
                <Image src={Logo} height={75} width={75} alt="Logo"/>
                <Button component={Link} to={MAIN}
                        variant="text"
                        size="large"
                >
                    Still Stickers
                </Button>
            </FlexTheme>
            <FlexTheme align='center'>
                <MarginWrapper>
                    <ButtonGroup variant="outlined"
                                 size="small"
                                 aria-label="outlined button group"
                    >
                        <Button>Sort by price</Button>
                        <Button>Sort by name</Button>
                    </ButtonGroup>
                </MarginWrapper>
                <MarginWrapper>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button>USD</Button>
                        <Button>EUR</Button>
                        <Button>CAD</Button>
                    </ButtonGroup>
                </MarginWrapper>
                <Button component={Link} to={CART} variant="text" size="small">Total in cart</Button>
                <MarginWrapper>
                    Total Amount
                </MarginWrapper>
            </FlexTheme>
        </UpperHeader>
    );
};

export default Header;