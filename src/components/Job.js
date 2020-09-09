import React from "react";
import {View,Text,Image} from "react-native";
import { Button, Card, Title, Paragraph, Badge, Colors, Subheading, Divider } from 'react-native-paper';


export default function Job({job}){
    
    return (
            <Card style={{marginBottom:16,elevation:3}}>
                 <Card.Title title={job.title} 
                 subtitle={job.company}  
                 right={(props)=><Image {...props} resizeMode={'contain'} source={{uri:job.company_logo}} style={{width:100,height:100}}/>}/>
               <Card.Content>
                   <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                    <Badge style={{backgroundColor:Colors.purple100,fontSize:12}}>{job.type}</Badge>
                    <Badge style={{backgroundColor:Colors.purple100,fontSize:12}}>{job.location}</Badge>
                   </View>
                <Divider/>
                <View style={{paddingVertical:2,marginVertical:4,flexDirection:'row',justifyContent:'space-between'}}>
                    <Subheading>Posted on : {new Date(job.created_at).toLocaleDateString()}</Subheading>
                    <Button mode="contained" uppercase={false}>View details</Button>
                </View>
               </Card.Content>
            </Card>
    )
}