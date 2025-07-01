import { View } from 'react-native'
import React, { useEffect } from 'react'
import { useStyles } from 'react-native-unistyles'
import { homeStyles } from '@unistyles/homeStyles'
import LottieView from 'lottie-react-native'
import { useAppSelector } from '@states/reduxHook'
import { Colors } from '@unistyles/Constants'
import Animated, { 
  useAnimatedStyle, 
  interpolateColor, 
  useSharedValue, 
  withTiming 
} from 'react-native-reanimated'

const Graphics = () => {
  const { styles } = useStyles(homeStyles)
  const isVegMode = useAppSelector((state) => state.user.isVegMode)
  
  // Shared value for color animation
  const colorProgress = useSharedValue(0)

  // Update color progress when vegMode changes
  useEffect(() => {
    colorProgress.value = withTiming(isVegMode ? 1 : 0, {
      duration: 300 // 300ms smooth transition
    })
  }, [isVegMode])

  // Animated style for background color
  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      ["rgb(245, 130, 15)", Colors.active] // Orange to Green transition
    )
    
    return {
      backgroundColor
    }
  })

  return (
    <Animated.View 
      style={[
        styles.lottieContainer,
        animatedBackgroundStyle
      ]} 
      pointerEvents="none"
    >
      <LottieView
        enableMergePathsAndroidForKitKatAndAbove
        enableSafeModeAndroid
        style={styles.lottie}
        source={require('@assets/animations/animation1.json')}
        autoPlay
        loop
        hardwareAccelerationAndroid
      />
    </Animated.View>
  )
}

export default Graphics
