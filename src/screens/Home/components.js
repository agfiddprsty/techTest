import React, { useEffect } from "react";
import { gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/header";
import { getList } from "../../redux/actions/products/productsAction";

const Component = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.listProducts);

  const getListProducts = gql`
    query {
      products(search: "test", pageSize: 10) {
        total_count
        items {
          name
          sku
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
            }
          }
        }
        page_info {
          page_size
          current_page
        }
      }
    }
  `;

  const { loading, data } = useQuery(getListProducts);

useEffect(() => {
  dispatch(getList(data));
}, [data]);

  return (
    <div className="app">
      {loading ? (
				<div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
					<div className="spinner-border" />
				</div>
			) : (
        <div>
          <Header />
          <div className="container d-flex">
            {data.products.items.length > 0 && 
              data.products.items.map(item => (
                <div className="card mr-auto">
                  <div className="card-header">Product</div>
                  <div className="card-body">
                    <p>Name: {item.name}</p>
                    <p>SKU: {item.sku}</p>
                  </div>
                  <div className="card-footer">
                    <span>{item.price_range.minimum_price.regular_price.currency} </span>
                    <span>{item.price_range.minimum_price.regular_price.value}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Component;