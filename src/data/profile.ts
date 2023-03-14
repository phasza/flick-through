export default interface Profile {
  profile_path: string,
  adult: boolean,
  id: number,
  media_type: string,
  name: string,
  popularity: number,
}

export const instanceOfProfile = (obj: any): obj is Profile => {
  return 'profile_path' in obj;
}