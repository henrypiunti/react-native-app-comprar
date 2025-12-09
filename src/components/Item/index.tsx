import { Text, TouchableOpacity, View } from "react-native";
import { Trash2 } from "lucide-react-native";

import { styles } from "./styles";
import { FilterStatus } from "@/enums/FilterStatus";
import { StatusIcon } from "../StatusIcon";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: ItemData;
  onPress: () => void;
  onDelete: () => void;
};

export function Item({ data, onPress, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity onPress={onDelete}>
        <Trash2 size={16} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}
