import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [userDetails, setUserDetails] = useState({});
  const { menu } = useContext(DataContext);

  useEffect(() => {
    const fetchUserDetails = async (userId) => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!response.ok) {
          throw new Error(`Unable to fetch data for user ${userId}`);
        }
        const result = await response.json();
        setUserDetails((prevDetails) => ({ ...prevDetails, [userId]: result }));
      } catch (error) {
        console.error(error);
      }
    };

    menu.forEach((review) => {
      if (review.userId && !userDetails[review.userId]) {
        fetchUserDetails(review.userId);
      }
    });
  }, [menu, userDetails]);

  const getStarRating = (rating) => {
    return Math.round(rating);
  };

  const renderStars = (rating) => {
    const roundedRating = getStarRating(rating);
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} style={{ color: "#f5c518" }} />);
      } else {
        stars.push(<FaStar key={i} style={{ color: "#e0e0e0" }} />);
      }
    }

    return stars;
  };

  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {menu.length > 0 ? (
          menu.map((review, index) => {
            const customerData = userDetails[review.userId] || {};

            return (
              <div key={index} className="flex review">
                <div className="">
                  <h4>
                    {customerData
                      ? `${customerData.firstName} ${customerData.lastName}`
                      : "Unknown User"}
                  </h4>{" "}
                  <div className="rating">{renderStars(review.rating)}</div>
                  <p className="comment">{review.name}</p>
                </div>
                <img
                  src={customerData.image}
                  width={80}
                  height={80}
                  alt="profile pic"
                />
              </div>
            );
          })
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
