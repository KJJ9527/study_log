import './index.css'
const RadiusShadow = (props) => {
  /*
  props.children 表示组件的标签体
  */
 return (
  <div className={`card ${props.className}`}>{props.children}</div>
 )
}
export default RadiusShadow
