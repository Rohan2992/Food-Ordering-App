import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <SkeletonTheme highlightColor="#fff">
      <div className="flex justify-center my-3">
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      {
        <div className="flex flex-wrap justify-center">
          {Array(10)
            .fill("")
            .map((e, i) => {
              return (
                <div
                  className="m-4 w-72 h-60 border-slate-900 border-solid border-2"
                  key={i}
                >
                  <div className="mt-4 w-40 mx-24">
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
