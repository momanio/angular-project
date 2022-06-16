import { Ayat } from './Ayat.model';

export interface Quran {
  index: number;
  name: string;
  aya: Ayat[];
}
