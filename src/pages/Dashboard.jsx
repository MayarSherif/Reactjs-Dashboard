import React from "react";
import "../styles/dashboard.scss";
import SingleCard from "../components/UI/SingleCard";
import BarChart from "../charts/BarChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";
import recommendCarsData from "../assets/data/recommendCars";
import miledata from "../assets/data/mileStatics";

const Dashboard = () => {

    const cards = [
        {
            title: "Energy",
            icon: "ri-flashlight-fill",
            percentage: 45,
            color: '#fff',
        },
        {
            title: "Range",
            icon: "ri-arrow-up-down-line",
            percentage: 157,
            color: '#e1424e',
        },
        {
            title: "Break fluid",
            icon: "ri-drop-fill",
            percentage: 9,
            color: '#725cff',
        },
        {
            title: "Tire wear",
            icon: "ri-flashlight-fill",
            percentage: 25,
            color: '#ef621c',
        }
    ]
    return (
        <div className="dashboard">
            <div className="dashboard__cards">
                {
                    cards.map(card => (
                        <div className="properties">
                            <SingleCard item={card} />
                        </div>
                    ))
                }

            </div>

            <div className="statistics">
                <div className="stats">
                    <h3 className="stats__title">Miles Statistics</h3>
                    <BarChart data={miledata} />
                </div>

                <div className="stats">
                    <h3 className="stats__title">Car Statistics</h3>
                    <CarStatsChart />
                </div>
            </div>

            <div className="recommend__cars">
                {recommendCarsData.map((item) => (
                    <RecommendCarCard item={item} key={item.id} />
                ))}
            </div>

        </div>
    );
};

export default Dashboard;
