import React from 'react';
import Card from "../Cards/Card";
import Image from "mui-image";
import {Input} from "@mui/material";
import {MarginWrapper, PaddingWrapper} from "../Configs/Global.styled";
import {FlexWrapper} from "../Configs/FlexTheme.styled";
import {Grid} from "@mui/material";
import Search from "../img/search.svg"

let N = 18;

const MainPage = () => {
    return (
        <FlexWrapper grow = '1'>
            <MarginWrapper>
                <h1>Все товары</h1>
                <PaddingWrapper>
                    <FlexWrapper align="center">
                        <Image
                            src={Search}
                            height={25}
                            width={25}
                            alt="SearchButton"/>
                        <MarginWrapper>
                            <Input placeholder="Поиск..."/>
                        </MarginWrapper>
                    </FlexWrapper>
                </PaddingWrapper>
                <Grid
                    container spacing={{xs: 2, md: 3}}
                    columns={{xs: 4, sm: 8, md: 12}}
                >
                    {Array.from(Array(N)).map((_, i) => (
                        <Card index = {i}/>
                    ))}
                </Grid>
            </MarginWrapper>
        </FlexWrapper>
    );
};

export default MainPage;