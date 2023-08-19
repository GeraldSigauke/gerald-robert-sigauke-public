import React from 'react';

const LogoCloud = ({ logoCloud }) => {
  return (
    <>
        <div class="mb-12 lg:mb-0">
        <img
            src={logoCloud.url}
            class="img-fluid grayscale px-6 md:px-12"
            alt={logoCloud.logo}
        />
        </div>
    </>
  )
}

export default LogoCloud