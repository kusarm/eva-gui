import React, {ChangeEvent} from 'react';
import {Grid, Stack, Typography, Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormValues from '../utility/formValues';
import {IOption} from '../models/IOption';
import OptionClusterSlider from './OptionClusterSlider';

function OptionCluster({
                         form, handleInput, options, title,
                       }: {
  form: FormValues; handleInput: (event: ChangeEvent<HTMLInputElement>) => void; options: IOption[]; title: string;
}) {
  const [expanded, setExpanded] = React.useState(true);

  return (<Box
    sx={{
      border: "2px solid #ccc", minWidth: '100%', borderRadius: 5,
    }}
  >
    <Box m={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box/>
        <Typography
          variant="h5"
          gutterBottom
          sx={{color: "#ccc"}}
          fontWeight="bold"
          align="center"
        >
          {title}
        </Typography>
        <IconButton onClick={() => setExpanded((prevState) => !prevState)} sx={{color: "#ccc"}}>
          {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </IconButton>
      </Stack>
      {/*<TransitionGroup>*/}
      {/*  <Collapse>*/}
      {expanded && (<Grid container spacing={6} sx={{px: 2, py: 2}}>
        {options.map((opt) => (<OptionClusterSlider
          key={opt.name}
          opt={opt}
          form={form}
          handleInput={handleInput}
        />))}
      </Grid>)}
      {/*  </Collapse>*/}
      {/*</TransitionGroup>*/}
    </Box>
  </Box>);
}

export default OptionCluster;
