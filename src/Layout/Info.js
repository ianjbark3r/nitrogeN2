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
        style={infoRowStyles}
      >
        <div 
          className={colClasses}
          style={infoColStyles}
        >
          <h1 className={titleClasses}>WHY N<sub>2</sub>?</h1>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut. Placerat duis ultricies lacus sed turpis tincidunt. Urna porttitor rhoncus dolor purus non enim praesent elementum. Elit pellentesque habitant morbi tristique senectus. Pulvinar etiam non quam lacus. Aliquet nec ullamcorper sit amet risus nullam eget felis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. At consectetur lorem donec massa sapien faucibus et molestie. Bibendum enim facilisis gravida neque. Consequat interdum varius sit amet. Neque egestas congue quisque egestas diam. Adipiscing elit ut aliquam purus sit amet luctus. At tellus at urna condimentum mattis. Id cursus metus aliquam eleifend mi in. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Nibh mauris cursus mattis molestie a iaculis. A cras semper auctor neque vitae tempus quam pellentesque nec. In vitae turpis massa sed elementum. Amet nisl purus in mollis.
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