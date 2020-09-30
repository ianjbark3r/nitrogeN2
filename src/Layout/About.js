import React from 'react';
import {
  colClasses,
  hrStyles,
  infoColStyles,
  infoContentClasses,
  infoContentStyles,
  infoRowStyles,
  titleClasses,
  rowClasses
} from '../styles';

const Info = () => {
  return (
    <>
      <div
        className={rowClasses}
        id="info"
        style={infoRowStyles}
      >
        <div
          className={colClasses}
          style={infoColStyles}
        >
          <h1 className={titleClasses}>ABOUT nitrogeN<sub>2</sub></h1>
          <hr style={hrStyles} />
        </div>
      </div>
      <div
        className={rowClasses}
        style={infoContentStyles}
      >
        <div
          className={infoContentClasses}
          style={infoColStyles}
        >
          We are a local Veteran-owned and operated company providing convenient mobile nitrogen tire services. We are dedicated to upholding the highest level of quality customer service, professionalism, and safety in the greater Austin community!
        </div>
        <div
          className={infoContentClasses}
          style={infoColStyles}
        >
          Faucibus in ornare quam viverra orci. Vitae proin sagittis nisl rhoncus. Interdum varius sit amet mattis vulputate. Mauris vitae ultricies leo integer malesuada. Pretium lectus quam id leo in vitae turpis. Euismod nisi porta lorem mollis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Nulla pellentesque dignissim enim sit amet. Facilisis gravida neque convallis a cras semper. In nulla posuere sollicitudin aliquam. Egestas egestas fringilla phasellus faucibus. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Eget nunc scelerisque viverra mauris in aliquam. Consectetur lorem donec massa sapien. Lectus sit amet est placerat in.
        </div>
      </div>
    </>
  )
};

export default Info;