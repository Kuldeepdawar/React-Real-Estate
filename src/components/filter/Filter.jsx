import "./filter.scss";
export default function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Australia</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Australia</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>{" "}
        <div className="item">
          <label htmlFor="city">Australia</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>{" "}
        <div className="item">
          <label htmlFor="city">Australia</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>{" "}
        <div className="item">
          <label htmlFor="city">Australia</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>{" "}
        <div className="item">
          <label htmlFor="city">Australia</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}
