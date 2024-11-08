Union Types

A union type represents a value that can be one of several types. It's defined using the | operator.
type Combinable = string | number;
Here Combinable is either string or number it can be both types.

Intersection Types

An intersection type represents a value that must be of all the specified types. It's defined using the & operator.

type Person = {
name: string;
age: number;
};

type User = {
userId: number;
email: string;
};

type Admin = Person & User;

Here Admin is combined properties of Person and User.
