import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface ButtonProps{
    title:any;
    action:()=>void;
    children?:React.ReactNode
}

const Button:React.FC<ButtonProps>=({title,action,children}:ButtonProps)=> {
  return (
    <Pressable style={{backgroundColor:"#FFFF", borderRadius:10, justifyContent:"center", alignItems:"center", paddingHorizontal:3}}
    onPress={action}>
        {children && <View>{children}</View>}
      <Text>{title}</Text>
    </Pressable>
  )
}
export default Button