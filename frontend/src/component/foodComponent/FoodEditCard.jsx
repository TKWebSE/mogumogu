import React,{ Fragment,useContext } from "react";
import styled from "styled-components";
import foodImage from "../../images/food-image.jpg";
import {MaterialUIFoodDescriptionMultiLine} from "../foodComponent/MaterialUIFoodDescriptionMultiLine";
import {MaterialUIFoodPriceLine} from "../foodComponent/MaterialUIFoodPriceLine";
import {MaterialUISetFoodNameLine} from "../foodComponent/MaterialUISetFoodNameLine";

const FoodCardWrapper = styled.div`
    text-align:center;
`;

const FoodImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
`;

const FoodName = styled.h1`
    text-align:left;
    margin-left:5%;
    margin-right:5%;
`;

const FoodPrice = styled.h2`
   text-align:left;
   margin-left:5%;
   margin-right:5%;
`;

const FoodDesicription = styled.div`
    text-align:left;
    margin-left:5%;
    margin-right:5%;
`;



//foodの編集画面用のカードコンポーネント
export const FoodEditCard = () => {

    return (
        <Fragment>
        <FoodCardWrapper>
            <FoodImage src={foodImage} alt="foodImage"></FoodImage>
            <FoodName>
                <MaterialUISetFoodNameLine></MaterialUISetFoodNameLine>
            </FoodName>
            <FoodPrice>
                <MaterialUIFoodPriceLine></MaterialUIFoodPriceLine>
            </FoodPrice>
            <FoodDesicription>
                <MaterialUIFoodDescriptionMultiLine></MaterialUIFoodDescriptionMultiLine>
            </FoodDesicription>
        </FoodCardWrapper>
        </Fragment>
    )
}