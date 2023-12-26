import { DateTime } from 'next-auth/providers/kakao'
import React, { FC, useState } from 'react'
import ReactCalendar from 'react-calendar'

interface indexProps {

  }
const index: FC<indexProps> = ({}) => {

  return (
    <div>
        <ReactCalendar minDate={new Date()} className="REACT-CALENDER p-2" view='month' />
    </div>
  )
}

export default index