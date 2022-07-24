import React, {useState} from 'react';
import Image from "mui-image";
import Button from "@mui/material/Button";
import {FlexWrapper, FlexWrapperCard, FlexWrapperDirection} from "../Configs/FlexTheme.styled";
import {CardWrapper} from "./Card.styled";
import {SpanText} from "../Configs/Global.styled";
import {Grid} from "@mui/material";

const Card = ({index}) => {

    const [productAmount, setProductAmount] = useState(0)

    const addProduct = () => {
        setProductAmount(productAmount + 1)
    }

    return (
        <Grid item
              xs={2}
              sm={2}
              md={2}
              key={index}
        >
            <CardWrapper>
                <FlexWrapper
                    justify='center'
                    align='center'
                >
                    <Image
                        src=""
                        height={100}
                        width={100}
                        alt="Card-Image"
                    />
                </FlexWrapper>
                <SpanText>ProductName</SpanText>
                <FlexWrapperDirection
                    justify="space-between"
                    direction='column'
                >
                    <FlexWrapper>
                        <FlexWrapperCard direction='column'>
                            <SpanText>Цена: 499р.</SpanText>
                            <SpanText>Кол-во: {productAmount}</SpanText>
                        </FlexWrapperCard>
                    </FlexWrapper>
                    <FlexWrapper align='flex-end' justify='center'>
                            <Button
                                variant="outlined"
                                size="small"
                                onClick={addProduct}
                            >
                                Добавить
                            </Button>
                    </FlexWrapper>
                </FlexWrapperDirection>
            </CardWrapper>
        </Grid>
    );
};

export default Card;