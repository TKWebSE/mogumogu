import React, { Fragment } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import foodImage from "../../images/food-image.jpg";
import { changeJSTDate } from "../../AppFunction";

const FoodCardWrapper = styled.div`
    text-align:left;
`;

const FoodImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
`;

const FoodName = styled.h1`
    margin-top:5%;
    margin-bottom:0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const FoodPrice = styled.h2`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const FoodDesicription = styled.div`
    margin-bottom:5%;
    overflow-wrap: break-word;
`;

const FoodCity = styled.div`
    margin-bottom:5%;
    overflow-wrap: break-word;
`;

// const FoodCreatedTime = styled.div`
//     margin-bottom:5%;
// `;

export const FoodDetailCard = (food) => {
    console.log(food)
    return (
        <Fragment>
            <FoodCardWrapper>
                <FoodImage src={food.image} alt="foodImage"></FoodImage>
                <FoodName>
                    {food.name}
                </FoodName>
                <FoodPrice>
                    ￥{food.price}
                </FoodPrice>
                <FoodDesicription>
                    {food.description}
                </FoodDesicription>
                <FoodCity>
                    {food.city}
                </FoodCity>
                {/* <FoodCreatedTime>
                    最終更新日時:{changeJSTDate(food.created_at)}
                </FoodCreatedTime> */}
            </FoodCardWrapper>
        </Fragment>
    )
}
