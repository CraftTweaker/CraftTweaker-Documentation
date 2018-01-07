# IEntityMod

A Mod.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityMob;`

## Extending [IEntityCreature](IEntityCreature)
IEntityMob extends [IEntityCreature](IEntityCreature). That means all functions available to [IEntityCreature](IEntityCreature) objects also are available to IEntityMob.

## Methods
### ZenMethods
#### Check if the mob is preventing a player's sleep
The Method requires an [IPlayer](/Vanilla/Players/IPlayer) object.  
Returns a bool.
```
entMobObj.isPreventingPlayerRest(IPlayer player);
```