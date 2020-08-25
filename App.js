import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { photo, avatar } from './assets/images';
const { width } = Dimensions.get('window');
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: (12 / 375) * width,
            paddingRight: (10 / 375) * width,
            paddingVertical: (9 / 375) * width,
            borderBottomWidth: (1 / 375) * width,
            borderBottomColor: '#DADBDA',
          }}>
          <Image
            source={photo}
            style={{ width: (25 / 375) * width, height: (23 / 375) * width }}
          />

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={photo}
              style={{
                width: (25 / 375) * width,
                height: (23 / 375) * width,
                marginRight: (18 / 375) * width,
              }}
            />
            <Image
              source={photo}
              style={{ width: (25 / 375) * width, height: (23 / 375) * width }}
            />
          </View>
        </View>

        <View style={{ height: (104 / 375) * width }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              paddingVertical: (12 / 375) * width,
              borderBottomWidth: (1 / 375) * width,
              borderBottomColor: '#DADBDA',
            }}>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={avatar}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width }}>helge_nilsen</Text>
            </View>
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image />
              <View>
                <Text>tammyolson</Text>
                <Text>tammyolson</Text>
              </View>
            </View>
            <Image />
          </View>
        </View>
      </View>
    );
  }
}

export default App;
