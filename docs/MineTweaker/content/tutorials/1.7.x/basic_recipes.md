# Basic Recipes
## Contents
* Using MineTweaker RecipeMaker
* Using recipe notation
* Basic Recipes
  * Other kinds of recipes
  * Specific recipe removal
  * Subitems and damage values
  * Reloading and recipes
  * Using variables
### Using MineTweaker RecipeMaker
If you want to create or remove recipes without having to code, you can also check out this nice mod by DoubleDoorDevelopment: https://www.curseforge.com/minecraft/mc-mods/minetweaker-recipemaker

### Using recipe notation
The most basic modifications you can perform in MineTweaker are recipe addition and removal. There is no visual editor, only a scripting language, so you have to understand how to write your recipes as text.

In order to define its functionality, you have to call functions. An example function is print, which you have seen before, and which takes a single argument:

```zenscript
print("My text");
```
This was easy. A more useful function, for instance, is the function to add a shaped recipe:

```zenscript
recipes.addShaped(recipe output, recipe contents);
```
This line essentially means "call the addShaped function on the recipes object". The recipes object is a special object that is available from anywhere in your code and contains all the functions related to adding and removing crafting recipes. Note that only crafting recipes are managed by the recipes object - furnace recipes, for instance, are managed by the furnace object (which you will learn about in a later tutorial) and mods machines have yet different methods to manage recipes.

Now, how do we call the addShaped function with proper arguments? We need to tell it what the output should be and what the recipe should be like.

Let's take, for instance, the recipe for iron leggings, which is this one:

