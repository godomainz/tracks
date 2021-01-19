import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Block, Button, Input, Text, theme } from 'galio-framework';
interface Props {
    navigation: any;
    text: string;
    routeName: string;
}
const { height, width } = Dimensions.get('window');
const NaviLink = ( { navigation, text, routeName }:Props ) => {

    return (
        <Block flex={1} top >
            <Button color="transparent" shadowless onPress={() => navigation.navigate(routeName)} style={{ width: width * 0.9 }}>
                <Text center color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.75}>
                    {text}
                </Text>
            </Button>
        </Block>
    );

}

const styles = StyleSheet.create({});

export default withNavigation(NaviLink);