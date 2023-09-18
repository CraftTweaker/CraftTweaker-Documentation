# Advanced Recipes
So far we have learned about how to add or remove simple recipes. But what if the inputs and outputs also involve damage values or NBT tags?

## Contents
* NBT Tag in output
* Input conditions
* Output reuse and transformations
* Function recipes
### NBT Tag in output
It is possible to define both damage or an NBT tag as output. Let's take a pickaxe as our toy for this tutorial:

```zenscript
val stick = <minecraft:stick>;
val pick = <minecraft:stone_pickaxe>;
val damagedPick = pick.withDamage(10);
val stickedPick = pick.withTag({display: {Name: "Sticked pick", Lore: ["This pick", "Has been sticked"]}});

recipes.addShaped(damagedPick, [[pick, stick]]);
recipes.addShaped(stickedPick, [[pick, stick], [stick, stick]]);
```
Crafting the pick with 1 or 3 sticks as in the recipe will give you an item with the appropriate damage and name/lore on it, respectively.

Input conditions
You can also require the input to contain certain NBT tags. Say, you make a recipe that requires our sticked pick. Let's modify our file:

```zenscript
val stick = <minecraft:stick>;
val pick = <minecraft:stone_pickaxe>;
val damagedPick = pick.withDamage(10);
val stickedPick = pick.withTag({display: {Name: "Sticked pick", Lore: ["This pick", "Has been sticked"]}});

recipes.addShaped(damagedPick, [[pick, stick]]);
recipes.addShaped(stickedPick, [[pick, stick], [stick, stick]]);

val stonedPick = pick.withTag({display: {Name: "Stoned pick", Lore: ["This pick", "Has been experimenting too much"]}});
val onlyStickedPick = pick.onlyWithTag({display: {Name: "Sticked pick"}});
val cobble = <minecraft:cobblestone>;
recipes.addShaped(stonedPick, [[onlyStickedPick, cobble], [cobble, cobble]]);
```
What about the lore part in our sticked pick? Since your condition only contains the name, the lore part is ignored - when setting a condition on the data tag, MineTweaker only cares about the contents that you specified and ignores everything else.

**Note the difference between withTag and onlyWithTag. withTag is for an output and is the exact tag that will be output. onlyWithTag is for input and sets a condition. Applying withTag on an input has no effect on the recipe.**

Other conditions exist too:

```zenscript
myItem.onlyDamaged(); // only accepts damaged items
myItem.onlyDamageAtLeast(15); // only accepts items with a damage of at least 15
myItem.onlyDamageAtMost(100); // only accepts items with a damage of at most 100
myItem.onlyDamageBetween(15, 100); // only accepts items with a damage between 15 and 100
```
Multiple conditions can be added to a single ingredient, too:

```zenscript
myItem.onlyDamaged().onlyWithTag({display: {Name: "Sticked pick"}});
```
### Output reuse and transformations
Since MineTweaker 3.0.2, it is now possible to reuse items, return empty buckets to the crafting grid (or whatever item you want) or damage items upon crafting.

We could for instance make a recipe to get more sticks out of wood by using an axe:

```zenscript
recipes.addShapeless(<minecraft:stick> * 3, [<minecraft:stone_axe>, <ore:woodPlanks>]);
```
Nice. But the stone axe gets consumed, and that is sort of annoying. We can fix this with the reuse modifier:

```zenscript
recipes.addShapeless(<minecraft:stick> * 3, [<minecraft:stone_axe>.reuse(), <ore:plankWood>]);
```
Great! We can reuse the axe. Now what if we also wanted the axe to be damaged when you use it?

```zenscript
recipes.addShapeless(<minecraft:stick> * 3, [<minecraft:stone_axe>.transformDamage(), <ore:plankWood>]);
```
We can also deal more than 1 damage upon crafting:

```zenscript
recipes.addShapeless(<minecraft:stick> * 3, [<minecraft:stone_axe>.transformDamage(4), <ore:plankWood>]);
```
Imagine we'd want to make a recipe to turn dirt into grass by combining dirt, a water bucket and wheat. We could make this recipe:

```zenscript
recipes.addShapeless(<minecraft:grass>, [<minecraft:dirt>, <minecraft:water_bucket>, <minecraft:wheat>]);
```
However, crafting this will consume the bucket. We can tell MineTweaker to return the empty bucket afterwards:

```zenscript
recipes.addShaped(<minecraft:grass>, [[
	<minecraft:dirt>,
	<minecraft:water_bucket>.transformReplace(<minecraft:bucket>),
	<minecraft:wheat>
]]);
```
Now, crafting a grass block will return the empty crafting bucket in the crafting grid.

Sometimes mods define their own behavior when you use their items while crafting. Likewise, Minecraft will return you an empty bucket when you use it in a crafting recipe. If you don't want that, you can tell the item to not return anything at all:

```zenscript
recipes.addShaped(<minecraft:grass>, [[
	<minecraft:dirt>,
	<minecraft:water_bucket>.noReturn(),
	<minecraft:wheat>
]]);
```
If you want to give something back, but not in the crafting inventory, you can also use giveBack. GiveBack can be used without arguments, in which case it will return the original item, or it can be used with an item, in which case that item will be given back into the player inventory:

```zenscript
recipes.addShaped(<minecraft:grass>, [[
	<minecraft:dirt>,
	<minecraft:water_bucket>.giveBack(<minecraft:iron_ore> * 3),
	<minecraft:wheat>
]]);
```
GiveBack will usually also have the side-effect of suppressing mod item return behavior. It may thus be a handy alternative to the transformReplace modifier in those cases.

### Function recipes
When adding a recipe, you may also supply an additional argument, which is a custom function. This function can programmatically determine the output of your recipe.

To demonstrate how this works, let's make a recipe that repairs a stone pickaxe when you craft it with cobblestone. The output of our recipe depends on the pickaxe that is provided (its damage), thus a regular recipe won't work in this case.

Let's start by adding the function to it:

```zenscript
recipes.addShapeless(<minecraft:stone_pickaxe>, [<minecraft:stone_pickaxe>, <minecraft:cobblestone>], function(output, inputs, crafting) {
  // to be implemented
}
```
Now we need to look at the value of the pickaxe. In order to retrieve the actual values of the inputs, we need to mark them with a name, and MineTweaker will store it in the inputs list:

```zenscript
recipes.addShapeless(<minecraft:stone_pickaxe>, [<minecraft:stone_pickaxe>.marked("pick"), <minecraft:cobblestone>], function(output, inputs, crafting) {
  // to be implemented. inputs.pick now contains the pickaxe used as input
}
```
Then it's just a matter of writing the code to fix the pickaxe:

```zenscript
recipes.addShapeless(<minecraft:stone_pickaxe>, [<minecraft:stone_pickaxe>.anyDamage().marked("pick"), <minecraft:cobblestone>], function(output, inputs, crafting) {
  // the max is there to make sure that the damage doesn't go negative
  // fixes 25 damage per cobblestone
  return inputs.pick.withDamage(max(0, inputs.pick.damage - 25));
});
```
More will come to function recipes later!