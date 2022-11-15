export default interface NavigationTypes {
  id: number;
  title: string;

  subTitles: { title: string; url: string }[];
}
