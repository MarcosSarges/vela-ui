import React from 'react'
import {Text as RNText} from 'react-native'
import {useTheme} from '../lib/theme'

const sizeStyles = {
  m: {
    fontSize: 14
  },
  l: {
    fontSize: 16
  }
}

const Text = ({children, style, size, ...props}) => {
  const {colors} = useTheme()
  const sizeStyle = sizeStyles[size || 'm']

  const baseStyle = {
    fontWeight: '500',
    color: colors.text,
    fontFamily: 'Barlow'
  }
  return (
    <RNText style={[baseStyle, sizeStyle, style]} {...props}>
      {children}
    </RNText>
  )
}

export default Text
