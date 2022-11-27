import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const OfferCard = (props) => {
    const { name, avePrice, marketPrice, impShare, 
        modelSpend1, modelSpend2, perunit } = props.item;
    return (
        <div className="offer__item">
            <div className="box__1">
                <h3 className="client__name">{name}</h3>
                <h6 className="avg__price">
                    ${avePrice} <span>average price</span>
                </h6>
                <h6 className="market__price">Market average is ${marketPrice}</h6>
                <span className="arrow__key">
                    <i class="ri-arrow-right-line"></i>
                </span>
            </div>
            <div className="circle__item">
                <div className="box__2">
                    <CircularProgressbar
                        value={impShare}
                        text={`${impShare}%`}
                        styles={buildStyles({
                            pathColor: "#01d293",
                            textColor: "#fff",
                            trailColor: "#0b0c28",
                            textSize: "18px",
                        })}
                    />
                </div>
                <h4>Impression Share</h4>
            </div>
            <div className="box__3">
                <span className="model__spend-icon">
                    <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">${modelSpend1}</h6>
                <p className="spend__title">Model Spend</p>
            </div>
            <div className="box__4">
                <span className="model__spend-icon">
                    <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">${modelSpend2}</h6>
                <p className="spend__title">Model Spend</p>
            </div>
            <div className="box__5">
                <span className="model__spend-icon">
                    <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">${perunit}</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
            </div>
        </div>);
};
export default OfferCard;
