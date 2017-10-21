# IEntityDrop

An IEntityDrop refers to a drop from an [Entity](IEntityDefinition).

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityDrop;`

## ZenGetters

You can retrieve this information out of them.

| ZenGetter  | What does it do                                          | Return type                             | Usage             |
|------------|----------------------------------------------------------|-----------------------------------------|-------------------|
| chance     | Returns the chance of the drop.                          | float                                   | `drop.chance`     |
| max        | Returns the maximum Amount of the drop.                  | int                                     | `drop.max`        |
| min        | Returns the minimum Amount of the drop.                  | int                                     | `drop.min`        |
| playerOnly | Returns whether the drop is playerOnly.                  | boolean                                 | `drop.playerOnly` |
| range      | Returns the minimum to maximum Amount range of the drop. | IntegerRange                            | `drop.range`      |
| stack      | Returns the dropped Item.                                | [IItemStack](/Vanilla/Items/IItemStack) | `drop.stack`      |