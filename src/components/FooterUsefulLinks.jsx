import React from 'react'

const FooterUsefulLinks = ({ footerUsefulLinks }) => {
  return (
    <>
        <p class="mb-4">
        <a href={ footerUsefulLinks.url } class="text-[#2c5282] dark:text-[#2c5282]">
            { footerUsefulLinks.usefulLink }
        </a>
        </p>
    </>
  )
}

export default FooterUsefulLinks