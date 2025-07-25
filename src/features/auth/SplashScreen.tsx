import { View, Text, StatusBar, Platform, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useStyles } from 'react-native-unistyles'
import { splashStyles } from '../../unistyles/authStyles'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { resetAndNavigate } from '../../utils/NavigationUtils'

const SplashScreen: FC = () => {
  const { styles } = useStyles(splashStyles);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />
      <Animated.View
        style={styles.animatedContainer}
        entering={FadeInDown.delay(400).duration(800)}>
        {/* #entering does is to delay the animation by 400ms and then animate it for 800ms when the component is mounted */}
        <Image
          source={require('@assets/images/tree4.png')}
          style={styles.treeImage} />
        <Text style={{
          marginTop: 16,
          fontSize: 19,
          fontWeight: '200',
          color: 'white',
          textAlign: 'center',
        }}>
          Made in India 🇮🇳
        </Text>
      </Animated.View>
    </View>
  )
}

export default SplashScreen