import React from 'react'

const ContactField = ({ contactField }) => {
  return (
    <>
        <div class="mb-5">
        <label
            id={ contactField.id1 }
            for={ contactField.for1 }
            class="mb-3 block text-base font-bold text-[#2c5282]"
        >
            { contactField.label1 }
        </label>
        <input
          type={ contactField.type2 }
          name={ contactField.name2 }
          id={ contactField.id2 }
          placeholder={ contactField.placeholder2 }
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#D30D0D] focus:shadow-md"
          required
        />
        </div>
    </>
  )
}

export default ContactField