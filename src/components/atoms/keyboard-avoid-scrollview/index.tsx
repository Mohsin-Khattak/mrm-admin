import React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { mvs } from 'config/metrices'
type props = {
    keyboardShouldPersistTaps?: 'always' | 'never' | 'handled'
    showsVerticalScrollIndicator?:boolean
    contentContainerStyle?: StyleProp<ViewStyle>
    children?: JSX.Element | JSX.Element[]
}
export const KeyboardAvoidScrollview = (props: props) => {
    const { children, contentContainerStyle, keyboardShouldPersistTaps = 'never',showsVerticalScrollIndicator } = props;
    return (
        <KeyboardAwareScrollView
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}>
            {children}
        </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        paddingHorizontal: mvs(20)
    }
})