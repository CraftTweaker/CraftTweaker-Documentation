# IEntityDropFunction
An IEntityDropFunction is called whenever the associated entity is killed. Leave it up to your imagination what you can do with this:

## Importing the pacakge
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityDropFunction;`

## Parameters
The IEntityDropFunction is a function with the following parameters:

- [IEntity](/Vanilla/Entities/IEntity/) entity → The entity that just died.
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → The source of the entitie's death.

The Function needs to return an [IItemStack](/Vanilla/Items/IItemStack/), or `null`.