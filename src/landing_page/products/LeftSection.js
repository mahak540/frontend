import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <Link href={tryDemo}>Try Demo</Link>
            <Link href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </Link>
          </div>
          <div className="mt-3">
            <Link href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="playbadge" />
            </Link>
            <Link href={appStore}>
              <img
                src="media/images/appstoreBadge.svg" alt="badge"
                style={{ marginLeft: "50px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
