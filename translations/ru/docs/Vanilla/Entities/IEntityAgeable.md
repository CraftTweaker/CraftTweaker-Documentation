# IEntityAgeable

An Ageable Entity is one that grows over time, like a cow.

## Импорт пакета

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityAgeable;`

## Extending [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). That means all functions available to [IEntities](/Vanilla/Entities/IEntityCreature/) also are available to IEntityAgeable.

## Методы

### ZenGetters/Setters

| ZenGetter  | ZenSetter   | Тип  |
| ---------- | ----------- | ---- |
| growingAge | growingAge  | int  |
|            | scaleForAge | bool |

### Методы

#### add age

Methods expect an int and the second method an optional bool.  
Both methods return nothing.  
Normally, the second method does the same as the first with false as forced argument, that may differ for mod implementations, though.

```zenscript
entAgObj.ageUp(int seconds, @Optional boolean forced);
entAgObj.addGrowth(int seconds);
```