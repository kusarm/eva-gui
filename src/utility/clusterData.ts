import { IOption } from '../models/IOption';

export const sharpenOptions: IOption[] = [
  {
    name: 'sharpenLevel',
    title: 'Sharpen level',
    min: 0,
    max: 10,
    step: 1,
    incrementMark: 1,
  },
  {
    name: 'sharpenIntensity',
    title: 'Sharpen intensity',
    min: 0,
    max: 400,
    step: 1,
    incrementMark: 40,
  },
  {
    name: 'ostrenjeDetaljev',
    title: 'Ostrenje detaljev',
    min: 0,
    max: 40,
    step: 1,
    incrementMark: 5,
  },
  {
    name: 'edgeArea',
    title: 'Edge area',
    min: 0,
    max: 40,
    step: 1,
    incrementMark: 5,
  },
  {
    name: 'edgeNoise',
    title: 'Edge noise',
    min: 0,
    max: 400,
    step: 1,
    incrementMark: 40,
  },
];

export const noiseOptions: IOption[] = [
  {
    name: 'gaussianFilterKernel',
    title: 'Gaussian Filter Kernel',
    min: 0,
    max: 400,
    step: 1,
    incrementMark: 40,
  },
  {
    name: 'median',
    title: 'Median',
    min: -1,
    max: 20,
    step: 1,
    incrementMark: 5,
  },
  {
    name: 'wiener',
    title: 'Wiener',
    min: 0,
    max: 20,
    step: 1,
    incrementMark: 5,
  },
  {
    name: 'bilateralFilterKernel',
    title: 'Bilateral Filter Kernel',
    min: 0,
    max: 40,
    step: 1,
    incrementMark: 5,
  },
  {
    name: 'bilateralColorSimilarity',
    title: 'Bilateral Color Similarity',
    min: 0,
    max: 20,
    step: 1,
    incrementMark: 5,
  },
  {
    name: 'bilateralSpaceSimilarity',
    title: 'Bilateral Space Similarity',
    min: 0,
    max: 20,
    step: 1,
    incrementMark: 5,
  },
];

export const contrastOptions: IOption[] = [
  {
    name: 'percentile',
    title: 'Percentile',
    min: 0,
    max: 30,
    step: 1,
    incrementMark: 5,
  },
  {
    name: 'contrast',
    title: 'Contrast',
    min: 0,
    max: 200,
    step: 1,
    incrementMark: 20,
  },
  {
    name: 'vibrance',
    title: 'Vibrance',
    min: 0,
    max: 200,
    step: 1,
    incrementMark: 20,
  },
  {
    name: 'claheTile',
    title: 'Clahe tile',
    min: 0,
    max: 15,
    step: 1,
    incrementMark: 5,
  },
  {
    name: 'claheLimit',
    title: 'Clahe limit',
    min: 0,
    max: 5,
    step: 1,
    incrementMark: 1,
  },
  {
    name: 'alpha',
    title: 'Alpha',
    min: 0,
    max: 120,
    step: 1,
    incrementMark: 20,
  },
];

export const brightOptions: IOption[] = [
  {
    name: 'darken',
    title: 'Darken/ Brighten',
    min: 0,
    max: 1,
    incrementMark: 0.2,
    step: 0.05,
  },
  {
    name: 'light',
    title: 'Light',
    min: 0,
    max: 200,
    incrementMark: 20,
    step: 1,
  },
  {
    name: 'saturation',
    title: 'Saturation',
    min: 0,
    max: 200,
    incrementMark: 20,
    step: 1,
  },
];

export const filterOptions: IOption[] = [
  {
    name: 'deNoise',
    title: 'De-Noise',
    min: 0,
    max: 6,
    incrementMark: 1,
    step: 0.5,
  },
  {
    name: 'brightening',
    title: 'Brightening',
    min: 0,
    max: 10,
    incrementMark: 1,
    step: 1,
  },
  {
    name: 'darkening',
    title: 'Darkening',
    min: 0,
    max: 10,
    incrementMark: 1,
    step: 1,
  },
  {
    name: 'contrasting',
    title: 'Contrasting',
    min: 0,
    max: 10,
    incrementMark: 1,
    step: 1,
  },
  {
    name: 'colors',
    title: 'Colors',
    min: 0,
    max: 200,
    incrementMark: 20,
    step: 1,
  },
  {
    name: 'deBlurr',
    title: 'De-Blurr',
    min: 0,
    max: 16,
    incrementMark: 5,
    step: 1,
  },
  {
    name: 'combinedFilter',
    title: 'Combined Filter',
    min: 0,
    max: 9,
    incrementMark: 5,
    step: 1,
  },
];

export const movieOptions: IOption[] = [
  {
    name: 'poorQuality',
    title: 'Poor quality',
    min: 0,
    max: 5,
    incrementMark: 1,
    step: 1,
  },
  {
    name: 'movieNo',
    title: 'Movie No',
    min: 0,
    max: 1,
    incrementMark: 0.1,
    step: 0.05,
  },
  {
    name: 'frameNo',
    title: 'Frame No',
    min: 0,
    max: 200,
    incrementMark: 20,
    step: 1,
  },
];