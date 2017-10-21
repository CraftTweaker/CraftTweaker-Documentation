# IItemDefinition

An IItemDefinition object is the direct reference to an item.  
It is different from an [IItemStack](IItemStack) as this only refers to the item, it does not include any meta-information or NBT-values!

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemDefinition;`

## How to get one
The easiest way is from an [IItemStack](IItemStack), but you can also get a list of all registered IItemDefinitions in the game and do something with that.

```
//IItemStack Zengetter "definition" -> single IItemDefinition
val itemDefinition = <minecraft:stone>.definition;

//IGame zengetter "items" -> LIST!
val itemDefinitionList = game.items;
```

## What to do with it

### ZenGetters

| ZenGetter | What does it do                                                                                      | Return Type                             | Usage      |
|-----------|------------------------------------------------------------------------------------------------------|-----------------------------------------|------------|
| id        | Returns the item ID                                                                                  | String                                  | `def.id`   |
| name      | Returns the unlocalized item Name                                                                    | String                                  | `def.name` |
| ores      | Returns all ore entries containing this item. Can also contain ore entries that refer to a sub-item. | List<[IOreDictEntry](/Vanilla/OreDict)> | `def.ores` |


### ZenMethods

`def.makeStack(meta);` Creates an [IItemStack](IItemStack) with the given metadata. Metadata is an int and OPTIONAL.