# Control Structures
The MineTweaker scripting engine (ZenScript) is still under heavy development. Control structures are currently only partially implemented, but it is already possible to use looping structures to aid you in your development.

When we make use of looping structures, we generally have to store some variables first. When storing items or ingredients into variables, you never had to worry about item types. Likewise, when you use arrays or dictionaries in recipes or tag values, you could just provide the right syntax and everything worked.

However, MineTweaker is *strongly typed*. As long as it can infer the type from your expression, you don't have to provide any typing information, but when you declare such a thing as an array it won't work anymore. This would fail:

```zenscript
var myItems = [<280>, <1>];
```
The problem is that MineTweaker doesn't know your array type. It did in all the examples given before, since it could infer the array type from the function you were calling, but when you assign it to a variable it can't do that since it doesn't know your type yet. To fix this, you need to cast the array to a specific type, as such:

```zenscript
import minetweaker.item.IItemStack;

var myItems = [<280>, <1>] as IItemStack[];
```
IItemStack is the type that you get when you resolve an item variable such as <minecraft:stick>. IItemStack denotes a specific object and can be used either as a crafting ingredient or as crafting output, as you very likely already did.

Its friends is IIngredient, which is more general than an item. Ore dictionary entries, for instance, are ingredients. They cannot be used as output, but they can be used as input for crafting. Additionally, if you add transformations or conditions to an IItemStack, it will become an IIngredient:

```zenscript
import minetweaker.item.IIngredient;

var myIngredients = [<ore:plankWood>, <280>.onlyWithTag({display:{Name: "Something"}})] as IIngredient[];
var myIngredients2 = [<280>, <ore:plankWood>] as IIngredient[]; // will work since an IItemStack can be casted to an IIngredient
```
When you define arrays of items, you can use looping operators on them to make your scripts shorter. For instance, let's say we want default log to wood recipes to have low yield yet improve it when crafting it with axes, and have the type of axe determine the amount of planks we have:

```zenscript
import minetweaker.item.IItemStack;

var myLogs = [<17:0>, <17:1>, <17:2>, <17:3>, <17:0>, <17:1>] as IItemStack[];
var myPlanks = [<5:0>, <5:1>, <5:2>, <5:3>, <5:4>, <5:5>] as IItemStack[];

var stoneAxe = <275>.anyDamage().transformDamage();
var ironAxe = <258>.anyDamage().transformDamage();
var goldenAxe = <286>.anyDamage().transformDamage();
var diamondAxe = <279>.anyDamage().transformDamage();

for i, log in myLogs {
    var plank = myPlanks[i];
    
    recipes.removeShapeless(plank, [log]);
    recipes.addShapeless(plank * 2, [log]);
    recipes.addShapeless(plank * 3, [log, stoneAxe]);
    recipes.addShapeless(plank * 4, [log, ironAxe]);
    recipes.addShapeless(plank * 5, [log, goldenAxe]);
    recipes.addShapeless(plank * 6, [log, diamondAxe]);
}
```
Now you can put all of your mod-added planks into the array, as well as their logs, and have the for loop do the heavy lifting for you!

Sometimes you may find the need to assign NBT tags inside a for loop. You can define an NBT value in a variable outside the loop, but only when you cast it to IData. IData is the datatype for an NBT tag. Expanding our former example a little bit:

```zenscript
import minetweaker.data.IData;
import minetweaker.item.IItemStack;

var myData = {display: {Name: "Axed plank"}} as IData;
var myLogs = [<17:0>, <17:1>, <17:2>, <17:3>, <17:0>, <17:1>] as IItemStack[];
var myPlanks = [<5:0>, <5:1>, <5:2>, <5:3>, <5:4>, <5:5>] as IItemStack[];

var stoneAxe = <275>.anyDamage().transformDamage();
var ironAxe = <258>.anyDamage().transformDamage();
var goldenAxe = <286>.anyDamage().transformDamage();
var diamondAxe = <279>.anyDamage().transformDamage();

for i, log in myLogs {
    var plank = myPlanks[i].withTag(myData);
    
    recipes.removeShapeless(plank, [log]);
    recipes.addShapeless(plank * 2, [log]);
    recipes.addShapeless(plank * 3, [log, stoneAxe]);
    recipes.addShapeless(plank * 4, [log, ironAxe]);
    recipes.addShapeless(plank * 5, [log, goldenAxe]);
    recipes.addShapeless(plank * 6, [log, diamondAxe]);
}
```