import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import RoleSelect from './RoleSelect';
import AdminLogin from '../components/Admin/AdminLogin';
import AdminHome from '@/components/Admin/AdminHome';
import AdminDashboard from '@/components/Admin/AdminDashboard';

import InovetorLogin from '@/components/Inovetor/InovetorLogin';
import InovetorRegister from '@/components/Inovetor/InovetorRegister';
import InovetorHome from '@/components/Inovetor/InovetorHome';

import InvestorLogin from '@/components/Investor/InvestorLogin';
import InvestorRegister from '@/components/Investor/InvestorRegister';
import InvestorHome from '@/components/Investor/InvestorHome'
  

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RoleSelect" component={RoleSelect} />
        
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{headerShown:false}}/>
        <Stack.Screen name="AdminHome" component={AdminHome} />

        <Stack.Screen name="InovetorLogin" component={InovetorLogin} />
        <Stack.Screen name="InovetorRegister" component={InovetorRegister} />
        <Stack.Screen name="InovetorHome" component={InovetorHome} options={{headerShown:false}}/>

        <Stack.Screen name="InvestorLogin" component={InvestorLogin} />
        <Stack.Screen name="InvestorRegister" component={InvestorRegister} />
        <Stack.Screen name="InvestorHome" component={InvestorHome} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}
