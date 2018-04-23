# IVector3d

A Vector3d object is a vector that uses three doubles for the directions.  
They have several utility methods and getters.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import) the class to avoid errors.  
`import crafttweaker.world.IVector3d`

## ZenGetters

| ZenGetter  | Type      |
|------------|-----------|
| x          | double    |
| y          | double    |
| z          | double    |
| normalized | IVector3d |


## ZenMethods

- double dotProduct(IVector3d other);
- IVector3d crossProduct(IVector3d other);
- IVector3d subtract(IVector3d other);
- IVector3d add(IVector3d other);
- double distanceTo(IVector3d other);
- IVector3d scale(double factor);