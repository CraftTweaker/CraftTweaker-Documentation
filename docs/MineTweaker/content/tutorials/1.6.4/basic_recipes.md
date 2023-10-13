# Basic Recipes
## Contents
* Basic Recipes
  * Other kinds of recipes
  * Specific recipe removal
  * Subitems and damage values
  * Reloading and recipes
  * Using variables
  * Using item IDs
### Basic Recipes
The most basic modifications you can perform in MineTweaker are recipe addition and removal.

As a little introduction, let's consider the recipe for sticks. In vanilla minecraft, it takes 2 wood planks to make 4 sticks, and they have to put above each other. But what if we want to change that? What if, say, we find it more logical to put the two wood block diagonally instead? (this stick is diagonal, right?)

Modifying the sticks recipe is wonderfully easy. Make a script with the following contents:

```zenscript
recipes.remove(<item.stick>);
recipes.addShaped(<item.stick> * 4, [[<tile.wood>, null], [null, <tile.wood>]]);
```
Open a new game (or reload scripts, if you are already in a game). Now take 2 oak wood planks and test your recipe.

It works? Great! But now you may have noticed a flaw in the recipe: if you put birch or spruce wood, it doesn't work!

Why doesn't it work? The "tile.wood" item has subitems that are distinguished by not only the item name, but also by its meta value. By default, if you retrieve an item with the bracket syntax, MineTweaker assumes you want the item with meta value 0. And that's what it returned - the "oak planks" item. But we want an ingredient which essentially means "any kind of wood".

Luckily, this is easy to fix. When using the bracket syntax, besides the name, we can also define a meta value. For instance, <tile.wood:1> refers to spruce wood. We can also use the wildcard (*) to get an item meaning "any meta value is good": <tile.wood:*>.

Thus, change your recipe and reload:

```zenscript
recipes.remove(<item.stick>);
recipes.addShaped(<item.stick> * 4, [[<tile.wood:*>, null], [null, <tile.wood:*>]]);
```
Fixed! Of course, you should use the ore dictionary entry for planks, which would be even better as it would be compatible with mod-added planks :)

#### Other kinds of recipes
Shaped recipes are recipes where the ingredients must be placed in the right shape in order for it to work. Not all Minecraft recipes are shaped - some don't care about the shape. MineTweaker supports those with the addShapeless function:

recipes.addShapeless(<item.stick> * 4, [<ore:plankWood>, <ore:plankWood>]);
Now it doesn't matter how you place your planks - you can always craft sticks. Note that in this example, though, you can no longer craft the wooden pressure plate.

Since 3.0.7, it's also possible to register mirrored recipes. Continuing with our sticks (make sure to remove the previous recipes first):

recipes.addShapedMirrored(<item.stick> * 4, [[<ore:plankWood>, null], [null, <ore:plankWood>]]);
Now it doesn't matter if you mirror the recipe - it still works!

#### Specific recipe removal
So far we decided that we would be removing all recipes for the stick. In vanilla minecraft, there is also only one, so that's not an issue. But what if we want to be more specific? Often there are multiple recipes for the same item, and we may want to remove one yet keep the others.

It is possible to be more specific in that case:

```zenscript
recipes.removeShaped(<item.stick>, [[<tile.wood:*>], [<tile.wood:*>]]);
```
This will remove only a single recipe - even if there are other recipes.

It is also possible to remove all recipes that are shaped, or all recipes that are shapeless, by simply calling:

```zenscript
recipes.removeShaped(<item.stick>);
recipes.removeShapeless(<item.stick>);
```
Also, wildcard patterns can be used to indicate that any kind of item would match for a certain position, as long as it's not empty:

```zenscript
recipes.removeShaped(<item.stick>, [[<*>], [<*>]]);
```
Likewise, when removing shapeless recipes, it is possible to only specify one or more ingredients of the shapeless recipe and then tell minetweaker that the remainder of the recipe may contain anything:

```zenscript
recipes.removeShapeless(<tile.cloth:*>, [<tile.cloth>]); // removes all wool coloring recipes
```
Don't be fooled by the item name - it is the wool block.

#### Subitems and damage values
Quite often, items have multiple subitems. A very well-known example are coal and charcoal. Both have the same ID (item.coal) but have a different meta value.

When loading an item, you can specify the meta value for the subitem:

```zenscript
var coal = <item.coal:0>; // same as <item.coal>
var charcoal = <item.coal:1>;
```
When the subitem is not specified, :0 is filled in for the subitem.

If you want a recipe to match any subitem, you can use the wildcard syntax:

```zenscript
var anyCoal = <item.coal:*>;
```

Many kinds of items can also be damaged. When using such item as ingredient for a recipe, by default, no damage is allowed. For instance:

```zenscript
var pick = <item.pickaxeStone>;
var iron = <item.ingotIron>;
// upgrade pick recipe :)
recipes.addRecipe(<item.pickaxeIron>, [[iron, iron, iron], [null, pick, null]]);
```
In the recipe above, a damaged pickaxe would not be accepted. This can be changed easily with the .anyDamage() modifier:

```zenscript
var pick = <item.pickaxeStone>.anyDamage();
var iron = <item.ingotIron>;
// upgrade pick recipe :)
recipes.addShaped(<item.pickaxeIron>, [[iron, iron, iron], [null, pick, null]]);
```
#### Reloading and recipes
When you reloaded the scripts, you may have noticed that if you reloaded a script, the recipe is not duplicated. Likewise, if a recipe addition is removed from the script and the script is reloaded, the recipe is effectively removed from the game even though there may be no statement explicitly requesting such removal.

MineTweaker remembers actions such as recipe addition and removal. When a script is reloaded (or loaded by joining a different server), MineTweaker will first undo all the recorded changes that were made before it executes the new script.

Many mod machines, however, do not support such recipe removal. In that case, the recipe will be "stuck" in the game until the entire game is reloaded. For a server, this means that the recipe will be stuck in the list until the server is restarted; for a client, it means that the recipe will be shown and acted upon as if it existed, though when a crafting attempt is made, actual crafting would fail. There is no fix to such behavior; it is up to the respective mod authors to provide a sufficient API to ensure that recipe removal is possible.

#### Using variables
Do you find yourself looking up the same item over and over again using the bracket syntax? It may be handy to remember the value for later; which can be done with the val and var statements:

```zenscript
val stick = <item.stick>;
val planks = <tile.wood:*>;
recipes.remove(stick);
recipes.addShaped(stick * 4, [[planks, null], [null, planks]]);
```
In this example, var can be used too:

```zenscript
var stick = <item.stick>;
var planks = <tile.wood:*>;
recipes.remove(stick);
recipes.addShaped(stick * 4, [[planks, null], [null, planks]]);
```
The difference between var and val is that a val cannot be modified after it is declared:

```zenscript
val stick = <item.stick>;
stick = <item.bread>; // fails
```
#### Using item IDs
Find yourself having issues with Item IDs? You can still use the old bracket syntax with item IDs, but only in the 1.6.4 version:

var rottenFlesh = <367>;
var charcoal = <263:1>;