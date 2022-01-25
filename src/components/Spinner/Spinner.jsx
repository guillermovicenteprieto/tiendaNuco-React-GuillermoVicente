import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Skeleton } from "@mui/material";

export default function Spinner() {
  return (
    <Stack
      sx={{ color: "orange.500", display: "block" }}
      direction="row"
    >
      <CircularProgress color="primary" />
      <CircularProgress color="success" />
      <CircularProgress color="secondary" />
      <CircularProgress color="warning" />
      <CircularProgress color="error" />
      <Skeleton
        sx={{ bgcolor: "purple.500" }}
        animation="wave"
        variant="rectangular"
        height={118}
      />
    </Stack>
  );
}
