import { Text } from "../../../components";
import "./styles.scss";

const ReviewListItem = () => {
  return (
    <div className="reviewsItem">
      <div className="reviewsItem-header">
        <div className="review-details">
          <img
            src={require("../../../assets/images/me.jpg")}
            alt="User Avatar"
          />

          <div className="review-userName-stars">
            <Text className="s-xs w-600">Ahmed Usama</Text>
            
            <div className="review-stars">
              <i
                className="bx bxs-star"
                style={{ color: "#DC3A1A", fontSize: 18 }}
              />
              <i
                className="bx bxs-star"
                style={{ color: "#DC3A1A", fontSize: 18 }}
              />
              <i
                className="bx bxs-star"
                style={{ color: "#DC3A1A", fontSize: 18 }}
              />
              <i
                className="bx bxs-star"
                style={{ color: "#DC3A1A", fontSize: 18 }}
              />
              <i
                className="bx bx-star"
                style={{ color: "#DC3A1A", fontSize: 18 }}
              />
              <Text className="s-sm w-600">4.0</Text>
            </div>
          </div>
        </div>

        <Text className="review-date s-xs">1 day ago</Text>
      </div>

      <div className="reviewsItem-body">
        <Text className="s-sm">This is a great laptop to buy :D</Text>
      </div>
    </div>
  );
};

export default ReviewListItem;
