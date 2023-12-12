import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import i18next from "./lib/i18n";

export default function App() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t("welcome")}</Text>
      <View style={styles.btnContainer}>
        <Text
          style={styles.langBtn}
          onPress={() => i18next.changeLanguage("en")}
        >
          English
        </Text>
        <Text
          style={styles.langBtn}
          onPress={() => i18next.changeLanguage("tr")}
        >
          Türkçe
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  langBtn: {
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
