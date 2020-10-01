# IEntityArrow

An Arrow.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityArrow;`

## Extending [IEntity](/Vanilla/Entities/IEntity/)
IEntityArrow extends [IEntity](/Vanilla/Entities/IEntity/). That means all functions available to [IEntities](/Vanilla/Entities/IEntity/) also are available to IEntityArrow.

## Methods

| ZenGetter        | ZenSetter           | Type                                                               |
|------------------|---------------------|--------------------------------------------------------------------|
| `shooter`        | `shooter`           | [IEntity](/Vanilla/Entities/IEntity/)                              |
| `damage`         | `damage`            | double                                                             |
|                  | `knockbackStrength` | int                                                                |
| `isCritical`     | `isCritical`        | boolean                                                            |
| `pickupStatus`   | `pickupStatus`      | String                                                             |
| `shake`          |                     | int                                                                |
| `isCritical`     | `isCritical`        | boolean                                                            |
| `isCritical`     | `isCritical`        | boolean                                                            |
| `isCritical`     | `isCritical`        | boolean                                                            |
| `isCritical`     | `isCritical`        | boolean                                                            |

## Additional methods

- void `shoot(IEntity shooter, float pitch, float yaw, float p_184547_4_, float velocity, float inaccuracy)`

- void `setPickupDisallowed()`

Prevents the arrow from being picked up under any circumstances.

- void `setPickupAllowed()`

Allows the arrow to be picked up from where the entity landed.

- void `setPickupCreative()`

Only allows the arrow to be picked up if the player is in creative mode.

