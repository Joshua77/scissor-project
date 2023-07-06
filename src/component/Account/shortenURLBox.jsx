import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  TextField,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ShortenURLBox = ({ handleClose, createShortenLink }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    longURL: "",
  });

  const [form, setForm] = useState({
    name: "",
    longURL: "",
  });

  const handleChange = (event) =>
    setForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));
  //check this line of code incase there is an error later in the future
  const handleSubmit = async () => {
    const errors = {};
    const tName = form.name.trim();
    const tLongURL = form.longURL.trim();
    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);

    if (tName.length < 3 || tName.length > 15) {
      errors.name = "The name should be min 3 and max 15 char long";
    }
    if (!regex.test(tLongURL)) {
      errors.longURL = "URL is not valid";
    }

    if (!!Object.keys(errors).length) return setErrors(errors);
    setLoading(true);
    try {
      createShortenLink(tName, tLongURL);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Dialog open={true} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          Create Short URL
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box mb={3}>
          <TextField
            error={!!errors.name}
            helperText={errors.name}
            value={form.name}
            name="name"
            label="Name"
            onChange={handleChange}
            fullWdith
            variant="filled"
          />
        </Box>
        <TextField
          error={!!errors.longURL}
          helperText={errors.longURL}
          value={form.longURL}
          name="longURL"
          label="Long URL"
          onChange={handleChange}
          fullWdith
          variant="filled"
        />
      </DialogContent>

      <DialogActions>
        <Box mr={2} my={1}>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="filled"
            disableElevetaion
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color="inherit" size="23" />
            ) : (
              "Create Short URL"
            )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ShortenURLBox;
