# DropTableBuilder

DropTableBuilder is used to create 'drops' strings for ores and samples that support dropping multiple item stacks at once, item stacks that contain more than one item, and weighted drops.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.DropTableBuilder;` 

## Methods
These methods allow for creation and modification of a drop table. All builder methods return the builder they were run on, allowing for chaining methods.

| Method Name        | Description                                                                      |
|--------------------|----------------------------------------------------------------------------------|
| newSlot()          | Creates a new drop table if run statically or adds a new slot to the drop table. |
| addItem()          | Adds the specified item to the current slot of the drop table.                   |
| enableFortune()    | Enables the current slot to benefit from the fortune enchant.                    |

###Usage:
####`newSlot()`

DropTableBuilder.newSlot() will create a new builder.
\<builder\>.newSlot() will finalize the current slot and start a new one.

####`addItem(String itemStr[, int weight[, int count]])`

`itemStr` can be an item's name like \<mod\>:\<item\>:\<meta\>, an ore dictionary entry like oredict:\<entry\>, or the word empty.
`weight` controls how likely the item is to drop using the formula \<item weight\>/\<sum of item weights within slot\>. Defaults to 1 if omitted.
`count` is how many of the item drop if selected. Defaults to 1 if omitted.

####`enableFortune()`

Slots that have fortune enabled will select a number of additional items from the slot up to the level of fortune used. Matches vanilla fortune behavior on slots that have only 1 item.

## Examples using the Builder 
###Creating a drop table

```
var complextable = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coal", 9)
                    .enableFortune()
                    .newSlot()
                    .addItem("oredict:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("empty");
```
This drop table would drop 2 diamonds (10%) or 1 coal (90%) benefiting from fortune, 1 stone (100%), and 1 cobblestone (50%).

```
var lapistable = DropTableBuilder.newSlot()
                   .addItem("minecraft:lapis_lazuli", 1, 4)
                   .addItem("minecraft:lapis_lazuli", 1, 5)
                   .addItem("minecraft:lapis_lazuli", 1, 6)
                   .addItem("minecraft:lapis_lazuli", 1, 7)
                   .addItem("minecraft:lapis_lazuli", 1, 8)
                   .enableFortune();
```
This drop table mimics vanilla lapis, dropping 4-8 lapis and benefiting from fortune.

###Using a drop table
Builders are used by assigning them as a "drops" data value. Since data values only accept strings, the builder will be cast as a string using its toString method.
```
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
var complexData = MaterialSystem.getMaterialBuilder()
                    .setColor(12345678).setName("Complex Ore").setColor(12345678).build()
                    .registerPart("ore").getData();
lapisData.addDataValue("drops",lapistable);
complexData.addDataValue("drops",complextable+lapistable);
```
When 2 builders are added together, a new table is created with the slots from both tables.
