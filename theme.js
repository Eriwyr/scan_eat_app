import ThemeManager from 'react-native-color-theme';
 
const colors = new ThemeManager({
 blueTheme: {
     mainColor: '#9BE564',
     secondaryColor: '#EF8354',
     statusBarStyle: 'light-content',
     backgroundColor: '#9BE564',
     placeholderColor:"white",
     buttonColor:'#EF8354'
 },
 redTheme: {
     mainColor: 'red',
     statusBarColor: '#ff4e00',
     statusBarStyle: 'light-content',
     backgroundColor: '#ff7100',
 }
});

export default colors;
