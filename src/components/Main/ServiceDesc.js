/* eslint react/no-danger: 0 */

import React from 'react';

const ServiceDesc = ({ children, description }) => (
  <div>
    {children}
    <p dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
    />
  </div>
);

export default ServiceDesc;
