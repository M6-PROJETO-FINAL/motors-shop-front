import styled from "styled-components";

export const CardProductContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 312px;

    .product-image{
        background-color: var(--grey7);
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 312px;
        height: 170px;
        cursor: pointer;

        :hover{
            border: 1px solid var(--brand1);
        }
    }

    .product-title {
        font-family: 'Lexend', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        cursor: pointer;
    }

    .product-description {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey2);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .div-product-owner {
        display: flex;
        gap: 8px;
        align-items: center;

        .owner-initials{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            background-color: var(--brand1);
            border-radius: 150px;
            cursor: pointer;

            p {
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 0px;
                color: #FFFFFF;
            }
        }

        .owner-name {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #495057;
            cursor: pointer;
        }
    }

    .product-details{
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            gap: 12px;

            span{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 4px 8px;
                gap: 10px;
                height: 32px;
                background: var(--brand4);
                border-radius: 4px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: var(--brand1);
            }
        }

        p {
            font-family: 'Lexend', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: var(--grey1);
        }
    }

    .product-btns-admin {
        display: flex;
        gap: 1rem;
    }
`