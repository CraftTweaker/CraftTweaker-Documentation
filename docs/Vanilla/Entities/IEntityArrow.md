# IEntityArrow

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityArrow;`

## Extending
IEntityArrow implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntity](/Vanilla/Entities/IEntity/)
- [IProjectile](/Vanilla/Events/Events/IProjectile/)

## Methods

| ZenGetter      | ZenSetter         | Type                                                               |
|----------------|-------------------|--------------------------------------------------------------------|
| shooter        | shooter           | [IEntity](/Vanilla/Entities/IEntity/)                              |
| damage         | damage            | double                                                             |
| knockbackStrength | knockbackStrength | int                                                                |
| isCritical     | isCritical        | boolean                                                            |
| pickupStatus   | pickupStatus      | String                                                             |
| shake          |                   | int                                                                |

## Additional methods

- void `shoot(IEntity shooter, float pitch, float yaw, float roll, float velocity, float inaccuracy)`

- void `setPickupDisallowed()`

- void `setPickupAllowed()`

- void `setPickupCreative()`

