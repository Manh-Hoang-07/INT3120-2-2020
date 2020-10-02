import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import { color } from 'react-native-reanimated';
 
export default class Home extends Component {
  render() {
      return (
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.content]}>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 1(66 questions)        10 points</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 2(275 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 3(429 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 4(330 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 5(330 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 6(176 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box1]}>
                <Text style={[styles.text1]}>PART 7(589 questions)</Text>
              </View>
              <Text style={[styles.text2]}>Complete</Text>
              <Text style={[styles.text2]}>Correct</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
 
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:'blue'
  },
  content: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 110
  },
  box: {
    width: '95%',
    height: 120,
    backgroundColor: '#1067f5',
    marginBottom: 10
  },
  box1: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    marginBottom: 10
  }
});