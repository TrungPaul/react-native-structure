
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import SwiperControl from '../libs/swiper';
import ButtonControl from '../libs/button-control';
import IMAGES_NAME from '../assets';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image source={IMAGES_NAME.LOGO} />
            <Text style={styles.firstText}>
              {/* This is Health UX Kit,{'\n'}Welcome! */}
              This is Wellcome Screen
            </Text>
            <Text style={styles.secondText}>
              A health vertical UI kit made with{'\n'}
              love for Adobe XD
            </Text>
          </View>

          <View style={{marginTop: 30, height: HEIGHT / 2}}>
            <SwiperControl />
          </View>
        </View>

        <View style={{height: 150, alignItems: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  logo: {
    marginTop: 30,
    alignItems: 'center',
    fontWeight: '700',
  },
  firstText: {
    marginTop: 20,
    color: '#205072',
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '300',
  },
  secondText: {
    marginTop: 50,
    fontSize: 13,
    color: '#68B2A0',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default WelcomeScreen;
