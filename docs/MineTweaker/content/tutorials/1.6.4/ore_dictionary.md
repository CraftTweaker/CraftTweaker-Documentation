# Ore Dictionary
Now that we've gotten our feet wet (you did follow the previous tutorials, right?), let's try this recipe: (IC2 required)

```zenscript
val copper = <ic2.itemIngot:0>;
val tin = <ic2.itemIngot:1>;
val iron = <item.ingotIron>;

// actually IC2 uses bronze and not copper. but that doesn't matter since this is just for demonstration
recipes.addShaped(<ic2.itemPartAlloy>, [[iron, iron, iron], [copper, copper, copper], [tin, tin, tin]]);
```
If you try the recipe, it's going to work... but not if you use the copper ingots from, say, Thermal Expansion or Tinkers Construct! The items are different!

Luckily, this issue exists for quite a while already and has been solved through the use of the ore dictionary. In essence, the ore dictionary groups items by their meaning and allows mods to add their own items to the ore dictionary. For instance, the copper ore dictionary is named <ore:ingotCopper>.

These ore dictionary entries can be used in recipes easily:

```zenscript
val copper = <ore:ingotCopper>;
val tin = <ore:ingotTin>;
val iron = <ore:ingotIron>;

// actually IC2 uses bronze and not copper. but that doesn't matter since this is just for demonstration
recipes.addShaped(<ic2.itemPartAlloy>, [[iron, iron, iron], [copper, copper, copper], [tin, tin, tin]]);
```
... and that should fix it! Try installing a few mods that add copper ore, and all of their ingots should now be compatible.

The ore dictionary is used for more than just ores and ingots. Many ingredients have their own ore dictionary entry, allowing multiple substitutes for a specific ingredient.

## Modifying the ore dictionary
Not satisfied with the contents that mods put into the ore dictionary? Did some mod forget to add an item to the proper entry? Or do you believe a certain ingredient substitute makes recicpes too cheap? MineTweaker makes it possible to alter the contents of the ore dictionary.

Once you retrieve an ore dictionary entry, you can modify it by adding or removing ores. Let's modify our script a bit:

```zenscript
val copper = <ore:ingotCopper>;
val tin = <ore:ingotTin>;
val iron = <item.ingotIron>;
tin.add(<item.coal>);

// actually IC2 uses bronze and not copper. but that doesn't matter since this is just for demonstration
recipes.addShaped(<ic2.itemPartAlloy>, [[iron, iron, iron], [copper, copper, copper], [tin, tin, tin]]);
```
If you reload the scripts and check the recipe, you will notice that tin can now be substituted with coal.

Likewise, you could even remove iron from its entry:

```zenscript
val copper = <ore:ingotCopper>;
val tin = <ore:ingotTin>;
val iron = <item.ingotIron>;
tin.add(<item.coal>);
tin.remove(<ic2.itemIngot:1>);

// actually IC2 uses bronze and not copper. but that doesn't matter since this is just for demonstration
recipes.addShaped(<ic2.itemPartAlloy>, [[iron, iron, iron], [copper, copper, copper], [tin, tin, tin]]);
```
Now this ore dictionary modification may not be very useful, but it does illustrate how the ore dictionary can be modified easily.

If you ever come across a mod dictionary entry of which you believe they should both actually be the same, it's now possible to mirror ore dictionary entries:

```zenscript
<ore:ingotCopper>.mirror(<ore:ingotTin>);
```
Now doing that will link copper to be the same as tin. Copper will then essentially be overridden by tin, and any changes made to tin will automatically reflect in copper, and vice versa.

## Using ore entries in recipe removal
Ore dictionary entries can also be used to remove recipes containing ore entries, or as wildcard meaning "you can match any item in the ore entry". Note that an ore dictionary entry with a single item is considered equivalent to the item. (this in contrast with MineTweaker 2)