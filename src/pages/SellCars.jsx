import React from "react";
import sellCar from "../assets/images/sell-car.png";
import "../styles/SellCars.scss";
import BarChart from "../charts/BarChart";
import trackingdata from '../assets/data/trackingData';
import OfferCard from "../components/UI/OfferCard";

const SellCar = () => {
    const offers = [
        {
            name: "John Doe",
            avePrice: 11605,
            marketPrice: 11244,
            impShare: 45,
            modelSpend1: 1174,
            modelSpend2: 1174,
            perunit: 811
        },
        {
            name: "Killan James",
            avePrice: 11605,
            marketPrice: 11244,
            impShare: 65,
            modelSpend1: 1174,
            modelSpend2: 1174,
            perunit: 811
        }
    ]
    return (
        <div className="sell__car">
            <h2 className="sell__car-title">Sell Cars</h2>
            <div className="sell__car-top">
                <div className="sell__car-img">
                    <h2>2022 Mercedes Benz</h2>
                    <img src={sellCar} alt="" />
                </div>
                <div className="tracking__history">
                    <h3>Tracking History</h3>
                    <BarChart data={trackingdata} />
                </div>
            </div>
            <div className="offer__wrapper">
                <div className="offer__top">
                    <h2 className="sell__car-title">Offers</h2>
                    <div className="filter__widget-1">
                        <select>
                            <option value="toyota">Toyota</option>
                            <option value="bmw">Bmw</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div className="offer__list">

                    {
                        offers.map(offer => (
                            <div className="properties">
                                <OfferCard item={offer} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default SellCar;
