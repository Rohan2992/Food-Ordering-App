import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default Shimmer = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push(
      <div className="card shimmer-card" key={i}>
        <div className="shimmer-img">
          <Skeleton width={100} height={100} />
        </div>
        <h2>
          <Skeleton />
        </h2>
        <h3>
          <Skeleton />
        </h3>
        <h4>
          <Skeleton />
        </h4>
      </div>
    );
  }
  return (
    <SkeletonTheme highlightColor="#fff">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value=""
        />
        <div className="restaurant-list">{result}</div>
      </div>
    </SkeletonTheme>
  );
};
