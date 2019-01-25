import ThemeManager from 'react-native-color-theme';
 
const colors = new ThemeManager({
 blueTheme: {
     mainColor: '#F24333',
     secondaryColor: '#2D3047',
     statusBarStyle: 'light-content',
     backgroundColor: '#F24333',
     placeholderColor:"white",
     buttonColor:'#2D3047',
 },
 redTheme: {
     mainColor: 'red',
     statusBarColor: '#ff4e00',
     statusBarStyle: 'light-content',
     backgroundColor: '#ff7100',
 }
});

export default colors;
