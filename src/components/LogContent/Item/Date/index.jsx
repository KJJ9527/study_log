import React from 'react'
import RadiusShadow from '../../../UI/RadiusShadow'
import './index.css'
const Date = props => {
  const month = props.date.toLocaleString('zh-CN',{month:'long'})
  const day = props.date.getDate()
  return (
    <RadiusShadow className="date">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
    </RadiusShadow>
  )
}

export default Date
