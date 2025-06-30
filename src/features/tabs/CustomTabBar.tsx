import {View, Text, Dimensions} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSharedState} from './SharedContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { tabStyles } from '@unistyles/tabStyles';
import { 
  DeliveryTabIcon, 
  ReorderTabIcon, 
  DiningTabIcon, 
  LiveTabIcon 
} from './tabIcon';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

const CustomTabBar: FC<BottomTabBarProps> = props => {
  const {scrollY} = useSharedState();
  
  const {state, navigation} = props;
  const bottom = useSafeAreaInsets();
  
  const {styles} = useStyles(tabStyles);
  const isLiveTabFocused = state.routes[state.index].name === 'Live';

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: 
          scrollY.value===1
          ?withTiming(100,{ duration: 300 })
          :withTiming(0, { duration: 300 }),
        },
      ],
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    const baseLeft = 10;
    let slideValue = state.index == 3 ? 0.23 : 0.24;
    return {
      left: withTiming(baseLeft + state.index * screenWidth * slideValue),
    };
  });

  return (
    <>
    <Animated.View>
        
    </Animated.View>
    </>
  );
};

export default CustomTabBar;
