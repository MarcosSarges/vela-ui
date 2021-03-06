import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {useTheme} from '../lib/theme'

export const Logo = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M16.354 13.694c-1.537 2.39-4.525 4.696-7.512 6.062-1.452.683-3.244-.086-3.415-2.05-.086-1.28.939-6.231 1.024-6.658.086-.768-.512-.939-1.28-.256L5 10.536s3.415-3.33 3.756-3.671c.342-.256 1.622-1.451 2.22.17.512 1.708-.427 5.208-.598 6.062-.17.939-1.11 4.61 0 4.61 1.537 0 2.817-4.269 2.988-5.037.256-.854 1.11-6.744-.683-4.951l-.17-.086s2.731-2.646 3.414-3.073c.683-.427 1.622-1.195 1.963.427.342 1.622 0 6.317-1.536 8.707z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Back = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M19.4 10.45H8l3.9-3.9c.5-.5.5-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-6.4 6.3c-.3.3-.4.7-.4 1.1 0 .3.1.6.2.8 0 .1.1.1.1.2 0 0 0 .1.1.1l6.3 6.3c.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1l-3.6-3.7h11.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Error = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M19.571 17.95l-5.523-5.8 5.333-5.6a1.5 1.5 0 000-2.1c-.572-.6-1.429-.6-2 0l-5.333 5.7-5.334-5.7c-.571-.6-1.428-.6-2 0-.285.3-.476.7-.476 1.1 0 .4.095.8.381 1.1l5.333 5.6-5.523 5.8a1.5 1.5 0 000 2.1c.285.3.666.4 1.047.4.381 0 .762-.1 1.048-.4l5.524-5.8 5.523 5.8c.572.6 1.429.6 2 0 .572-.6.572-1.6 0-2.2z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Down = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M19.175 9.45c-.6-.6-1.5-.6-2.1 0l-5.3 5.3-5.2-5.3c-.6-.5-1.6-.5-2.2 0-.5.6-.5 1.6 0 2.2l6.3 6.3c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l6.3-6.3c.6-.6.6-1.6 0-2.2z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Check = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M21.42 5.363c-.6-.5-1.4-.5-1.9.1l-10 11.1-5.3-4.3c-.6-.4-1.4-.4-1.9.2-.5.6-.4 1.4.2 1.9l6.2 5.2s.1 0 .1.1c0 0 .1 0 .1.1 0 0 .1 0 .1.1H10.02c.1 0 .1 0 .2-.1 0 0 .1 0 .1-.1.1 0 .1-.1.1-.1l.1-.1.1-.1 10.9-12.1c.5-.5.4-1.4-.1-1.9z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Add = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M19.7 10.4h-6.5V3.6c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v6.8H3.6c-.9 0-1.6.7-1.6 1.5s.7 1.6 1.6 1.6H10v6.2c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-6.2h6.5c.9 0 1.6-.7 1.6-1.6 0-.9-.8-1.5-1.6-1.5z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Delete = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M16.4 11H7.5c-.8 0-1.5.7-1.5 1.5S6.7 14 7.5 14h8.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Assist = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M11.825 13.38a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M16.625 7.38c-.2.3-.2.7 0 1 1.2 1.6 1.7 3.7.9 6-.6 1.8-2 3.1-3.8 3.6-4.2 1.3-8-1.8-8-5.8 0-3 2.3-5.5 5.2-6.1.4-.1.9-.3.9-.9 0-.4-.5-.9-1.1-.8-4.5.6-7.8 5.1-6.4 10 .7 2.5 2.7 4.5 5.3 5.2 5.3 1.5 10.1-2.4 10.1-7.5 0-1.8-.6-3.5-1.7-4.8-.4-.5-1.1-.4-1.4.1z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M11.125 3.08l1.9 1.4c.1.1.1.3 0 .5l-1.4 1.8c-.2.3-.6.2-.6-.1l-.5-3.3c0-.3.3-.5.6-.3z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Saver = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M10.7 14.9c.3 0 .6-.3.6-.6v-1.4h1.4c.3 0 .6-.3.6-.6s-.3-.6-.6-.6h-1.4v-1.3c0-.3-.3-.6-.6-.6s-.6.3-.6.6v1.4H8.7c-.3 0-.6.2-.6.5s.3.6.6.6h1.4v1.4c0 .3.2.6.6.6z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M15.6 17.3l-2.2-.8c-.3-.1-.6.2-.4.5l.3.7c-.8.3-1.7.5-2.6.5-2.6-.1-4.8-1.8-5.6-4.3-1.2-3.7 1.3-7.4 5-8 1.2-.2 2.3 0 3.3.5 1-.1 1.2-1.6.2-1.9-1.1-.5-2.4-.6-3.7-.4-4.6.6-7.7 5-6.8 9.6.8 4 4.5 6.7 8.5 6.4.9-.1 1.7-.3 2.4-.6l.3.6c.1.3.5.3.7 0l.8-2.2c.1-.4 0-.6-.2-.6z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M19.1 7.2h-.2v-.1c0-.4-.3-.7-.7-.7h-1.3c-.4 0-.7.3-.7.7v.1H16c-.6 0-1.1.5-1.1 1.1v6.1c0 .6.5 1.1 1.1 1.1h3.1c.6 0 1.1-.5 1.1-1.1V8.2c0-.6-.5-1-1.1-1zm.1 7.1c0 .1 0 .1 0 0l-3.2.1s-.1 0-.1-.1V8.2s0-.1.1-.1h3.1s.1 0 .1.1v6.1z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M19.5 13.1h-4v1.5h4v-1.5z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Fast = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M4.4 12.625h5.4c.5 0 .8-.4.8-.8 0-.5-.3-.8-.8-.8H4.4c-.4 0-.8.3-.8.8 0 .4.4.8.8.8zM9.8 13.925h-4c-.5 0-.8.4-.8.8s.4.8.8.8h4c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zM10.8 8.925c0-.5-.4-.8-.8-.8H2.8c-.4 0-.8.3-.8.8s.4.8.8.8H9.9c.5 0 .9-.4.9-.8z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M14.9 4.025c-1.4-.1-2.8.1-4 .6-1 .4-.7 1.9.3 1.9 1.2-.7 2.7-.9 4.3-.5 2.5.6 4.4 2.7 4.7 5.3.4 3.9-2.7 7.1-6.4 6.9-1.2-.1-2.3-.5-3.2-1.1-1.1-.1-1.5 1.3-.6 1.9 1.1.6 2.3 1 3.6 1.1 4.6.2 8.5-3.4 8.4-8.1 0-4.1-3.1-7.5-7.1-8z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M14.5 13.225a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const User = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M11.8 11.8c2.2 0 3.9-1.8 3.9-3.9C15.7 5.8 14 4 11.8 4S7.9 5.8 7.9 7.9c0 2.2 1.7 3.9 3.9 3.9zM20.6 16.9c0-2-5.8-3.1-8.8-3.1-3 0-8.8 1.1-8.8 3.1v2.8c0 .3.4.5.8.5h16c.4 0 .8-.2.8-.5v-2.8z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Menu = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M6.2 8.5h12.6c.7 0 1.2-.5 1.2-1.2S19.5 6 18.8 6H6.2C5.5 6 5 6.5 5 7.2s.5 1.3 1.2 1.3zM18.8 11.4H6.2c-.7 0-1.2.6-1.2 1.3 0 .7.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2s-.5-1.3-1.2-1.3zM18.8 16.9H6.2c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Cart = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M8.2 17c-1 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7.9 0 1.8-.7 1.8-1.7S9.2 17 8.2 17zM3 3.9c0 .5.4.9.9.9h.9l3.1 6.6-1.2 2.1c-.5.8-.2 1.9.7 2.4.3.1.6.2.8.2h9.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H8.2l1-1.7h6.5c.6 0 1.2-.3 1.5-.9L20.3 6c.2-.4.1-.9-.3-1.2-.1-.1-.3-.1-.5-.1H6.7l-.6-1.2C6 3.2 5.6 3 5.3 3H3.9c-.5 0-.9.4-.9.9zM17 17c-1 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7.9 0 1.7-.8 1.7-1.7 0-.9-.7-1.7-1.7-1.7z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Pin = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M16 6.902C16 4.712 14.244 3 12 3 9.756 3 8 4.713 8 6.902c0 1.712 1.17 3.235 2.83 3.71v9.612c0 .095.097.285.194.285l.586.381c.195.19.585.095.78 0l.683-.38c.098-.096.195-.19.195-.286v-9.611C14.83 10.137 16 8.614 16 6.902z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Location = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M19.85 4.15a.555.555 0 00-.63-.09L4.36 10.453c-.27.09-.36.36-.36.63s.18.45.45.54l6.125 1.801 1.8 6.125c.09.27.27.45.541.45.27 0 .45-.18.54-.36l6.485-14.86c.09-.18.09-.45-.09-.63z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Marker = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M11.75 3C7.98 3 5 6.245 5 10.191c0 4.911 6.049 10.349 6.312 10.612.263.263.701.263.876 0 .263-.263 6.312-5.7 6.312-10.612C18.412 6.245 15.432 3 11.75 3z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Battery = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M14.98 5.333h-.384v-.089c0-.71-.577-1.244-1.346-1.244h-2.5c-.673 0-1.25.533-1.25 1.244v.09h-.48C7.961 5.333 7 6.221 7 7.2v10.933C7 19.2 7.962 20 9.02 20h5.96c1.155 0 2.02-.889 2.02-1.867V7.2c0-.978-.865-1.867-2.02-1.867zm.097 12.8c0 .09 0 .09-.096.09H9.019s-.096 0-.096-.09V7.2c0-.089.096-.089.096-.089h5.962a.09.09 0 01.096.089v10.933z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Phone = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M19.87 16.675l-2.6-2.7c-.5-.5-1.4-.5-2 0l-1.3 1.4c-.1 0-.2-.1-.3-.1-.9-.5-2-1.1-3.2-2.3-1.3-1.3-1.9-2.5-2.4-3.4-.1 0-.1-.1-.2-.2l.9-.9.5-.5c.6-.6.6-1.4 0-2l-2.6-2.6c-.5-.5-1.4-.5-2 0l-.8.8c-.2.3-.4.7-.6 1.1-.1.4-.2.7-.2 1.1-.4 2.9.9 5.6 4.6 9.3 5 5 9.1 4.6 9.2 4.6.4 0 .7-.1 1.1-.3.4-.2.8-.4 1.1-.6l.8-.7c.6-.6.6-1.5 0-2z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Store = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M18.4 4H6c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h12.4c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm3 10.1l-1.6-5.4c-.2-.6-.7-1-1.4-1H6c-.6 0-1.2.4-1.4 1L3 14.1h1.9v4.3c0 .6.5 1.2 1.2 1.2h6.8c.6 0 1.2-.5 1.2-1.2v-4.3h2.7v4.4c0 .6.5 1.1 1.1 1.1h.7c.6 0 1.1-.5 1.1-1.1v-4.4h1.7zm-8.9 3.6H6.8v-3.8h5.7v3.8z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Wrench = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M12.8 11.5c.2-.1.4-.2.7-.2.4 0 .8.2 1 .4l.6-.6c1.5.5 3.2.2 4.4-1 1-1 1.4-2.4 1.2-3.7 0-.1-.1-.3-.3-.3-.1 0-.3 0-.4.1l-.9.9c-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6l.9-.9c.1-.1.1-.3.1-.4 0-.1-.2-.2-.3-.3-1.3-.2-2.7.2-3.7 1.2-1.2 1.2-1.5 3-1 4.5L11.3 10l1.5 1.5zM10.5 13.9l-1.6-1.5-5.4 5.4c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l4.6-4.6c-.4-.5-.4-1.2-.1-1.8z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M13.9 12.5c-.1-.1-.3-.2-.4-.2-.1 0-.3.1-.4.2l-.3.3L7 7l.3-.3c.2-.2.2-.6-.1-.9L4.9 4.2c-.2-.2-.5-.1-.7.1l-1 1c-.2.1-.2.5-.1.7l1.7 2.3c.2.3.6.3.9.1l.3-.3 5.7 5.7-.3.3c-.2.2-.2.6 0 .8l5.3 5.3c.7.7 1.8.7 2.5 0s.7-1.8 0-2.5l-5.3-5.2z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Bolt = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M10.21 20.378l2.282-6.58H6.439c-.264 0-.439-.263-.439-.526 0-.088 0-.175.088-.263 1.754-2.193 3.597-4.387 5.351-6.58.877-1.052 1.755-2.193 2.632-3.246.263-.175.526-.263.702-.087.175.087.175.35.175.526l-2.368 6.667h6.053c.263 0 .438.176.438.439 0 .088 0 .175-.087.263-1.755 2.193-3.51 4.386-5.352 6.58-.877 1.052-1.754 2.105-2.72 3.246-.175.175-.438.263-.613.087-.088-.087-.176-.35-.088-.526z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Parking = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M11.184 6.382c1.86 0 3.288.33 4.284.99.996.648 1.494 1.716 1.494 3.204 0 1.5-.504 2.586-1.512 3.258-1.008.66-2.448.99-4.32.99h-.882V19H7.44V6.706c.612-.12 1.26-.204 1.944-.252a26.102 26.102 0 011.8-.072zm.18 2.394c-.204 0-.408.006-.612.018-.192.012-.36.024-.504.036v3.6h.882c.972 0 1.704-.132 2.196-.396.492-.264.738-.756.738-1.476 0-.348-.066-.636-.198-.864-.12-.228-.3-.408-.54-.54a2.134 2.134 0 00-.846-.288 6.37 6.37 0 00-1.116-.09z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Lock = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M17.149 10.307h-.304V8.882a4.855 4.855 0 00-4.988-4.881 4.855 4.855 0 00-4.702 4.881v1.425h-.304c-.468 0-.851.483-.851 1.08v7.14c0 .596.383 1.084.851 1.084H17.15c.469 0 .851-.488.851-1.085v-7.139c0-.596-.382-1.08-.851-1.08zm-4.187 4.636v2.159a.459.459 0 01-.456.456h-1.014a.456.456 0 01-.454-.454v-2.16a1.308 1.308 0 01.82-2.225 4.51 4.51 0 01.285 0 1.308 1.308 0 01.82 2.224zm1.862-4.636h-5.68V8.882a2.84 2.84 0 115.68 0v1.425z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Unlock = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M17.148 10.305H9.146V8.883a2.838 2.838 0 015.57-.81.993.993 0 00.964.713 1.008 1.008 0 00.977-1.273A4.856 4.856 0 0012.143 4h-.286a4.856 4.856 0 00-4.702 4.883v1.422h-.302c-.47 0-.853.486-.853 1.079v7.141c0 .596.383 1.08.853 1.08h10.295c.469 0 .852-.489.852-1.08v-7.138c0-.597-.383-1.082-.852-1.082zm-4.185 4.637v2.159a.458.458 0 01-.458.456H11.49a.453.453 0 01-.453-.454v-2.158a1.305 1.305 0 01.81-2.223h.285a1.308 1.308 0 01.81 2.223l.021-.003z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Bluetooth = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M16.695 14.385L12.4 11.5l4.296-2.885c.407-.272.407-.775 0-1.047L11.62 4.159c-.551-.37-1.388-.054-1.388.524v5.171L7.444 7.61a.996.996 0 00-1.196 0c-.33.267-.33.698 0 .965L9.88 11.5l-3.632 2.927c-.33.266-.33.697 0 .963a.996.996 0 001.196 0l2.787-2.244v5.171c0 .578.837.894 1.388.524l5.076-3.409c.407-.272.407-.775 0-1.047zm-4.772-8.247l2.91 1.953-2.91 1.954V6.137zm0 10.723v-3.905l2.91 1.953-2.91 1.952z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Sun = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M14.836 9.164A4.035 4.035 0 0012 7.979c-1.1 0-2.116.444-2.836 1.185A4.035 4.035 0 007.979 12c0 1.1.465 2.116 1.185 2.836A4.035 4.035 0 0012 16.021c1.1 0 2.116-.444 2.836-1.185A4.035 4.035 0 0016.021 12c0-1.1-.444-2.116-1.185-2.836zM12 6.73a.56.56 0 00.55-.55V4.55A.56.56 0 0012 4a.56.56 0 00-.55.55v1.63c0 .296.254.55.55.55zM16.508 8.275l1.164-1.164a.537.537 0 000-.762.537.537 0 00-.762 0l-1.164 1.164a.537.537 0 000 .762c.19.212.53.212.762 0zM19.45 11.45h-1.63a.56.56 0 00-.55.55c0 .296.254.55.55.55h1.63A.56.56 0 0020 12a.56.56 0 00-.55-.55zM16.487 15.725a.536.536 0 00-.762 0 .536.536 0 000 .762l1.164 1.164c.212.211.55.211.762 0a.537.537 0 000-.762l-1.164-1.164zM12 17.27a.56.56 0 00-.55.55v1.63c0 .296.254.55.55.55a.56.56 0 00.55-.55v-1.63a.56.56 0 00-.55-.55zM7.492 15.725l-1.164 1.164a.537.537 0 000 .762c.212.211.55.211.762 0l1.164-1.164a.537.537 0 000-.762c-.19-.212-.53-.212-.762 0zM6.73 12a.56.56 0 00-.55-.55H4.55A.56.56 0 004 12c0 .296.254.55.55.55h1.63a.56.56 0 00.55-.55zM7.492 8.275c.212.212.55.212.762 0a.537.537 0 000-.762L7.09 6.35a.537.537 0 00-.762 0 .537.537 0 000 .762l1.164 1.164z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Cloud = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M14.673 7.5c.271-.019.504-.232.504-.503V5.504A.513.513 0 0014.673 5a.513.513 0 00-.504.504v1.493c0 .271.232.504.504.504zM18.782 8.896l1.066-1.066a.491.491 0 000-.698.491.491 0 00-.697 0l-1.067 1.066a.491.491 0 000 .698.491.491 0 00.698 0zM21.496 11.823h-1.493a.513.513 0 00-.504.504c0 .272.233.504.504.504h1.493a.513.513 0 00.504-.504.5.5 0 00-.504-.504zM18.782 15.739a.492.492 0 00-.698 0 .492.492 0 000 .698l1.067 1.066a.491.491 0 00.697 0 .491.491 0 000-.698l-1.066-1.066zM10.563 8.896a.491.491 0 00.698 0 .491.491 0 000-.698l-1.066-1.066a.491.491 0 00-.698 0 .491.491 0 000 .698l1.066 1.066zM13.723 12.986c-.422 0-.848.097-1.217.272a2.81 2.81 0 00-.993.775.438.438 0 01-.664.039.492.492 0 01-.039-.698 3.826 3.826 0 011.328-1.027c.092-.039.204-.097.296-.136a4.176 4.176 0 00-1.255-1.493 3.832 3.832 0 00-2.288-.756c-.993 0-1.9.388-2.597 1.008a4.287 4.287 0 00-1.348 2.56.446.446 0 01-.222.348.403.403 0 01-.257.078c-.684 0-1.309.29-1.75.775A2.684 2.684 0 002 16.573c0 .717.276 1.376.737 1.841.44.465 1.07.775 1.75.775h9.275c.794.059 1.53-.29 2.064-.872a3.194 3.194 0 00.867-2.21c0-.872-.33-1.647-.867-2.21a2.891 2.891 0 00-2.103-.91z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M18.336 12.327a3.615 3.615 0 00-1.085-2.597 3.695 3.695 0 00-2.598-1.086c-.678 0-1.337.194-1.9.524a3.908 3.908 0 00-1.066.969c.272.213.504.446.718.698.31.349.562.756.775 1.202.116-.02.252-.02.368-.02a4.1 4.1 0 012.908 1.202c.155.155.31.349.446.523.213.291.388.62.504.97.29-.272.504-.601.64-.95.193-.446.29-.95.29-1.435z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Rain = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M7.543 16.17a.12.12 0 00-.065-.066c-.08-.05-.212-.03-.257.065-.066.111-.146.227-.242.358-.419.615-1.033 1.522-1.033 2.052 0 .388.16.746.418 1.003.257.257.615.418 1.003.418.388 0 .746-.161 1.003-.403l.015-.015c.257-.257.418-.615.418-1.003 0-.535-.614-1.442-1.033-2.052-.08-.13-.166-.247-.227-.358zM12.382 16.17a.12.12 0 00-.066-.066c-.08-.05-.211-.03-.257.065-.065.111-.146.227-.241.358-.419.615-1.034 1.522-1.034 2.052 0 .388.162.746.419 1.003.257.257.615.418 1.003.418.388 0 .746-.161 1.003-.403l.015-.015c.257-.257.418-.615.418-1.003 0-.535-.615-1.442-1.033-2.052-.076-.13-.166-.247-.227-.358zM17.226 16.17a.12.12 0 00-.066-.066c-.08-.05-.211-.03-.257.065-.065.111-.146.227-.242.358-.418.615-1.033 1.522-1.033 2.052 0 .388.161.746.418 1.003.257.257.615.418 1.003.418.389 0 .746-.161 1.003-.403l.015-.015c.258-.257.419-.615.419-1.003 0-.535-.615-1.442-1.033-2.052-.081-.13-.172-.247-.227-.358zM19.464 9.153a3.276 3.276 0 00-2.319-.947c-.463 0-.927.1-1.35.282a3.146 3.146 0 00-1.11.806.6.6 0 01-.826.06.599.599 0 01-.06-.826A4.442 4.442 0 0115.29 7.42c.101-.04.182-.08.283-.12a4.653 4.653 0 00-1.351-1.513A4.394 4.394 0 0011.702 5a4.419 4.419 0 00-2.883 1.069A4.363 4.363 0 007.327 8.77a.558.558 0 01-.262.403.61.61 0 01-.323.101 2.73 2.73 0 00-1.936.807 2.73 2.73 0 000 3.871c.525.483 1.19.786 1.956.786h10.403c.908 0 1.714-.363 2.319-.948a3.276 3.276 0 00.947-2.318c0-.907-.363-1.714-.967-2.319z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Storm = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M19.973 9.278a3.501 3.501 0 00-2.445-.998c-.489 0-.978.102-1.406.306a3.442 3.442 0 00-1.161.855.5.5 0 01-.734.041.5.5 0 01-.04-.733 4.488 4.488 0 011.507-1.12c.123-.062.245-.103.367-.143a4.415 4.415 0 00-1.467-1.65A4.596 4.596 0 0011.946 5c-1.141 0-2.2.407-3.016 1.12a4.562 4.562 0 00-1.548 2.812.522.522 0 01-.244.367.578.578 0 01-.265.081c-.795 0-1.528.326-2.038.836A2.847 2.847 0 004 12.253c0 .794.326 1.528.835 2.037.51.51 1.243.836 2.038.836h2.872c-.02-.163.02-.347.082-.51l1.589-3.26a.96.96 0 01.876-.57h1.854a.9.9 0 01.489.143.962.962 0 01.346 1.304l-.468.774c.142.04.285.102.407.204a.961.961 0 01.082 1.344l-.51.57h3.056c.958 0 1.814-.386 2.425-.998a3.452 3.452 0 00.998-2.424c0-.937-.387-1.813-.998-2.425z"
        fill={(style && style.color) || colors.text}
      />
      <Path
        d="M14.35 13.863a.156.156 0 00-.102-.041h-1.161l1.16-1.976c.042-.062.021-.164-.06-.204-.02-.02-.041-.02-.082-.02h-1.813V11.6a.153.153 0 00-.143.102l-1.589 3.3c-.04.082 0 .163.061.204.02 0 .041.02.061.02h.958l-1.06 2.73c-.02.082 0 .163.082.184.061.02.122 0 .163-.04l3.545-4.035c.061-.06.04-.163-.02-.204zM7.77 16.129a.12.12 0 00-.067-.066c-.082-.051-.214-.03-.26.066a4.56 4.56 0 01-.244.362c-.423.621-1.045 1.538-1.045 2.073 0 .392.163.753.423 1.013.26.26.622.423 1.014.423s.754-.163 1.013-.407l.016-.016c.26-.26.422-.621.422-1.013 0-.54-.621-1.457-1.044-2.073-.081-.133-.168-.25-.229-.362zM17.294 16.129c-.016-.015-.03-.05-.067-.066-.081-.051-.213-.03-.26.066-.066.112-.147.23-.244.362-.422.621-1.044 1.538-1.044 2.073a1.5 1.5 0 00.443 1.013c.26.26.622.423 1.014.423s.754-.163 1.013-.423c.26-.26.423-.621.423-1.013 0-.54-.621-1.457-1.044-2.073-.087-.133-.168-.25-.234-.362z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Network = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        d="M19.036 3a1.966 1.966 0 00-1.726 2.9l-3.216 3.216a2.6 2.6 0 00-3.206 0l-2.51-2.51c.115-.195.186-.418.186-.66a1.31 1.31 0 00-1.31-1.31 1.31 1.31 0 00-1.309 1.31c0 .721.588 1.309 1.31 1.309.242 0 .466-.07.66-.186l2.51 2.51a2.602 2.602 0 000 3.205L6.281 16.93a1.954 1.954 0 00-1.317-.51c-1.083 0-1.964.88-1.964 1.963 0 1.083.88 1.963 1.964 1.963a1.966 1.966 0 001.726-2.9l4.198-4.198c.362.282.799.47 1.276.53v3.325a1.965 1.965 0 00-1.636 1.934c0 1.083.88 1.964 1.963 1.964 1.083 0 1.964-.88 1.964-1.964 0-.97-.71-1.777-1.636-1.934v-3.325c.477-.06.913-.248 1.275-.53l2.51 2.51a1.29 1.29 0 00-.186.661 1.31 1.31 0 002.618 0 1.31 1.31 0 00-1.309-1.309c-.242 0-.466.07-.66.186l-2.51-2.51a2.603 2.603 0 000-3.206l3.163-3.163c.348.317.81.511 1.316.511 1.083 0 1.964-.88 1.964-1.963C21 3.88 20.12 3 19.036 3z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

const defaultStyle = {
  height: 24,
  width: 24
}

export default {
  Logo,
  Error,
  Down,
  Check,
  Add,
  Delete,
  Back,
  Assist,
  Saver,
  Fast,
  User,
  Menu,
  Cart,
  Pin,
  Location,
  Marker,
  Battery,
  Phone,
  Store,
  Wrench,
  Bolt,
  Parking,
  Lock,
  Unlock,
  Bluetooth,
  Sun,
  Cloud,
  Rain,
  Storm,
  Network
}