import React from "react";
import {MdEditNote} from "react-icons/md";
import {MdDeleteOutline} from "react-icons/md";
import {MdShare} from "react-icons/md";
import {TbMessageCircle} from "react-icons/tb";
import "./Allplan.css";
import { useSelector } from "react-redux";
import { Button } from "../../../components";
import Path from "../../../constants/Path";
import { Link } from "react-router-dom";


const AllPlan = () =>{

    const planInfo = useSelector((state) => state.plans.planData);

    return(
      <>
      <div className="main-container">
        <div className="left-container">
          <div className="left-container__title-bar">
            <span className="left-container-title-bar__title">
              Your Plans
            </span>
            
            <Link to={Path.CREATE_PLAN}>
            <Button
              variant="blue"
              name="+ Post Plan"
              // onClick={handlePopup}
            /></Link>
            {/* <Popup trigger={popupVisible} setTrigger={setPopupVisible}></Popup> */}
          </div>
          <div className="left-container__trip-list">
          <div className="plan-card">
            <div for="description" className="destination">Calgary</div>
              <div className="dateandexpense">
                <div className="dates">24-04-2023</div>
                <div className="expense">$1500</div>
              </div>
              <div className="pt-2">
              <p>
              The city and its immediate outskirts are home to several attractions, such as the  Calgary Tower, Stephen Avenue Walk, Glenbow Museum, Devonian Gardens,  Calgary Zoo, Inglewood Bird Sanctuary, and Calaway Park. For maps of Calgary attractions, visit Calgaryattractions.com (includes printable coupons) and Calgary Info Center .

              </p>
              </div>
              <div className="customize">
                <div className="update"><MdEditNote/></div>
                <div className="delete"><MdDeleteOutline/></div>
              </div>
            </div>
          </div>
          <div className="left-container__trip-list">
          <div className="plan-card">
            <div for="description" className="destination">New York</div>
              <div className="dateandexpense">
                <div className="dates">01-08-2023</div>
                <div className="expense">$1800</div>
              </div>
              <div className="pt-2">
              <p>
              New York is composed of five boroughs – Brooklyn, the Bronx, Manhattan, Queens and Staten Island - is home to 8.4 million people who speak more than 200 languages, hail from every corner of the globe, and, together, are the heart and soul of the most dynamic city in the world.
              </p>
              </div>
              <div className="customize">
                <div className="update"><MdEditNote/></div>
                <div className="delete"><MdDeleteOutline/></div>
              </div>
            </div>
          </div>
          <div className="left-container__trip-list">
          <div className="plan-card">
            <div for="description" className="destination">Las-Vegas</div>
              <div className="dateandexpense">
                <div className="dates">15-05-2023</div>
                <div className="expense">$3500</div>
              </div>
              <div className="pt-2">
              <p>
              One thing’s for sure: Las Vegas, Nevada is a place that needs no introduction. With its five-star resorts, world-class restaurants, stellar shopping, unrivaled entertainment, and 24/7 pulse—from classic Downtown Las Vegas to the famous Las Vegas Strip and beyond—this one-of-a-kind city owns the throne as the world’s premier tourist destination. Get the lay of the land in Nevada’s largest city, a vision for visiting Vegas like a pro, and tips on exploring the stunning sights of southern Nevada.
              </p>
              </div>
              <div className="customize">
                <div className="update"><MdEditNote/></div>
                <div className="delete"><MdDeleteOutline/></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="right-container">
        <div className="all-plan-title">
              <span>All Plans</span>
        </div>
        <div className="plans">
        { planInfo.map((plan) => (
            <div className="card">
            <div for="description" className="destination">{plan.destination}</div>
              <div className="dateandexpense">
                <div className="dates">{plan.startdate} to {plan.enddate}</div>
                <div className="expense">${plan.expense_details}</div>
              </div>
              <div className="pt-2">
              <p>
              {plan.description}
              </p>
              </div>
              <div className="customize">
                <div className="share"><MdShare/></div>
                <div className="message"><TbMessageCircle/></div>
              </div>
            </div>
        )) 
        }
        </div>
    </div>
      </div>
    </>
    )
}

export default AllPlan;