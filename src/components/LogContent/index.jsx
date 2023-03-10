import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import RadiusShadow from '../UI/RadiusShadow'
import Item from './Item'
import LogFilter from './LogFilter'
import './index.css'
// LogContentwrapper

const LogContent = () => {
  // 初始化状态
  const [logsData, setLogsData] = useState([
    {
      id: '001',
      date: new Date(2021, 1, 20, 18, 30),
      desc: '学习九阳神功',
      time: 30,
    },
    {
      id: '002',
      date: new Date(2022, 2, 10, 12, 30),
      desc: '学习降龙十八掌',
      time: 20,
    },
    {
      id: '003',
      date: new Date(2022, 2, 11, 11, 30),
      desc: '学习JavaScript',
      time: 40,
    },
    {
      id: '004',
      date: new Date(2022, 2, 15, 10, 30),
      desc: '学习React',
      time: 80,
    },
  ])

  // 订阅消息
  PubSub.subscribe('MY TOPIC', (_, newLog) =>
    setLogsData([newLog, ...logsData])
  )
  // 删除数据
  const onDelLog = (id) => {
    const newLogsData = logsData.filter((item) => item.id !== id)
    setLogsData(newLogsData)
  }

  // 筛选数据
  const getYear = (year) => {
    // const newLogsData = logsData.filter(
    //   (item) => item.date.getFullYear() === year
    // )
    // setLogsData(newLogsData)
  }
  // 遍历数据
  const logItemDate = logsData.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
      onDelLog={onDelLog}
    />
  ))

  return (
    <RadiusShadow className="contentwrapper">
      <LogFilter getYear={getYear} />
      {logItemDate.length > 0 ? logItemDate : <p>当前无数据</p>}
    </RadiusShadow>
  )
}
export default LogContent
