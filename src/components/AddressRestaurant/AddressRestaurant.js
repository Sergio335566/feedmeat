import React from 'react';
import './style.sass'

const AddressRestaurant = (props) => {

    const distance = (lat1, lon1, lat2, lon2, unit) => {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            let radlat1 = Math.PI * lat1 / 180;
            let radlat2 = Math.PI * lat2 / 180;
            let theta = lon1 - lon2;
            let radtheta = Math.PI * theta / 180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit === "K") { dist = dist * 1.609344 }
            if (unit === "N") { dist = dist * 0.8684 }
            return dist.toFixed(2);
        }
    }

    return (
        <div className="coordinates js-address-restaurant">
            <div className="coordinates-address">
                {props.currentRestaurant.street} <br />
                {props.currentRestaurant.city} - {props.currentRestaurant.postalCode}
            </div>
            <div className="coordinates-distance">
                {`${distance(props.currentRestaurant.latitude, props.currentRestaurant.longitude, props.userPosition.latitude, props.userPosition.longitude, "K")} km`}
            </div>
        </div>
    )
}
export default AddressRestaurant;