![Recipe leggings iron.png](https://i.blamejared.com/mrpzw.png)

The MineTweaker notation for this recipe is the following one:

```zenscript
[[<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],
 [<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],
 [<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]
 ```
This may look cryptic if you haven't been programming before, but the principle is quite simple. You can visualize the recipe as follows:

![Recipe leggings iron brackets.png](https://i.blamejared.com/Eb6nT.png)

Each item in minetweaker has its own name - surrounded by the angled brackets to tell it "retrieve me the item with this name". This angled bracket notation will be used in many places - from retrieving items to ore dictionary entries to liquid names. The item name for the iron ingot is <minecraft:iron_ingot> and iron leggings is <minecraft:iron_leggings>.

What about the empty spots? You cannot just skip the entries - you have to put something to indicate "this is empty". MineTweaker has a special word for such objects, and it's "null".

We can thus define the leggings recipe with the following code:

```zenscript
recipes.addShaped(<minecraft:iron_leggings>,
 [[<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],
  [<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],
  [<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
  ```
Or you can split the line differently for readability, since MineTweaker doesn't care how you split your code into lines. You could also retrieve the iron ingot once, assign it to a variable and then reuse it, as will be described at the end of this tutorial.

### Basic Recipes
There is no visual editor, so you have to understand how to write your recipes as text.

As a little introduction, let's consider the recipe for sticks. In vanilla minecraft, it takes 2 wood planks to make 4 sticks, and they have to put above each other. But what if we want to change that? What if, say, we find it more logical to put the two wood block diagonally instead? (this stick is diagonal, right?)

Modifying the sticks recipe is wonderfully easy. Make a script with the following contents:

```zenscript
recipes.remove(<minecraft:stick>);
recipes.addShaped(<minecraft:stick> * 4, [[<minecraft:planks>, null], [null, <minecraft:planks>]]);
```
Open a new game (or reload scripts, if you are already in a game). Now take 2 oak wood planks and test your recipe.

It works? Great! But now you may have noticed a flaw in the recipe: if you put birch or spruce wood, it doesn't work!

Why doesn't it work? The "planks" item has subitems that are distinguished by not only the item name, but also by its meta value. By default, if you retrieve an item with the bracket syntax, MineTweaker assumes you want the item with meta value 0. And that's what it returned - the "oak planks" item. But we want an ingredient which essentially means "any kind of wood".

Luckily, this is easy to fix. When using the bracket syntax, besides the name, we can also define a meta value. For instance, <minecraft:planks:1> refers to spruce wood. We can also use the wildcard (*) to get an item meaning "any meta value is good": <minecraft:planks:*>.

Thus, change your recipe and reload:

```zenscript
recipes.remove(<minecraft:stick>);
recipes.addShaped(<minecraft:stick> * 4, [[<minecraft:planks:*>, null], [null, <minecraft:planks:*>]]);
```
Fixed! Of course, you should use the ore dictionary entry for planks, which would be even better as it would be compatible with mod-added planks :)

If need the full name of an item, you can hold it in your hand and use the /minetweaker hand command. It will print the name and copy it to the clipboard, so you can just paste it directly in your script.

#### Other kinds of recipes
Shaped recipes are recipes where the ingredients must be placed in the right shape in order for it to work. Not all Minecraft recipes are shaped - some don't care about the shape. MineTweaker supports those with the addShapeless function:

```zenscript
recipes.addShapeless(<minecraft:stick> * 4, [<ore:plankWood>, <ore:plankWood>]);
```
Now it doesn't matter how you place your planks - you can always craft sticks. Note that in this example, though, you can no longer craft the wooden pressure plate.

Since 3.0.7, it's also possible to register mirrored recipes. Continuing with our sticks (make sure to remove the previous recipes first):

```zenscript
recipes.addShapedMirrored(<minecraft:stick> * 4, [[<minecraft:planks:*>, null], [null, <minecraft:planks:*>]]);
```
Now it doesn't matter if you mirror the recipe - it still works!

#### Specific recipe removal
So far we decided that we would be removing all recipes for the stick. In vanilla minecraft, there is also only one, so that's not an issue. But what if we want to be more specific? Often there are multiple recipes for the same item, and we may want to remove one yet keep the others.

It is possible to be more specific in that case:

```zenscript
recipes.removeShaped(<minecraft:stick>, [[<minecraft:planks:*>], [<minecraft:planks:*>]]);
```
This will remove only a single recipe - even if there are other recipes.

It is also possible to remove all recipes that are shaped, or all recipes that are shapeless, by simply calling:

```zenscript
recipes.removeShaped(<minecraft:stick>);
recipes.removeShapeless(<minecraft:stick>);
```
Also, wildcard patterns can be used to indicate that any kind of item would match for a certain position, as long as it's not empty:

```zenscript
recipes.removeShaped(<minecraft:stick>, [[<*>], [<*>]]);
```
Likewise, when removing shapeless recipes, it is possible to only specify one or more ingredients of the shapeless recipe and then tell minetweaker that the remainder of the recipe may contain anything:

```zenscript
recipes.removeShapeless(<minecraft:wool:*>, [<minecraft:wool>]); // removes all wool coloring recipes
```
#### Subitems and damage values
Quite often, items have multiple subitems. A very well-known example are coal and charcoal. Both have the same ID (minecraft:coal) but have a different meta value.

When loading an item, you can specify the meta value for the subitem:

```zenscript
var coal = <minecraft:coal:0>; // same as <minecraft:coal>
var charcoal = <minecraft:coal:1>;
```
When the subitem is not specified, :0 is filled in for the subitem.

If you want a recipe to match any subitem, you can use the wildcard syntax:

```zenscript
var anyCoal = <minecraft:coal:*>;
```

Many kinds of items can also be damaged. When using such item as ingredient for a recipe, by default, no damage is allowed. For instance:

```zenscript
var pick = <minecraft:stone_pickaxe>;
var iron = <minecraft:iron_ingot>;
// upgrade pick recipe :)
recipes.addRecipe(<minecraft:iron_pickaxe>, [[iron, iron, iron], [null, pick, null]]);
```
In the recipe above, a damaged pickaxe would not be accepted. This can be changed easily with the .anyDamage() modifier:

```zenscript
var pick = <minecraft:stone_pickaxe>.anyDamage();
var iron = <minecraft:iron_ingot>;
// upgrade pick recipe :)
recipes.addShaped(<minecraft:iron_pickaxe>, [[iron, iron, iron], [null, pick, null]]);
```
#### Reloading and recipes
When you reloaded the scripts, you may have noticed that if you reloaded a script, the recipe is not duplicated. Likewise, if a recipe addition is removed from the script and the script is reloaded, the recipe is effectively removed from the game even though there may be no statement explicitly requesting such removal.

MineTweaker remembers actions such as recipe addition and removal. When a script is reloaded (or loaded by joining a different server), MineTweaker will first undo all the recorded changes that were made before it executes the new script.

Many mod machines, however, do not support such recipe removal. In that case, the recipe will be "stuck" in the game until the entire game is reloaded. For a server, this means that the recipe will be stuck in the list until the server is restarted; for a client, it means that the recipe will be shown and acted upon as if it existed, though when a crafting attempt is made, actual crafting would fail. There is no fix to such behavior; it is up to the respective mod authors to provide a sufficient API to ensure that recipe removal is possible.

#### Using variables
Do you find yourself looking up the same item over and over again using the bracket syntax? It may be handy to remember the value for later; which can be done with the val and var statements:

```zenscript
val stick = <minecraft:stick>;
val planks = <minecraft:planks:*>;
recipes.remove(stick);
recipes.addShaped(stick * 4, [[planks, null], [null, planks]]);
```
In this example, var can be used to:

```zenscript
var stick = <minecraft:stick>;
var planks = <minecraft:planks:*>;
recipes.remove(stick);
recipes.addShaped(stick * 4, [[planks, null], [null, planks]]);
```
The difference between var and val is that a val cannot be modified after it is declared:

```zenscript
val stick = <minecraft:stick>;
stick = <minecraft:bread>; // fails
```