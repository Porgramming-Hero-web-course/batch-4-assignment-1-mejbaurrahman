{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type Tpartial = Partial<Profile>;

  const updateProfile = (
    profile: Profile,
    pertialProfile: Tpartial
  ): Profile => {
    const updateProfile: Profile = { ...profile, ...pertialProfile };
    return updateProfile;
  };

  //   const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  //   console.log(updateProfile(myProfile, { age: 26 }));
}
