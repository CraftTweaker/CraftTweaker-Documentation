# IEntity

Entity Interface. Used to obtain and modify information entities' data.  
Entities are everything that is freely movable in the world such as players, monsters, items on the ground any many more.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntity;`


## ZenGetters

| GetterName   | GetterMethod      | Return Type                             |
|--------------|-------------------|-----------------------------------------|
| dimension    |                   | [IDimension](/Vanilla/World/IDimension) |
| x            | getX()            | double                                  |
| y            | getY()            | double                                  |
| z            | getZ()            | double                                  |
| position     | getPosition()     | [Position3f](/Vanilla/Utils/Position3f) |
| wet          | isWet()           | boolean                                 |
| passengers   | getPassengers()   | `List<IEntity>`                         |
| alive        | isAlive()         | boolean                                 |
| ridingEntity | getRidingEntity() | IEntity                                 |
| customName   | getCustomName()   | String                                  |
| immuneToFire | isImmuneToFire()  | boolean                                 |
| air          | getAir()          | int                                     |


## ZenSetters

| SetterName | SetterMethod        | Parameter Type                          |
|------------|---------------------|-----------------------------------------|
| position   | setPosition(pos)    | [Position3f](/Vanilla/Utils/Position3f) |
| fire       | setFire(seconds)    | int                                     |
| customName | setCustomName(name) | String                                  |
| air        | setAir(seconds)     | int                                     |


## More ZenMethods

- extinguish(); → Extinguishes the entity, if on fire
- setDead(); → Kills the entity
- double getDistanceSqToEntity(entity); → Returns the distance to the given Entity
- [IItemStack](/Vanilla/Items/IItemStack) getPickedResult(); → Returns the [item](/Vanilla/Items/IItemStack) that picking up the entity would return (e.g. the item id the entity is an item or the minecart item)
