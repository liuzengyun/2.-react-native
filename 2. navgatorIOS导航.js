// 注意：坑
// es6调用自定义方法
// onPress={this.fangfa.bind(this)}
// ScrollView 会显示在navgator下面，如果使用View上面部分会被navgator遮挡
import React, {
  AppRegistry,
  Component,
  StyleSheet,

  View,
  ListView,
  ScrollView,
  Image,
  Text,
  NavigatorIOS,
} from 'react-native';

class zhang extends Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.nav}
          initialRoute={{
            component: myList,
            title: '首页',
            passProps: {},
          }}
        />
    );
  }
}

// 定义调用的模板
class myList extends Component {
  render() {
    return (
      // 如果使用了es6 就要使用以下的语法， bind(this);  this.方法名称，然后.bind(this);
      <View style={styles.container}>
        <ScrollView>
          <Text onPress={this.goTo.bind(this)} style={styles.list}>这是头条信息1</Text>
          <Text onPress={this.goTo.bind(this)} style={styles.list}>这是头条信息2</Text>
          <Text onPress={this.goTo.bind(this)} style={styles.list}>这是头条信息3</Text>
        </ScrollView>
      </View>
    )
  }

  // 自定义函数
  goTo() {
    //this.props.navigator获取导航内容
    this.props.navigator.push({
      component: Detail,
      title: '列表信息',
      rightButtonTitle: '输出',
      passProps: {},
      onRightButtonPress: function() {
        alert("单击事件");
      }
    })
  }
}

// 详细信息模板
class Detail extends Component {
  render() {
    return(
      <ScrollView>
        <Text style={styles.title}>
          这是标题内容
        </Text>
        <Text style={styles.content}>
          这是具体内容信息
        </Text>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  nav: {
    flex: 1,
  },
  list: {
    fontSize: 18,
  }
})

AppRegistry.registerComponent('zhang', () => zhang);