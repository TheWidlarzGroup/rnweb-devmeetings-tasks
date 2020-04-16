const space = 10;

export const theme = {
  colors: {
    green: "green",
    red: "red",
    light: "#efefef",
    grey: "#8c8c8c",
  },
  space,
};

export const commonStyles = {
  inputWrapper: {
    padding: space * 2,
  },
  input: { backgroundColor: theme.colors.red, padding: space },
  todosWrapper: {
    width: "100%",
    padding: space,
  },
  todoContainer: {
    backgroundColor: theme.colors.grey,
    marginTop: space,
    marginBottom: space,
    padding: space * 2,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
};
