import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default Shimmer = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push(
      <div className="card shimmer-card">
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
  return <SkeletonTheme highlightColor="#fff">{result}</SkeletonTheme>;
};
