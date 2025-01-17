import Slider from "../../components/slider/Slider";
import "./single.scss";
import { singlePostData, userData } from "../../lib/dummydata";

export default function Single() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Genral</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="featureText">
              <span>Property Fees</span>
              <p>Must have 3x the rent in total household income</p>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes"></div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal"></div>

          <p className="title">Location</p>
        </div>
      </div>
    </div>
  );
}
