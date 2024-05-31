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

                      <View>
                          <Text style={styles.categories}>Categories</Text>
                      </View>

                      <View>
                          <View style={styles.Group9}>
                            <View>
                            <Image style={styles.categoryCard} source={require('./assets/Categories card.jpg')}/>
                            </View>

                            <View>
                            <Image style={styles.categoryCard2} source={require('./assets/Categories card (1).jpg')}/>
                            </View>

                          </View>

                      </View>

                      
                      <View>
                          <Text style={styles.outgoingTask}>Outgoin Task</Text>
                      </View>

                      <View>
                      <Image style={styles.rectangle} source={require('./assets/Rectangle 4.jpg')}/>
                      <Text style={styles.mobileappdevelopment}>Mobile App Development</Text>
                      </View>

                      <View>
                      <Image style={styles.rectangle} source={require('./assets/Rectangle 4.jpg')}/>
                      </View>

                      <View>
                      <Image style={styles.rectangle} source={require('./assets/Rectangle 4.jpg')}/>
                      </View>

                      <View>
                      <Image style={styles.rectangle} source={require('./assets/Rectangle 4.jpg')}/>
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
  left:112,
  },
  search: {
    width:353,
    height:49,
    marginTop:30,
    left:20,
    flexDirection:'row',
  },
  searchBox: {
    borderRadius:10,
    width:260,
    height:48,
  },
  Filter: {
    width: 50,
    height:48,
    left:20,
    borderRadius:10,
  },
  categories: {
    left:20,
    width:100,
    height:24,
    top:20,
    weight:700,
    fontSize:20,
    lineHeight:24,
  },
  Group9: {
    flexDirection:'row',
  
    
  },
  categoryCard: {
    left:20,
    borderRadius:10,
    top:30,
    width:160,
  },
  categoryCard2: {
    left:30,
    right:20,
    borderRadius:10,
    top:30,
    width:155,
  },
  outgoingTask: {
    left:20,
    top:50,
    height:24,
    width:120,
    fontSize:20,
    weight:700,
    lineHeight:24,
  },
  rectangle: {
    width:324,
    height:128,
    borderRadius:15,
    left:15,
    top:60,
    marginBottom:20,
  },
  mobileappdevelopment: {
    left:30,
    top:-45,
  }
});
