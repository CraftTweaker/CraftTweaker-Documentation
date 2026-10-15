# IProjectile

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IProjectile;`

## Extending
IProjectile is not implementing any other class.

## ZenMethods
`void shoot(double x, double y, double z, float velocity, float inaccuracy);` -> returns nothing.
Sends the projectile in the direction x,y,z from its starting position with the speed from the velocity input.
The float inaccuracy can vary the position where the projectile lands.
