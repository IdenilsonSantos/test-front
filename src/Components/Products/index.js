import React from 'react';

import { connect } from 'react-redux';

import { Products, ProductItem, ProductImage, ProductInfo, ProductDescription, ProductPrice, } from './styles';

import formatMoney from '../../utils/formatMoney';

function ProductData({ data }) {
    return (
        <Products>
            {data.items.map(i => (
                <ProductItem key={i.product.sku}>
                    {i.product.imageObjects.map(image => (
                        <ProductImage src={image.thumbnail} alt={i.product.name} />
                    ))}
                    <ProductInfo>
                        <ProductDescription>{i.product.name}</ProductDescription>
                        <ProductPrice>{formatMoney(i.product.priceSpecification.price)}</ProductPrice>
                    </ProductInfo>
                </ProductItem>
            ))
            }
        </Products>
    )
}

const mapStateTopProps = state => {
    return {
        data: state.data.data
    }
}

export default connect(mapStateTopProps, null)(ProductData);
