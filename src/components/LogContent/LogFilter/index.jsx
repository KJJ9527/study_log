import React from 'react'

const LogFilter = (props) => {
  const changeYear = (e) => {
    props.getYear(+e.target.value)
    console.log(+e.target.value);
  }

  return (
    <div>
      年份：
      <select onChange={changeYear}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  )
}
export default LogFilter
