import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <SkeletonTheme highlightColor="#fff">
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      {
        <div className="restaurant-list">
          {Array(10)
            .fill("")
            .map((e, i) => {
              return (
                <div className="card" key={i}>
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
            })}
        </div>
      }
    </SkeletonTheme>
  );
};
export default Shimmer;
