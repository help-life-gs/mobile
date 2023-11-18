import { FlatList } from "react-native";
import HistoryItem from "../HistoryItem";

export default function HistoryList() {

    //campos
    // hit temp ox bat long lat

    const historicos = [
        
    ]

    return (
        <FlatList
            data={historicos}
            renderItem={({ item }) => <HistoryItem {...item} />}
            keyExtractor={item => item.id}
        />
    )
}