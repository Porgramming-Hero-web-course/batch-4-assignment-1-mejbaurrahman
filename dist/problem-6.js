"use strict";
{
    const updateProfile = (profile, pertialProfile) => {
        const updateProfile = Object.assign(Object.assign({}, profile), pertialProfile);
        return updateProfile;
    };
    //   const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    //   console.log(updateProfile(myProfile, { age: 26 }));
}
