export default interface NavigationTypes {
  id: number;
  title: string;
  url: string;
  subTitles: { title: string; url: string }[];
}
