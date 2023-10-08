'use client';

import React, { ChangeEvent } from 'react';
// import Store from "electron-store";
import {Box, Button, Typography} from '@mui/material';
import FormValues from './utility/formValues';
import OptionCluster from './components/OptionCluster';
import Masonry from '@mui/lab/Masonry';
import {
  brightOptions,
  contrastOptions,
  noiseOptions,
  sharpenOptions,
  filterOptions,
} from './utility/clusterData';


function Page() {
  const [form, setForm] = React.useState<FormValues>({
    gaussianFilterKernel: 0,
    bilateralFilterKernel: 0,
    bilateralColorSimilarity: 0,
    bilateralSpaceSimilarity: 0,
    median: 0,
    wiener: 0,
    darken: 0,
    light: 0,
    saturation: 0,
    percentile: 0,
    contrast: 100,
    vibrance: 100,
    claheTile: 1,
    claheLimit: 0,
    alpha: 0,
    sharpenLevel: 0,
    sharpenIntensity: 0,
    ostrenjeDetaljev: 0,
    edgeArea: 0,
    edgeNoise: 0,
    deNoise: 0,
    brightening: 0,
    darkening: 0,
    contrasting: 0,
    colors: 0,
    deBlurr: 0,
    combinedFilter: 0,
  });
  const [dirPath, setDirPath] = React.useState(undefined);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.electronAPI.getDirPath().then(dir => {
      if(dir){
        setDirPath(dir);
      }
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.electronAPI.readConfig().then((conf: FormValues) => {
      if(conf){
        setForm(conf);
      }
    })
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setForm((prevState) => {
      const newData = { ...prevState, [name]: value };

      // send state to main.ts
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.electronAPI.sendFormData(dirPath, newData);
      return newData;
    });
    // console.log('name', name);
    // console.log(typeof name);
    // console.log('value', value);
    // console.log(typeof value);

  };

  const handleDirChange = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filePath = await window.electronAPI.setDirPath();
    if(filePath){
      // console.log(filePath);
      setDirPath(filePath);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.electronAPI.store.set("dirPath", filePath);
    }
    // window.electronApi.setDirPath();
  };

  return (
    <React.Fragment>
      <Box sx={{m:2}}>
        <Typography>{dirPath ?? "Set file destination ..."}</Typography>
        <Button variant={"contained"} onClick={handleDirChange}>Set destination</Button>
      </Box>
    <Masonry columns={2} spacing={2}>
      <Box sx={{ maxWidth: '400px'}}>
        <OptionCluster
          title="Noise"
          options={noiseOptions}
          form={form}
          handleInput={handleInput}
        />
      </Box>
      <Box sx={{ maxWidth: '400px'}}>
        <OptionCluster
          title="Bright"
          options={brightOptions}
          form={form}
          handleInput={handleInput}
        />
      </Box>
      <Box sx={{ maxWidth: '400px'}}>
        <OptionCluster
          title="Sharpen"
          options={sharpenOptions}
          form={form}
          handleInput={handleInput}
        />
      </Box>
      <Box sx={{ maxWidth: '400px'}}>
        <OptionCluster
          title="Contrast"
          options={contrastOptions}
          form={form}
          handleInput={handleInput}
        />
      </Box>
      <Box sx={{ maxWidth: '400px'}}>
        <OptionCluster
          title="Filter"
          options={filterOptions}
          form={form}
          handleInput={handleInput}
        />
      </Box>
    </Masonry>
    </React.Fragment>
  );
}

export default Page;
