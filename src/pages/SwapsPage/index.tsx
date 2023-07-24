import React, {useEffect, useState} from "react";
import {Order} from "../../types";
import SwapItem from "../../components/SwapItem";

const SwapsPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
        // Your fetch API call will go here
        fetch('https://mystic-swap.herokuapp.com/orders')
            .then((response) => response.json())
            .then((result: any) => {
                const filteredOrders = result.data.filter((item: any) => {
                    return (
                        Object.keys(item).includes("orderWithCounter") &&
                        Array.isArray(item.orderMetadata.assetsMetadata)
                    );
                });
                setOrders(filteredOrders.reverse());
            })
            .catch((error) => {
                // Handle errors here
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {orders.map((order) => {
                return <SwapItem key={order._id} order={order}/>;
            })}
        </div>
    );
};

export default SwapsPage;
