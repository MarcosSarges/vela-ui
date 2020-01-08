import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {useTheme} from '../lib/theme'

export const Marker = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 97.14 128.36" style={[defaultStyle, style]} {...props}>
      <Path
        d="M97.14 53.86a81.58 81.58 0 0 0-1.27-14.42C91.16 13.12 69.82 0 48.5 0h.07a51.62 51.62 0 0 0-11.94 1.4c-16.8 4-31.54 16.7-35.36 38A82.54 82.54 0 0 0 0 53.86a81.42 81.42 0 0 0 48.57 74.5 81.4 81.4 0 0 0 48.57-74.5z"
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


export const Parking = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="3 4 16 18" style={[defaultStyle, style]} {...props}>
      <Path
        d="M11.184 6.382c1.86 0 3.288.33 4.284.99.996.648 1.494 1.716 1.494 3.204 0 1.5-.504 2.586-1.512 3.258-1.008.66-2.448.99-4.32.99h-.882V19H7.44V6.706c.612-.12 1.26-.204 1.944-.252a26.102 26.102 0 011.8-.072zm.18 2.394c-.204 0-.408.006-.612.018-.192.012-.36.024-.504.036v3.6h.882c.972 0 1.704-.132 2.196-.396.492-.264.738-.756.738-1.476 0-.348-.066-.636-.198-.864-.12-.228-.3-.408-.54-.54a2.134 2.134 0 00-.846-.288 6.37 6.37 0 00-1.116-.09z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Location = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 1024 1024" style={[defaultStyle, style]} {...props}>
      <Path
        d="M910.068046 199.460571l-365.714286 731.428571q-9.728 19.968-32.548571 19.968-2.852571 0-8.557714-1.170286-12.580571-2.852571-20.260571-12.873143t-7.68-22.601143l0-329.142857-329.142857 0q-12.580571 0-22.601143-7.68t-12.873143-20.260571 2.267429-23.990857 16.603429-17.115429l731.428571-365.714286q7.460571-4.022857 16.603429-4.022857 15.433143 0 25.746286 10.825143 8.557714 7.972571 10.605714 19.748571t-3.730286 22.601143z"
        fill={'transparent'}
        stroke={(style && style.color) || colors.text}
        strokeWidth={96}
      />
    </Svg>
  )
}

export const Bolt = ({style, color, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 398.528 398.528" style={[defaultStyle, style]} {...props}>
      <Path
        d="M315.232 9.015C311.883 3.276 305.681 0 298.244 0h-91.308c-10.9 0-22.224 7.113-26.93 16.924L83.17 218.041c-3.162 6.56-2.967 13.518.471 19.037 3.463 5.568 9.592 8.811 16.859 8.966l71.662.902-51.877 129.675c-1.276 3.235-3.959 10.014.821 16.981 2.089 3.056 5.674 4.926 9.364 4.926h.837c6.999 0 11.217-5.308 13.241-7.868l167.628-210.49c7.153-8.966 4.202-17.013 3.121-19.354-1.122-2.243-5.625-9.592-17.046-9.592h-53.34l69.8-122.985c3.659-6.487 3.862-13.51.521-19.224z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Logo = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 149.77 184.66" style={[defaultStyle, style]} {...props}>
      <Path
        fill={(style && style.color) || colors.text}
        d="M130.66 111.65c-17.33 27.27-52 53.6-86.63 70.16-16.34 7.81-37.45-.53-38.92-23.87-.9-14.33 10.89-72.16 11.36-76.69.9-8.37-5.64-10.92-14.48-2.69l-2-3s39.59-38.14 43.28-41.84 18.94-17.23 25 2.09-4.55 60.24-6.62 70.12c-2.24 10.75-12.49 53.43 0 53.43 17.61 0 32.41-48.73 34.66-57.65 2.47-9.88 13-77.89-8.3-56.56l-2-2.88s31.59-30.61 39.54-35.72S144-7.37 148.28 11.66s-.29 72.71-17.62 100"
      />
    </Svg>
  )
}

export const Wrench = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        fill={(style && style.color) || colors.text}
        d="M4.5.257l3.771 3.771c.409 1.889-2.33 4.66-4.242 4.242L.258 4.5A6.345 6.345 0 000 6.292a6.268 6.268 0 006.761 6.247 3.209 3.209 0 012.514.931l9.662 9.662a2.966 2.966 0 004.195-4.195L13.47 9.274a3.21 3.21 0 01-.931-2.514 6.27 6.27 0 00-1.82-4.93A6.236 6.236 0 006.291 0C5.688 0 5.084.086 4.5.257zM22 21a1 1 0 11-1.998.002A1 1 0 0122 21z"
      />
    </Svg>
  )
}

