import React from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {FlexWrapper} from "../Configs/FlexTheme.styled";
import {
    UpperHeader,
    LogoImageWidth
} from "./Header.styled";
import {MarginWrapper} from "../Configs/Global.styled";
import Logo from "../img/logo.png"
import Image from "mui-image";
import {CART, MAIN} from "../Configs/constant";

const Header = () => {
    return (
        <UpperHeader>
            <LogoImageWidth>
                <FlexWrapper
                    align='center'
                    justify='center'
                    direction='row'
                >
                    <Link to={MAIN}>
                        <Image
                            src={Logo}
                            height={75}
                            width={75}
                            alt="Logo"
                        />
                    </Link>
                    <Button
                        component={Link}
                        to={MAIN}
                        variant="text"
                        size="small"
                    >
                        Still Stickers
                    </Button>
                </FlexWrapper>
            </LogoImageWidth>
            <FlexWrapper
                align='center'
                direction='column'
            >
                <MarginWrapper>
                    <ButtonGroup
                        variant="outlined"
                        size="small"
                        aria-label="outlined button group"
                    >
                        <Button>Sort by price</Button>
                        <Button>Sort by name</Button>
                    </ButtonGroup>
                </MarginWrapper>
                <MarginWrapper>
                    <ButtonGroup
                        variant="text"
                        aria-label="text button group"
                    >
                        <Button>USD</Button>
                        <Button>EUR</Button>
                        <Button>CAD</Button>
                    </ButtonGroup>
                </MarginWrapper>
                <Button
                    component={Link}
                    to={CART}
                    variant="text"
                    size="small"
                >
                    Cart
                </Button>
                <MarginWrapper>
                    Total Amount : 1300 р.
                </MarginWrapper>
            </FlexWrapper>
        </UpperHeader>
    );
};

export default Header;