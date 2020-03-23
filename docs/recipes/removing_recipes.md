# Removing Recipes
In order to remove recipes from the game, you will use the desired stationID followed by any of the below functions. All recipe-related globals in CraftTweaker use these following functions, meaning these scripts will work for removing recipes for every vanilla and modded crafting station.
**- THESE FUNCTIONS WILL NOT WORK BY THEMSELVES.** In order to use the listed functions, each script will have to start with the stationID that you want to remove the recipe from. For instance:
```zenscript
craftingTable.removeRecipe(<item:minecraft:arrow>);
```
Would remove the arrow recipe from a crafting table, but if you could craft it in a smoker, it wont remove it from there. Any and all scripts listed below will not include the stationID. You can find a list of all stationIDs at [INSERT].



## Functions:


### Remove a Recipe
```zenscript
removeRecipe(IItemStack output);
```
This script will remove a(ll) recipes for a referenced item. For instance, typing
```zenscript
removeRecipe(<item:minecraft:arrow>);
```
will remove all recipes for a normal Arrow.


### Remove by Name
```zenscript
removeByName(String name);
```
This script will remove every recipe for every item that has the input name. For instance,
```zenscript
removeByName("minecraft:arrow");
```
will remove the vanilla recipe for an Arrow. In function, this is identical to the script you were just showed, but this one is better for removing a *certain* recipe instead of all of an items recipes because you can replace `minecraft:arrow` with `<modid>:arrow` to ONLY remove that mods recipe for an Arrow.


### Remove by Mod ID
```zenscript
removeByModid(String modid);
```
This script will remove every recipe from a single mod by referencing its `id`. For instance, Minecraft has an id of `minecraft`, so typing
```zenscript
removebyModid("minecraft");
```
would remove *every* recipe in Vanilla minecraft, but not recipes added by other mods.


### Remove by Regex
```zenscript
removeByRegex(String regex);
```
This script will remove every recipe that contains the given string somewhere in its name. For instance,
```zenscript
removeByRegex(".*arrow.*");
```
would remove every recipe, added by every mod, for every item whose recipe contains the string "arrow". This one is a bit more complex to understand, but try running that example script and then use a mod like `JEI` to try and find recipes for an arrow.
**Note: The `.*` tag searches anywhere in the recipe name. Without it, the string would have to be an exact match. Then it isnt very helpful, because a normal `removeRecipe` would do the same trick.**


### Remove All
```zenscript
removeAll();
```
This script will remove every recipe from the game. It isnt recommended for general use, but its an option.