export const Phone = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 -256 1792 1792" style={[defaultStyle, style]} {...props}>
      <Path
        d="M1567.458 997.017q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5q-32-9-47.5-14.5t-55.5-20.5q-40-15-49-18-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5q-5.5-15.5-14.5-47.5t-12.5-57.5q-3.5-25.5-3.5-52.5 0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5q16 28.5 31 53.5 3 4 17.5 25t21.5 35.5q7 14.5 7 28.5 0 20-28.5 50t-62 55q-33.5 25-62 53t-28.5 46q0 9 5 22.5t8.5 20.5q3.5 7 14 24t11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14q7 3.5 20.5 8.5t22.5 5q18 0 46-28.5t53-62q25-33.5 55-62t50-28.5q14 0 28.5 7t35.5 21.5q21 14.5 25 17.5 25 15 53.5 31t63.5 35q35 19 54 30 70 35 76 53 3 7 3 21z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}
export const Store = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 971.67 971.67" style={[defaultStyle, style]} {...props}>
      <Path
        d="M52.53 490.037v444.255h215.305v-280h156v280h495.306V490.036c32.094-26.979 52.529-67.4 52.529-112.509V245.466L842.755 37.378H132.781L0 245.21v132.317c0 45.11 20.436 85.531 52.53 112.51zm231.381-384.659l-57.994 150.628v121.521a78.45 78.45 0 01-8.202 34.988c-12.924 26.03-39.779 43.971-70.757 43.971a78.592 78.592 0 01-26.429-4.564c-30.577-10.896-52.53-40.124-52.53-74.394V265.079l102.031-159.7h113.881v-.001zm167.924 0v272.15a78.45 78.45 0 01-8.202 34.988c-12.924 26.03-39.779 43.971-70.757 43.971s-57.833-17.941-70.757-43.971a78.454 78.454 0 01-8.202-34.988V268.645l62.86-163.266 95.058-.001zm163.058 0l62.86 163.267v108.883a78.45 78.45 0 01-8.202 34.988c-12.924 26.03-39.779 43.971-70.757 43.971-30.979 0-57.833-17.941-70.757-43.971a78.454 78.454 0 01-8.202-34.988v-272.15h95.058zm189.998 0l98.779 159.445v112.705c0 34.27-21.953 63.499-52.529 74.394a78.59 78.59 0 01-26.43 4.565c-30.978 0-57.832-17.941-70.756-43.971a78.454 78.454 0 01-8.202-34.988V256.007L687.759 105.38h117.132v-.002zm46.25 760.914H491.835v-280h-292v280H120.53V522.1a147.207 147.207 0 0026.429 2.387c45.359 0 85.98-20.652 112.959-53.052 26.979 32.399 67.6 53.052 112.958 53.052 45.359 0 85.98-20.652 112.959-53.052 26.979 32.399 67.601 53.052 112.959 53.052s85.98-20.651 112.959-53.052c26.979 32.399 67.6 53.052 112.958 53.052 9.021 0 17.853-.822 26.43-2.387v344.192z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Dropdown = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 240.811 240.811" style={[defaultStyle, style]} {...props}>
      <Path
        d="M220.088 57.667l-99.671 99.695-99.671-99.707a12.147 12.147 0 00-17.191 0c-4.74 4.752-4.74 12.451 0 17.203l108.261 108.297c4.74 4.752 12.439 4.752 17.179 0L237.256 74.859c4.74-4.752 4.74-12.463 0-17.215-4.728-4.729-12.428-4.729-17.168.023z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Back = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 16 16" style={[defaultStyle, style]} {...props}>
      <Path
        d="M14.583 6.593H3.413l4.88-4.88a1.008 1.008 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-6.59 6.59a1 1 0 0 0 0 1.41l6.59 6.59a1 1 0 1 0 1.41-1.41l-4.88-4.88h11.17a1 1 0 0 0 0-2z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Menu = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 28.44 20.07" style={[defaultStyle, style]} {...props}>
      <Path
        fill={(style && style.color) || colors.text}
        d="M27.58 2.2H.86A1.13 1.13 0 0 1 0 .82 1.12 1.12 0 0 1 .86 0h26.72a1.13 1.13 0 0 1 .82 1.38 1.12 1.12 0 0 1-.82.82z"
      />
      <Path
        fill={(style && style.color) || colors.text}
        d="M27.58 11.14H.86A1.13 1.13 0 0 1 0 9.76a1.1 1.1 0 0 1 .82-.82h26.76a1.14 1.14 0 0 1 0 2.2z"
      />
      <Path
        fill={(style && style.color) || colors.text}
        d="M27.58 20.07H.86A1.12 1.12 0 0 1 0 18.7a1.1 1.1 0 0 1 .82-.82h26.76a1.12 1.12 0 0 1 .82 1.37 1.1 1.1 0 0 1-.82.82z"
      />
    </Svg>
  )
}

