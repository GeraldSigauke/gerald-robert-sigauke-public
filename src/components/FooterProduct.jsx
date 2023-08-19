import React from 'react';

const FooterProduct = ({ footerProduct }) => {
  return (
    <>
        <p class="mb-4">
        <a href={ footerProduct.url } class="text-[#2c5282] dark:text-[#2c5282]">
            { footerProduct.product }
        </a>
        </p>
    </>
  )
}

export default FooterProduct