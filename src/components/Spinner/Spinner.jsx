import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner() {
  return (
    <Stack sx={{ color: 'grey.500', display: 'block' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="primary" />
    </Stack>
  );
}