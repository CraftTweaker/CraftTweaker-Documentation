# Recipes

## Recipe Types
There are several types of recipes:

### Shaped Recipes
Shaped Recipes are recipes, where it matters, which item goes into which slot.
For example, you can't just arrange 7 iron ingots in any order to create iron leggings. The shape matters, thus it is a shaped recipe.

### Mirrored Recipe
Mirrored Recipes are shaped recipes. Only difference is that the recipe can be mirrored along the horizontal or vertical axes.

### Shapeless Recipes
Shapeless Recipes are recipes, where only the items you put in the crafting grid matter, whereas the shape is of no importance.
For example, blue and yellow dye create green dye. This recipe doesn't care about where you put which item.


## Remove Recipes
There are several ways of removing recipes.


### remove
```
recipes.remove(output, NBTMatch);
```

This will crafting table recipes for the given `output`.  
If `NBTMatch`  is true, it will only remove recipes that result in items with the same NTB-Data as provided

`Output` is an IIngredient.  
`NBTMatch` is a boolan and optional (Will be the same as false if not specified).


### removeShaped
```
recipes.removeShaped(output, inputs);
```

This one is more strict on which recipes to remove and will only remove shaped recipes that craft `output` with `input`.

`output` is an IIngredient  
`inputs` is an IIngredient[][] (e.g.[[iron,iron,iron],[iron,null,iron],[iron,null,iron]])

Furthermore, `inputs` is optional. If omitted, the function will do the same as `recipe.remove`, though it will only remove shaped Recipes.  
`inputs` can contain wildcard characters: `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]` would refer a recipe whose items, as long as each slot is filled, don't matter.


### removeShapeless
```
recipes.removeShapeless(output, inputs, wildcard);
```

This one is more strict on which recipes to remove and will only remove shapeless recipes that craft `output` with `input`.  
If `wildcard` is true, it will remove shapeless recipes that craft `output` with `input` and other, non-specified items (for example you could disable all shapeless recipe that contain, among others, Lapis as ingredient).

`output` is an IIngredient  
`inputs` is an IIngredient[]  
`wildcard` is a boolan and optional (Will be the same as false if not specified)

Furthermore, `inputs` is optional. If omitted, the function will do the same as `recipe.remove`, though it will only remove shapeless Recipes.

## Add Recipes

### Notes On 1.12

On 1.12, each added recipe requires a UNIQUE identifier, because the forge dev team wanted it that way.  
This means, all add functions now require an additional parameter `name` at the start (which cannot be omitted).  
This means `recipe.addShaped(output,input);` now is `recipe.addShaped(name,output,input);`  
All other functionality stay the same. Remember that `name` needs to be unique!  
`name` is a string.

### addShaped
```
//pre-1.12
recipes.addShaped(output,inputs,function,action);

//1.12
recipes.addShaped(name,output,inputs,function,action);
```

This creates a shaped recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`name` is a string and needs to be unique but is also optional
`output` is an IItemStack  
`inputs` is an IIngredient[][] (see below)  
`function` is a IRecipeFunction. Please refer to the respecting wiki entry for more information on functions.  
`action` is a IRecipeAction. Please refer to the respecting wiki entry for more information on actions.  

`inputs` is a 2 Dimensional IIngredient Array.  
So the recipe for Iron Leggings would be written as `[[iron,iron,iron],[iron,null,iron],[iron,null,iron]]`  
If that looks to confusing, try splitting the arrays up into one array per line
```
val iron = <minecraft:iron_ingot>;
val leggins = <minecraft:iron_leggins>;

recipes.add(leggins,
 [[iron,iron,iron],
  [iron,null,iron],
  [iron,null,iron]]);
```

### addShapedMirrored
```
//Normal pre 1.12 syntax
recipes.addShapedMirrored(output,inputs,function,action);

//Recommended 1.12 syntax
recipes.addShapedMirrored(name,output,inputs,function,action);
```

Same as `addShaped`, only that the recipe created this way is a mirrored recipe.


### addShapeless
```
//Normal pre 1.12 syntax
recipes.addShapeless(output,inputs,function,action)

//Recommended 1.12 syntax
recipes.addShapeless(name,output,inputs,function,action)
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients.
If a `function` is added as third parameter, you can also use a function to determinate the output.
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`name` is a string and needs to be unique
`output` is an IItemStack  
`inputs` is an IIngredient[] (e.g. [<minecraft:dye:1>,<minecraft:dye:2>])  
`function` is a IRecipeFunction. Please refer to the respecting wiki entry for more information on functions. This is optional.  
`action` is a IRecipeAction. Please refer to the respecting wiki entry for more information on actions. This is optional.  