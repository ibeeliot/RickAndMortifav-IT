export interface IState {
  episodes: [];
  favorites: [];
}

export interface IAction {
  type: string;
  payload: any;
}

export const initialState: IState = {
  episodes: [],
  favorites: []
};

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: { medium: string; origin: string };
  summary: string;
  href: string;
}
