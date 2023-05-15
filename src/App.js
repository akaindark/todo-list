import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed,
        },
      ];
    case "REMOVE_TASK":
      return state.filter((_, i) => i !== action.id);
    default:
      return state;
  }
}

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, []);

  const addTask = () => {
    if (inputValue) {
      const stateLength = state.length ? state[state.length - 1].id + 1 : 1;

      dispatch({
        type: "ADD_TASK",
        id: stateLength,
        text: inputValue,
        completed: checked,
      });
    }
    setInputValue("");
    setChecked(false);
  };
  const removeTask = (index) => {
    dispatch({
      type: "REMOVE_TASK",
      id: index,
    });
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={addTask}
          checked={checked}
          onChangeCheckbox={() => setChecked(!checked)}
        />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((obj, i) => (
            <Item
              key={obj.id}
              text={obj.text}
              completed={obj.completed}
              onClickRemove={() => removeTask(i)}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
