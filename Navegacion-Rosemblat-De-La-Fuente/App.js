import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

function ScreenA1({ navigation }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.screenA}>
      <Text style={styles.text}>Pantalla A1</Text>
      <TextInput placeholder="Nombre" onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Teléfono" onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      <Button title="Enviar datos a A2" onPress={() => navigation.navigate('ScreenA2', { name, phone })} />
    </View>
  );
}

function ScreenA2({ route }) {
  const { name, phone } = route.params || {};
  return (
    <View style={styles.screenA}>
      <Text style={styles.text}>Pantalla A2</Text>
      <Text>Nombre: {name}</Text>
      <Text>Teléfono: {phone}</Text>
    </View>
  );
}

const StackA = createNativeStackNavigator();
function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function ScreenB1({ navigation }) {
  return (
    <View style={styles.screenB}>
      <Text style={styles.text}>Pantalla B1</Text>
      <Button title="Ir a B2" onPress={() => navigation.navigate('ScreenB2')} />
    </View>
  );
}
function ScreenB2() {
  return (
    <View style={styles.screenB}>
      <Text style={styles.text}>Pantalla B2</Text>
      <Image source={{ uri: 'https://i.ytimg.com/vi/oml1-kxxPGM/hqdefault.jpg' }} style={styles.image} />
    </View>
  );
}
const StackB = createNativeStackNavigator();
function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function ScreenC1({ navigation }) {
  return (
    <View style={styles.screenC}>
      <Text style={styles.text}>Pantalla C1</Text>
      <Button title="Ir a C2" onPress={() => navigation.navigate('ScreenC2')} />
    </View>
  );
}
function ScreenC2() {
  return (
    <View style={styles.screenC}>
      <Text style={styles.text}>Pantalla C2</Text>
    </View>
  );
}
const StackC = createNativeStackNavigator();
function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

function ScreenD1({ navigation }) {
  return (
    <View style={styles.screenD}>
      <Text style={styles.text}>Pantalla D1</Text>
      <Button title="Ir a D2" onPress={() => navigation.navigate('ScreenD2')} />
    </View>
  );
}
function ScreenD2() {
  return (
    <View style={styles.screenD}>
      <Text style={styles.text}>Pantalla D2</Text>
    </View>
  );
}
const StackD = createNativeStackNavigator();
function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Home: 'home',
          Buscar: 'search',
          Perfil: 'person',
          Config: 'settings',
        };
        return <Ionicons name={icons[route.name]} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Home" component={StackANavigator} />
      <Tab.Screen name="Buscar" component={StackBNavigator} />
      <Tab.Screen name="Perfil" component={StackCNavigator} />
      <Tab.Screen name="Config" component={StackDNavigator} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
    marginVertical: 5,
    width: '80%',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  screenA: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCDD2',
  },
  screenB: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8E6C9',
  },
  screenC: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BBDEFB',
  },
  screenD: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF9C4',
  },
});