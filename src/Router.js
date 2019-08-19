import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './pages/LoginScreen';
import CoursePage from './pages/CoursePage';
import SectionPage from './pages/SectionPage';
import ContentPage from './pages/ContentPage';

//Como sobrescrever as regras da tela de navegação
const AppNavigator = createStackNavigator({
  'Login' : {
    screen: LoginScreen,
    navigationOptions: {
      title: "Bem Vindo"
    }},
  'Main' : {
      screen: CoursePage,
      navigationOptions: {
        title: "Cursos"
    }},
  'Section' : { 
      screen: SectionPage,
      navigationOptions: ({navigation}) => {
        const { course } = navigation.state.params
        return {
          title: course.title
        }  
      }    
    },
    'Content' : {
      screen: ContentPage,
      navigationOptions: ({navigation}) => {
        const { content } = navigation.state.params
        return {
          title: content.title
        }  
      }
    },
}, {
  defaultNavigationOptions: {
    title: "Pessoas",
    headerTintColor: 'white',
    headerStyle : {
      backgroundColor: '#696969',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 25,
    }
  }

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
