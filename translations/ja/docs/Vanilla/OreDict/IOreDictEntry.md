# IOreDictEntry

When the [IOreDict](/Vanilla/OreDict/IOreDict/) is the lexicon, the IOreDictEntries are the lexicon's entries.  
They consist of a name (OreDictionary name) and an explanation (all matching items).

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.oredict.IOreDictEntry;`

## Retrieving such an Object.

There are multiple ways of getting an IOreDictEntry Object: If you refer to an oreDict that does not yet exist, it will be created.

- Using the [IOreDict](/Vanilla/OreDict/IOreDict/) class.
- Using the [ore Bracket Handler](/Vanilla/Brackets/Bracket_Ore/).
- Using an [IItemDefinition's `ores` getter](/Vanilla/Items/IItemDefinition/).

## ZenGetters

You can use these getters to retrieve some information on the oredict:

| name      | Description                              | Return type                              |
| --------- | ---------------------------------------- | ---------------------------------------- |
| name      | Returns the oreDict's name               | string                                   |
| empty     | Returns if the oreDict is empty          | bool                                     |
| firstItem | Returns the first of the oreDict's items | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethods

You can use these methos on an IOreDictEntry Object:

### Add/Remove items

    val oreDictEnt = <ore:ingotIron>;
    
    //oreDictEnt.add(IItemStack... item_items);
    oreDictEnt.add(<minecraft:grass>);
    oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);
    
    //oreDictEnt.addItems(IItemStack[] items);
    oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);
    
    //oreDictEnt.addAll(IOreDictEntry otherEntry);
    oreDictEnt.addAll(<ore:ingotGold>);
    
    
    
    //oreDictEnt.remove(IItemStack... item_items);
    oreDictEnt.remove(<minecraft:grass>);
    oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);
    
    //oreDictEnt.removeItems(IItemStack[] items);
    oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
    

### Check if an IOreDictEntry contains an item

You can check if an IOreDictEntry contains an item using either the `in` or `has` keywords:

    val oreDictEnt = <ore:ingotIron>;
    
    //While using in is possible
    if(oreDictEnt in <minecraft:iron_ingot>){
        print("Iron is in the oreDict!");
    }
    
    //many prefer using has as it might make more sense grammar-wise
    if(oreDictEnt has <minecraft:iron_ingot>){
        print("Iron still is in the oreDict!");
    }
    

### Mirror an IOreDictEntry

Mirroring an IOreDictEntry means that all items in the other oreDictEntry will be replaced by the items in the oreDictEntry the method was executed on:

    //make iron and copper equivalent
    val iron = <ore:ingotIron>;
    val copper = <ore:ingotCopper>;
    
    //adds all entries from iron to copper so that Copper contains both, the iron and copper oreDic entries
    iron.addAll(copper); 
    
    
    //mirrors copper to iron, so all items in iron will be replaced by all the ones in copper.
    //In this case that means by all iron and copper oreDictEntries
    copper.mirror(iron);
    

## IIngredient implementation

IOreDictEntry extends [IIngredient](/Vanilla/Variable_Types/IIngredient/). This means that all methods available to [IIngredient](/Vanilla/Variable_Types/IIngredient/) are also available to IOreDictEntries. It also means that you can put IOreDictEntries into IIngredient Arrays (such as the ones in crafting recipe methods).

### Iterating through an oreDictEntry's items

    val iron = <ore:ingotIron>;
    
    for item in iron.items{
        recipe.remove(item);
    }