export const Cart = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 26.01 26" style={[defaultStyle, style]} {...props}>
      <Path
        d="M7.8 20.8a2.6 2.6 0 1 0 2.6 2.6 2.6 2.6 0 0 0-2.6-2.6zM0 1.3a1.31 1.31 0 0 0 1.3 1.3h1.3l4.68 9.87-1.75 3.17A2.6 2.6 0 0 0 7.8 19.5h14.3a1.3 1.3 0 0 0 0-2.6H7.8l1.43-2.6h9.69a2.58 2.58 0 0 0 2.27-1.3l4.65-8.44a1.29 1.29 0 0 0-1.13-1.96H5.47L4.6.74A1.29 1.29 0 0 0 3.43 0H1.3A1.31 1.31 0 0 0 0 1.3zm20.8 19.5a2.6 2.6 0 1 0 2.6 2.6 2.6 2.6 0 0 0-2.6-2.6z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Network = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 1000 1000" style={[defaultStyle, style]} {...props}>
      <Path
        d="M227.34 13.64c-22.6 8.39-38.74 23.03-49.72 45.42-5.17 10.76-5.81 14.21-5.81 35.52 0 22.39.43 24.54 6.89 37.88 15.71 31.86 51.87 51.87 86.31 47.78l10.33-1.08 70.38 103.75 70.39 103.75-9.25 10.33c-20.02 22.39-32.29 53.81-32.5 84.59l-.22 18.94-12.91 3.87c-7.1 2.15-37.45 10.98-67.37 19.59l-54.24 15.71-12.91-12.27c-7.1-6.67-18.3-14.85-25.18-18.08-11.19-5.17-15.07-5.81-35.08-5.81-20.02 0-23.89.65-35.08 5.81-24.14 11.42-39.42 28.86-47.17 54.26-9.04 30.13-.65 63.28 21.74 85.02 49.72 48.43 132.16 21.74 144.86-46.71 2.37-12.27 3.01-13.56 9.04-15.28 3.66-1.08 33.79-9.69 67.16-19.37 33.36-9.47 61.35-17.43 62.42-17.43 1.08 0 4.31 4.09 7.32 8.82 7.32 11.84 29.06 32.07 43.69 40.47 6.67 3.87 11.62 7.96 11.19 9.47-.43 1.51-13.99 47.57-30.13 102.67-15.93 55.1-29.92 102.03-30.99 104.61-1.51 3.45-4.52 4.95-12.05 5.6-24.11 2.8-51.44 23.89-63.07 48.64-5.17 10.98-5.81 14.85-5.81 35.95 0 21.74.43 24.75 6.24 36.59 8.18 16.57 24.54 32.93 41.11 41.11 11.84 5.81 14.85 6.24 36.59 6.24 21.74 0 24.75-.43 36.59-6.24 16.57-8.18 32.93-24.54 41.11-41.11 5.81-11.84 6.24-14.85 6.24-36.59 0-21.31-.65-24.97-5.81-36.16-3.44-7.53-11.19-17.65-19.16-25.62l-13.13-13.35 28.2-95.78c15.5-52.74 29.49-100.95 31.43-106.98l3.23-10.98 14.85-1.51c19.59-1.72 39.39-7.96 54.67-17.22l12.49-7.53 84.38 76.41c52.52 47.79 84.16 77.92 83.95 80.07-.21 1.94-1.51 10.12-3.01 18.3-7.32 37.67 13.34 76.84 49.07 93.63 10.98 5.17 15.07 5.81 35.08 5.81 20.02 0 24.11-.65 34.87-5.81 14.42-6.67 31.64-21.96 39.18-34.87 23.46-40.25 10.33-93.2-29.06-116.88-24.54-14.64-51.88-16.79-78.14-6.03l-12.7 5.17-10.12-9.04c-5.38-4.95-43.48-39.39-84.59-76.63l-74.47-67.36 6.46-12.7c16.57-32.93 17-79.86.86-111.71-3.01-5.81-5.38-11.84-5.17-13.35 0-2.37 72.97-71.03 125.92-118.82l13.99-12.7 9.04 3.66c13.99 5.81 39.17 6.89 54.24 2.37 44.77-12.7 71.68-58.33 60.48-102.24-11.84-46.28-57.9-75.12-102.03-63.71-27.98 7.1-45.63 21.09-57.69 45.63-10.55 21.31-12.27 40.68-5.38 63.28 2.58 8.61 4.09 16.36 3.01 17.22-1.72 1.51-119.25 109.99-131.09 120.97l-6.67 6.24-12.7-7.75c-20.66-12.48-38.96-17.22-66.51-17.22-15.93.22-27.34 1.29-34.87 3.66l-11.19 3.66-69.96-103.32-69.96-103.1 7.53-10.98c10.76-15.93 14.42-31 13.34-53.38-1.08-23.03-8.39-39.39-24.11-55.32-16.79-16.57-32.29-23.03-57.26-23.89-16.1-.65-22.78.22-31.6 3.44z"        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

const defaultStyle = {
  height: 16,
  width: 16
}

export default {
  Cart,
  Menu,
  Back,
  Dropdown,
  Phone,
  Store,
  Wrench,
  Logo,
  Bolt,
  Location,
  Pin,
  Marker,
  Parking,
  Network
}