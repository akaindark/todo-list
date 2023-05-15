import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const AddField = ({
  onClick,
  value,
  checked,
  onChange,
  onChangeCheckbox,
}) => {
  return (
    <div className="field">
      <Checkbox
        checked={checked}
        onChange={onChangeCheckbox}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField
        value={value}
        onChange={onChange}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button onClick={onClick}>
        <AddIcon />
      </Button>
    </div>
  );
};
