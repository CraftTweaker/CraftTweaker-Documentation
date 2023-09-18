# Ore Dictionary
## Contents
* Ore Dictionary
  * Modifying the ore dictionary
  * Adding new ore dictionary entries
  * Merging and unifying two ore dictionary entries
  * Using ore entries in recipe removal
  * Iterating over the values in an oredict entry
### Ore Dictionary
Now that we've gotten our feet wet (you did follow the previous tutorials, right?), let's try this recipe: (IC2 required)

```zenscript
val copper = <IC2:itemIngotCopper>;
val tin = <IC2:itemIngotTin>;
val iron = <minecraft:iron_ingot>;

// actually IC2 uses bronze and not copper. but that doesn't matter since this is just for demonstration
recipes.addShaped(<IC2:itemPartAlloy>, [[iron, iron, iron], [copper, copper, copper], [tin, tin, tin]]);
```
If you try the recipe, it's going to work... but not if you use the copper ingots from, say, Thermal Expansion or Tinkers Construct! The items are different!

Luckily, this issue exists for quite a while already and has been solved through the use of the ore dictionary. In essence, the ore dictionary groups items by their meaning and allows mods to add their own items to the ore dictionary. For instance, the copper ore dictionary is named <ore:ingotCopper>.

These ore dictionary entries can be used in recipes easily:

```zenscript
val copper = <ore:ingotCopper>;
val tin = <ore:ingotTin>;
val iron = <ore:ingotIron>;

// actually IC2 uses bronze and not copper. but that doesn't matter since this is just for demonstration
recipes.addShaped(<IC2:itemPartAlloy>, [[iron, iron, iron], [copper, copper, copper], [tin, tin, tin]]);
```
... and that should fix it! Try installing a few mods that add copper ore, and all of their ingots should now be compatible.

The ore dictionary is used for more than just ores and ingots. Many ingredients have their own ore dictionary entry, allowing multiple substitutes for a specific ingredient.

#### Modifying the ore dictionary
Not satisfied with the contents that mods put into the ore dictionary? Did some mod forget to add an item to the proper entry? Or do you believe a certain ingredient substitute makes recicpes too cheap? MineTweaker makes it possible to alter the contents of the ore dictionary.

Once you retrieve an ore dictionary entry, you can modify it by adding or removing ores. Let's modify our script a bit:

```zenscript
val copper = <ore:ingotCopper>;
val tin = <ore:ingotTin>;
val iron = <ore:ingotIron>;
iron.add(<minecraft:coal>);

// actually IC2 uses bronze and not copper. but that doesn't matter since this is just for demonstration
recipes.addShaped(<IC2:itemPartAlloy>, [[iron, iron, iron], [copper, copper, copper], [tin, tin, tin]]);
```
If you reload the scripts and check the recipe, you will notice that iron can now be substituted with coal.

Likewise, you could even remove iron from its entry:

```zenscript
val copper = <ore:ingotCopper>;
val tin = <ore:ingotTin>;
val iron = <ore:ingotIron>;
iron.add(<minecraft:coal>);
iron.remove(<minecraft:iron_ingot>);

// actually IC2 uses bronze and not copper. but that doesn't matter since this is just for demonstration
recipes.addShaped(<IC2:itemPartAlloy>, [[iron, iron, iron], [copper, copper, copper], [tin, tin, tin]]);
```
Now this ore dictionary modification may not be very useful, but it does illustrate how the ore dictionary can be modified easily.

If you ever come across a mod dictionary entry of which you believe they should both actually be the same, it's now possible to mirror ore dictionary entries:

```zenscript
<ore:ingotIron>.mirror(<ore:ingotTin>);
```
Now doing that will link iron to be the same as tin. Iron will then essentially be overridden by tin, and any changes made to tin will automatically reflect in iron.

#### Adding new ore dictionary entries
When you use an ore dictionary entry, it doesn't matter if it already exists or not. If you use one that doesn't exist, it will simply return an empty one. Thus, all you need is to reference the ore dictionary you want to make as if it already exists, and add items to it:

```zenscript
val myEntry = <ore:myOwnEntry>;
myEntry.add(<minecraft:coal>);
myEntry.add(<minecraft:iron_ingot>);
```
#### Merging and unifying two ore dictionary entries
When playing with many mods, you'll find them reimplementing similar ores, similar items and yet register them in different ore dictionaries. Now you can unify the ore dictionary entries to a certain extent. Let's say multiple mods add salt ores to the game, and have chosen to register them under different names. Now, you ensure that the two dictionaries contain the exact same items, by executing these two commands.

```zenscript
<ore:dustSalt>.addAll(<ore:foodSalt>);
<ore:foodSalt>.mirror(<ore:dustSalt>); 
```
Now each mod can utilise the others' items in its own recipes. This allows easier cross-mod interactions in recipes (no more hoarding of items), and a fluid gameplay overall.

#### Using ore entries in recipe removal
Ore dictionary entries can also be used to remove recipes containing ore entries, or as wildcard meaning "you can match any item in the ore entry". Note that an ore dictionary entry with a single item is considered equivalent to the item. (this in contrast with MineTweaker 2)

#### Iterating over the values in an oredict entry
Sometimes there is need to perform a certain action for every item in the ore dictionary. This is possible with a simple for loop:

```zenscript
for item in <ore:ingotCopper>.items {
    doSomething();
}
```