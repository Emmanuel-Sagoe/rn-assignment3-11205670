import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
            <View >
                  <View style={styles.frame}>
                      <View  style={styles.Group}>
                      <Text style={styles.hello}>Hello ,Devs</Text>
                      <Text style={styles.subHeading}>14 tasks today</Text>
                      </View>

                      <View>
                      <Image style={styles.profileImage}  source={require('./assets/person.jpg')}/> 
                      </View>      
                   </View>
            </View>   

            <View>
                  <View style={styles.search}> 
                   <Image style={styles.searchBox}  source={require('./assets/Search Boc.jpg')}/> 
                   <Image style={styles.Filter}  source={require('./assets/Filter.jpg')}/>
                  </View>
            </View>

            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0E8',
    flex:1,
  },
  frame: {
    marginLeft:20,
    marginTop:52,
    height:52,
    width:354,
    flexDirection:'row',
    lineHeight:14.4,
  },
  Group: {
    width:170,
    height:52,
  },
  hello: {
  weight:700,
  fontSize:32,
  lineHeight:38.4,
  marginBottom:0,
  width:170,
  height:37,
  },
  subHeading: {
  width:77,
  height:13,
  size:12,
  lineHeight:14.4,
  width:500,
  },
  profileImage: {
  height:45,
  width:46,
  borderRadius:30,
left:114,
  },
  search: {
    width:353,
    height:49,
    marginTop:30,
    marginLeft:20,
    flexDirection:'row',
  },
  searchBox: {
    borderRadius:10,
    width:280,
    height:48,
  },
  Filter: {
    width: 50,
    height:48,
    borderRadius:10,
  },
});
