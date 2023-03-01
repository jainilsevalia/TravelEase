import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Path from "../../constants/Path";


function NavbarFun() {
	const location = useLocation();
	const [open, setOpen] = React.useState(false);
	const [searchActive, setSearchActive] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	const [Mobile, setMobile] = useState(false);
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<div className="start">
						<button
							className="mobile-menu-icon nav-button"
							onClick={() => setMobile(!Mobile)}
						>
							{Mobile ? <ImCross /> : <FaBars />}
						</button>
						<Link
							className="logo"
							to={Path.HOME}
						>
							TripEase
						</Link>
					</div>

					<ul
						className={Mobile ? "navlinks-mobile" : "navlinks"}
						onClick={() => setMobile(false)}
					>
						<Link
							to={Path.HOME}
							className={`${
								location.pathname === Path.HOME ? "active-tab" : "inActive-tab"
							}`}
						>
							Feed
						</Link>
						<Link
							to={Path.MANAGE_EXPENSES}
							className={`${
								location.pathname === "/manageExpense"
									? "active-tab"
									: "inActive-tab"
							}`}
						>
							Expense
						</Link>
						<Link
							to={Path.MESSAGE}
							className={`${
								location.pathname === Path.MESSAGE
									? "active-tab"
									: "inActive-tab"
							}`}
						>
							Message
						</Link>

						{/* <div className={`${
								(location.pathname === Path.ALL_PLAN || location.pathname === Path.MY_PLAN)
									? "active-tab plan-dropdown"
									: "inActive-tab plan-dropdown"
							}`}>
							<button	
								className="plus nav-button"
								onClick={handleOpenPlan}
							>
								Plan<FaPlusSquare />{" "}
							</button>
							{plan ? (
								<ul className="menu">
									<li className="menu-item">
										<Link to={Path.ALL_PLAN} onClick={handleOpenPlan}>All Plan</Link>
									</li>
									<li className="menu-item">
										<Link to={Path.MY_PLAN} onClick={handleOpenPlan}>Your Plan</Link>
									</li>
								</ul>
							) : null}
						</div> */}

						<Link
							to={Path.ALL_PLAN}
							className={`${
								location.pathname === Path.ALL_PLAN ? "active-tab" : "inActive-tab"
							}`}
						>
							Plan
						</Link>


					</ul>

					<div className={`end ${searchActive ? "search-active" : ""}`}>
						<div
							className="search"
							onClick={() => {
								setSearchActive(true);
							}}
						>
							<input
								type="text"
								placeholder="Search..."
							/>

							<FaSearch />
						</div>
						{searchActive ? (
							<div
								className="search-close"
								onClick={() => {
									setSearchActive(false);
								}}
							>
								<ImCross />
							</div>
						) : null}
						<div className="dropdown">
							<button
								className="plus nav-button"
								onClick={handleOpen}
							>
								<span>Create</span> <FaPlusSquare />{" "}
							</button>
							{open ? (
								<ul className="menu">
									<li className="menu-item">
										<Link to={Path.CREATE_POST} onClick={handleOpen}>Post</Link>
									</li>
									<li className="menu-item">
										<Link to={Path.CREATE_LIVE_UPDATES} onClick={handleOpen}>Stories</Link>
									</li>
									<li className="menu-item">
										<Link to={Path.CREATE_PLAN} onClick={handleOpen}>Plan</Link>
									</li>
								</ul>
							) : null}
						</div>

						<Link to={Path.PROFILE_PAGE}>
							<button className="nav-button">
								<img
									src="./profile.jpg"
									alt=" "
								/>
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavbarFun;
