import React, {useRef} from 'react'
import {View, SafeAreaView, Animated} from 'react-native'
import {useTheme} from '../lib/theme'
import Text from './Text'
import Heading from './Heading'
import Spacer from './Spacer'
import {Menu, Back} from './Icons'

function Navbar({children, title, left, leftIcon: LeftIcon, rightIcon: RightIcon, style}) {
  const {colors} = useTheme()
  const scroll = useRef(new Animated.Value(0)).current
  const basePageStyle = {
    flex: 1,
    backgroundColor: colors.background
  }
  const baseStyle = {
    backgroundColor: scroll.interpolate({
      inputRange: [0, 90],
      outputRange: [colors.navbar + '00', colors.navbar],
      extrapolate: 'clamp',
      useNativeDriver: true
    })
  }
  const baseContentStyle = {
    paddingLeft: 24,
    paddingRight: 24,
    borderBottomWidth: 1,
    borderBottomColor: scroll.interpolate({
      inputRange: [0, 70],
      outputRange: [colors.border + '00', colors.border + 'AA'],
      extrapolate: 'clamp',
      useNativeDriver: true
    })
  }
  const baseNavStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  const baseIconStyle = {
    width: 22,
    height: 22,
    color: colors.nav
  }
  const baseActionStyle = {
    color: colors.nav,
    fontSize: 16,
    fontWeight: '500'
  }
  const baseTitleStyle = {
    color: colors.title
  }
  return (
    <View style={[basePageStyle, style]}>
      <Animated.View style={baseStyle}>
        <SafeAreaView />
        <Animated.View style={baseContentStyle}>
          <Spacer size="s" />
          <View style={baseNavStyle}>
            {LeftIcon && <LeftIcon style={baseIconStyle} />}
            {RightIcon && <RightIcon style={baseIconStyle} />}
          </View>
          <Spacer size="s" />
          <Heading style={baseTitleStyle}>{title}</Heading>
          <Spacer />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        overScrollMode={'never'}
        scrollEventThrottle={16}
        contentContainerStyle={{flex: 1}}
        onScroll={Animated.event([
          {
            nativeEvent: {contentOffset: {y: scroll}}
          }
        ])}>
        {children}
      </Animated.ScrollView>
    </View>
  )
}

export default Navbar
