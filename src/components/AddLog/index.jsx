import { useState } from 'react'
import PubSub from 'pubsub-js'
import RadiusShadow from '../UI/RadiusShadow'
import './index.css'
const AddLog = () => {
  // 受控组件，获取日期，内容，时间
  // 调用setDate()就是把新的状态存到state
  const [date, setDate] = useState('')
  const [text, setText] = useState('')
  const [number, setNumber] = useState('')
  const dateChange = (e) => setDate(e.target.value)
  const textChange = (e) => setText(e.target.value)
  const numberChange = (e) => setNumber(e.target.value)
  const newLog = {
    id: Date.now() + '',
    date: new Date(date),
    desc: text,
    time: +number,
  }
  const subData = (e) => {
    // 阻止表单默认跳转行为
    e.preventDefault()
    // 发布消息
    PubSub.publish('MY TOPIC',newLog)
    // 清空状态
    setDate('')
    setText('')
    setNumber('')
  }

  return (
    <RadiusShadow className="AddlogWrapper">
      <form>
        <div className="dateWrapper">
          <label htmlFor="date">
            日期：
            <input type="date" onChange={dateChange} value={date} />
          </label>

          <label htmlFor="content">
            内容：
            <input type="text" onChange={textChange} value={text} />
          </label>

          <label htmlFor="time">
            时间：
            <input type="number" onChange={numberChange} value={number} />
          </label>
        </div>
        <div className="btn">
          <button type="submit" onClick={subData}>
            提交
          </button>
        </div>
      </form>
    </RadiusShadow>
  )
}
export default AddLog
