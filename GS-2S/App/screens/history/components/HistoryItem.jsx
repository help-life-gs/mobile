import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HistoryItem(item) {
    
    return(
        <TouchableOpacity>
            <View style={styles.itemTouch}>
                <Text>{item.temperatura}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemTouch : {

    }
})