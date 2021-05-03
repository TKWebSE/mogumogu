import React,{ Fragment } from "react";
import styled from "styled-components";
import { DeleteButton } from "../component/MaterialUIButtons";
import foodImage from "../images/food-image.jpg";

const FoodCardWrapper = styled.div`
`;

const FoodImage = styled.img`
    width:60%;
    height:40%;
`;

const FoodName = styled.h1`
    margin-left:5%;
`;

const FoodPrice = styled.h2`
   margin-left:5%;
`;

const FoodDesicription = styled.div`
`;

const FoodCreatedTime = styled.div`
`;

export const FoodDetailCard = (food) => {
    return (
        <Fragment>
            <FoodCardWrapper>
            <FoodImage src={foodImage} alt="foodImage"></FoodImage>
            <FoodName>
                {food.name}
            </FoodName>
            <FoodPrice>
                ￥{food.price}
            </FoodPrice>
                <FoodDesicription>
                    {food.description}
                </FoodDesicription>
                <FoodCreatedTime>
                    {food.created_at}
                </FoodCreatedTime>
                <DeleteButton></DeleteButton>
            </FoodCardWrapper>
        </Fragment>
    )
}