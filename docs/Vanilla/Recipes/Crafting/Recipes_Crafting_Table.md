# 工作台配方

## 配方类型
有以下几种配方类型:

### 有序合成
有序合成是指一个物品需要放在特定槽的合成。
例：你不能随意放置7个铁锭以合成铁护腿。由于摆放位置对被合成的物品有影响，因此这是一个有序合成。

### Mirrored Recipe
Mirrored Recipes是一种有序合成。唯一的区别是合成表可以沿水平轴或垂直轴翻折。

### 无序合成
无序合成是指只有放入合成槽的物品影响合成的物品的合成。摆放的位置并不重要。
例：青金石和骨粉可以合成淡蓝色染料。这个配方不需要将物品放在特定的位置。


## 移除合成
有多种方式可以移除合成。


### remove（移除配方）
```Java
recipes.remove(output, NBTMatch);
```

移除以此物品为`output（输出）`的合成。
如果`NBTMatch（匹配NBT数据）`设置为true，则仅移除输出为与传入的NBT数据相同的物品的配方

`Output（输出）`类型为[IIngredient](/Vanilla/Variable_Types/IIngredient)。 
`NBTMatch（匹配NBT数据）` 类型为布尔值。它是可选参数（没有指明则默认为False)。


### removeShaped（移除有序合成配方）
```Java
recipes.removeShaped(output, inputs);

```
注：inputs为输入的物品的排列方式，本段简称输入
这个方法比上一个方法对所移除的物品有更严格的要求。它只会移除用`input（输入）`合成`output（输出）`的有序合成配方

`output（输出）` 类型为 [IIngredient](/Vanilla/Variable_Types/IIngredient)  
`inputs（输入）` 类型为 [IIngredient](/Vanilla/Variable_Types/IIngredient)[][] (例：[[iron,iron,iron],[iron,null,iron],[iron,null,iron]])

此外`inputs（输入）`是可选参数。如果省略此参数，它除了只会移除有序合成的配方以外和`recipe.remove`功能相同。
`inputs（输入）`可以包含通配符。例如 `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]`表示一个只要每一个槽有物品，而不论物品种类就可以用于合成的配方。 


### removeShapeless（移除无序合成配方）
```Java
recipes.removeShapeless(output, inputs, wildcard);
```

注：inputs为所有输入的物品，本段简称输入
这个方法比第一方法对所移除的物品有更严格的要求。它只会移除用`input（输入）`合成`output（输出）`的无序序合成配方
如果`wildcard（通配符）`设置为true，将会移除使用`input（输入）`与其他未指明物品合成`output（输出）`的无序合成配方（例：你可以移除所有需要使用青金石的无序合成配方）

`output（输出）`类型为[IIngredient](/Vanilla/Variable_Types/IIngredient)  
`inputs（输入）`类型为[IIngredient](/Vanilla/Variable_Types/IIngredient)[]  
`wildcard（通配符）`类型为布尔值且为可选参数（为指明则为false）

此外`inputs（输入）`是可选参数。如果省略此参数，它除了只会移除无序合成的配方以外和`recipe.remove`功能相同。

### removeAll（移除全部）
移除游戏中所有的配方。
是不是有点赶尽杀绝的意味？
```java
recipes.removeAll()`
```

### Remove by name
As 1.12 introduces naming recipes, you can also remove recipes once you know their name.
You can also use regex to remove multiple recipes at once. And no, if you don't know what regular expressions are, I won't explain it here!

```java
recipes.removeByRegex("name[1-9]");
recipes.removeByRecipeName("name123");
```


## Add Recipes

### Notes On 1.12

On 1.12, each added recipe requires a UNIQUE identifier, because the forge dev team wanted it that way.  
This means, all add functions now require an additional parameter `name` at the start (which cannot be omitted).  
This means `recipe.addShaped(output,input);` now is `recipe.addShaped(name,output,input);`  
All other functionality stay the same. Remember that `name` needs to be unique!  
`name` is a string.

### addShaped
```Java
//pre-1.12
recipes.addShaped(output,inputs,function,action);

//1.12
recipes.addShaped(name,output,inputs,function,action);
```

This creates a shaped recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`name` is a string and needs to be unique but is also optional
`output` is an [IItemStack](/Vanilla/Items/IItemStack)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient)[][] (see below)  
`function` is a IRecipeFunction. Please refer to the [respecting wiki entry](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipefunction) for more information on functions.  
`action` is a IRecipeAction. Please refer to the [respecting wiki entry](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipeaction) for more information on actions.  

`inputs` is a 2 Dimensional [IIngredient](/Vanilla/Variable_Types/IIngredient) Array.  
So the recipe for Iron Leggings would be written as `[[iron,iron,iron],[iron,null,iron],[iron,null,iron]]`  
If that looks to confusing, try splitting the arrays up into one array per line
```Java
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

recipes.addShaped("CTLeggings", leggings,
 [[iron,iron,iron],
  [iron,null,iron],
  [iron,null,iron]]);
```

### addShapedMirrored
```Java
//Normal pre 1.12 syntax
recipes.addShapedMirrored(output,inputs,function,action);

//Recommended 1.12 syntax
recipes.addShapedMirrored(name,output,inputs,function,action);
```

Same as `addShaped`, only that the recipe created this way is a mirrored recipe.


### addShapeless
```Java
//Normal pre 1.12 syntax
recipes.addShapeless(output,inputs,function,action)

//Recommended 1.12 syntax
recipes.addShapeless(name,output,inputs,function,action)
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients.
If a `function` is added as third parameter, you can also use a function to determinate the output.
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`name` is a string and needs to be unique
`output` is an [IItemStack](/Vanilla/Items/IItemStack)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient)[]  (e.g. [<minecraft:dye:1>,<minecraft:dye:2>])  
`function` is a IRecipeFunction. Please refer to the [respecting wiki entry](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipefunction) for more information on functions. This is optional.  
`action` is a IRecipeAction. Please refer to the [respecting wiki entry](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipeaction) for more information on actions. This is optional.  


## Other Functionality

### Get all registered Crafting recipes.
You can use this to get a [`List<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe) that contains ALL registered crafting recipes.  
```
recipes.all;
```

### Get all recipes for a given IIngredient
You can use this to get a [`List<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe) that contains ALL registered crafting recipes for the given [IIngredient](/Vanilla/Variable_Types/IIngredient).  
```
//recipes.getRecipesFor(IIngredient ingredient);
recipes.getRecipesFor(<minecraft:iron_ingot>);
```

### Craft
You can even craft from inside `recipes`! The function will return an [IItemStack](Vanilla/Items/IItemStack) or `null` depending if a recipe is found or not.

```
//recipes.craft(IItemStack[][]content);
recipes.craft([[<minecraft:iron_ingot>]]);
```
