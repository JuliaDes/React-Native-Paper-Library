import * as React from 'react';
import { Appbar, Avatar, Card, Provider as PaperProvider, Title, Paragraph, Button } from 'react-native-paper';
import { StyleSheet, Image, View } from 'react-native';

export default function App() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <PaperProvider>

    <Appbar.Header>
    <Appbar.Content style={styles.txt} titleStyle={{fontSize:25,fontWeight:'bold'}} color='black' title="Activity Tracker" />
    <Avatar.Image style={styles.img} size={45} source={{uri: 'https://www.veloderoute.com/photos/news/zooms/3de2f79cf524ded394633cb39c824a31158754945763.jpg'}}/>
  </Appbar.Header>

  <Card style={{borderColor: "black", borderWidth:2, margin:5}}>
    <Card.Content>
     <View style={{flexDirection: "row"}}>
     <View style={{alignItems: "flex-start", flex: 1 }}>
       <Paragraph>26 mai 2021</Paragraph>
<Title style={{fontWeight:'bold'}}>Marche à pied</Title>

</View>
<View style={{alignItems: "flex-end", flex: 1}}>
<Image style={styles.logo} source={{ uri: 'https://www.gpszapp.net/wp-content/uploads/marche-a-pied.jpg'}} />
</View>
     </View>
     <View style={{flexDirection: "row"}}>
     <View style={{alignItems: "flex-start", flex: 1 }}>
<Title style={{fontSize:12, fontWeight:'bold'}}>Distance</Title>
      <Paragraph>6 km</Paragraph>
</View>
<View style={{alignItems: "flex-end", flex: 1}}>
<Title style={{fontSize:12, fontWeight:'bold'}} >Durée</Title>
      <Paragraph>0h59mn</Paragraph>
</View>
     </View>
    </Card.Content>
  </Card>

  <Card style={{borderColor: "black", borderWidth:2, margin:5}}>
    <Card.Content>
     <View style={{flexDirection: "row"}}>
     <View style={{alignItems: "flex-start", flex: 1 }}>
       <Paragraph>26 mai 2021</Paragraph>
<Title style={{fontWeight:'bold'}}>Vélo</Title>

</View>
<View style={{alignItems: "flex-end", flex: 1}}>
<Image style={styles.logo} source={{uri: 'https://www.veloderoute.com/photos/news/zooms/3de2f79cf524ded394633cb39c824a31158754945763.jpg' }} />
</View>
     </View>
     <View style={{flexDirection: "row"}}>
     <View style={{alignItems: "flex-start", flex: 1 }}>
<Title style={{fontSize:12, fontWeight:'bold'}}>Distance</Title>
      <Paragraph>10 km</Paragraph>
</View>
<View style={{alignItems: "flex-end", flex: 1}}>
<Title style={{fontSize:12, fontWeight:'bold'}} >Durée</Title>
      <Paragraph>1h38mn</Paragraph>
</View>
     </View>
    </Card.Content>
  </Card>

  <Card style={{borderColor: "black", borderWidth:2, margin:5}}>
    <Card.Content>
     <View style={{flexDirection: "row"}}>
     <View style={{alignItems: "flex-start", flex: 1 }}>
       <Paragraph>20 mai 2021</Paragraph>
<Title style={{fontWeight:'bold'}}>Marche à pied</Title>

</View>
<View style={{alignItems: "flex-end", flex: 1}}>
<Image style={styles.logo} source={{ uri: 'https://www.gpszapp.net/wp-content/uploads/marche-a-pied.jpg' }} />
</View>
     </View>
     <View style={{flexDirection: "row"}}>
     <View style={{alignItems: "flex-start", flex: 1 }}>
<Title style={{fontSize:12, fontWeight:'bold'}}>Distance</Title>
      <Paragraph>2 km</Paragraph>
</View>
<View style={{alignItems: "flex-end", flex: 1}}>
<Title style={{fontSize:12, fontWeight:'bold'}} >Durée</Title>
      <Paragraph>0h26mn</Paragraph>
</View>
     </View>
    </Card.Content>
  </Card>
  <Appbar style={styles.bottom}>
      <Avatar.Text labelStyle={{ backgroundColor: '#BDBDBD', width:60,height:60 }} style={{marginStart:30}} size={28} label="Home" />
      <Avatar.Text labelStyle={{ backgroundColor: '#BDBDBD', width:60,height:60 }} style={{marginStart:60}} size={28} label="Histo'" />
      <Avatar.Text labelStyle={{ backgroundColor: '#BDBDBD', width:60,height:60 }} style={{marginStart:60}} size={28} label="Ajout'" />
      <Avatar.Text labelStyle={{ backgroundColor: '#BDBDBD', width:60,height:60 }} style={{marginStart:60}} size={28} label="Param'" />
  </Appbar>

  
</PaperProvider>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  txt:{
    alignItems: 'flex-start',
    color: 'black'
  },
  img:{
    marginEnd: 25,

  },
  logo: {
    width:100,
    height:100
  }
});