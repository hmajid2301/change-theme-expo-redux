import { createMaterialTopTabNavigator } from 'react-navigation';

import PageA from '../screens/PageA';
import PageB from '../screens/PageB';
import { COLORS } from '../themes';


const commonTabOptions = color => ({
  activeTintColor: 'white',
  pressColor: '#fff',
  inactiveTintColor: '#ddd',
  style: {
    backgroundColor: color,
  },
});

const CustomerTabNavigator = createMaterialTopTabNavigator({
  Encoding: {
    screen: PageA,
    navigationOptions: {
      tabBarLabel: 'A',
      tabBarOptions: commonTabOptions(COLORS.red.hexCode),
    },
  },
  Decoding: {
    screen: PageB,
    navigationOptions: {
      tabBarLabel: 'B',
      tabBarOptions: commonTabOptions(COLORS.blue.hexCode),
    },
  },
}, {
  tabBarPosition: 'bottom',
});


export default CustomerTabNavigator;