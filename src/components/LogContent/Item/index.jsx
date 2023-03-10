import React from 'react'
import Date from './Date'
import RadiusShadow from '../../UI/RadiusShadow'
import './index.css'
const Item = props => {
  const delItem = () => {
    const result = window.confirm('确定删除吗？')
    if(result) {
       props.onDelLog(props.id)
    }
  }
  return (
    <RadiusShadow className="item">
      <Date date={props.date}/>
      <div className="contentText">
        <div>{props.desc}</div>
        <div>{props.time}</div>
      </div>
      <span className='closeBtn' onClick={delItem}>×</span>
    </RadiusShadow>
  )
}

export default Item
