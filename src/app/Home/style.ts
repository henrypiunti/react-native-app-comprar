import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D0D2D8",
    paddingTop: 62,
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    gap: 7,
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 42,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  header: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6EC",
  },
  clearButton: {
    marginLeft: "auto",
  },
  clearText: {
    fontSize: 12,
    color: "#828282",
    fontWeight: 600,
  },
  separator: {
    height: 1,
    backgroundColor: "#E4E6EC",
    marginTop: 16
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 62,
    gap: 16
  },
  emptyText: {
    fontSize: 14,
    color: "#828282",
    textAlign: "center",
  },
});
