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

这个方法比上一个方法对所移除的物品有更严格的要求。它只会移除用`input`合成`output`的有序合成配方

`output（输出）` 类型为 [IIngredient](/Vanilla/Variable_Types/IIngredient)  
`inputs（输入）` 类型为 [IIngredient](/Vanilla/Variable_Types/IIngredient)[][] (例：[[iron,iron,iron],[iron,null,iron],[iron,null,iron]])

此外`inputs`是可选参数。如果省略此参数，它除了只会移除有序合成的配方以外和`recipe.remove`功能相同。
`inputs`可以包含通配符。例如 `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]`表示一个只要每一个槽有物品，而不论物品种类就可以用于合成的配方。 


### removeShapeless（移除无序合成配方）
```Java
recipes.removeShapeless(output, inputs, wildcard);
```


这个方法比第一方法对所移除的物品有更严格的要求。它只会移除用`input`合成`output`的无序序合成配方
如果`wildcard`设置为true，将会移除使用`input`与其他未指明物品以合成`output`的无序合成配方（例：你可以移除所有需要使用青金石的无序合成配方）

`output（输出）`类型为[IIngredient](/Vanilla/Variable_Types/IIngredient)  
`inputs（输入）`类型为[IIngredient](/Vanilla/Variable_Types/IIngredient)[]  
`wildcard（通配符）`类型为布尔值且为可选参数（为指明则为false）

此外`inputs`是可选参数。如果省略此参数，它除了只会移除无序合成的配方以外和`recipe.remove`功能相同。

### removeAll（移除全部）
移除游戏中所有的配方。
是不是有点赶尽杀绝的意味？
```java
recipes.removeAll()`
```

### Remove by name（使用名称移除）
由于1.12可以给合成命名，如果你知道了合成的名称也可以通过它以移除合成。
你也可以用正则表达式一次移除多个合成。就算你不懂普通表达式，我也不会在这里解释！

```java
recipes.removeByRegex("name[1-9]");
//使用通配符移除合成
recipes.removeByRecipeName("name123");
//使用合成名称移除合成
```


## 添加合成
### 1.12 提醒

1.12版本中，每一个添加的合成都有一个独特的编号，只是因为forge开发团队希望这样。
也就是说现在所有添加配方的函数在开头需要有一个不可省略的参数`name`。
因此`recipe.addShaped(output,input);`会变为`recipe.addShaped(name,output,input);`  
其他函数都保持一致。谨记`name`要求是独特的。
`name` 的类型为字符串。

### addShaped（添加有序合成）
```Java
//1.12之前
recipes.addShaped(output,inputs,function,action);

//1.12
recipes.addShaped(name,output,inputs,function,action);
```

此方法将添加使用`input`合成`output`的有序合成配方
如果`function`作为第三个被添加的参数，你还可以使用函数以判定产物。
如果`action`函数作为第四个被添加的参数，你还可以决定当物品被合成时触发的事件。

`name（名称）` 类型为字符串且需要是独特的，但又是一个可选参数。
`output（输出）`类型为[IItemStack](/Vanilla/Items/IItemStack)  
`inputs（输入）`类型为[IIngredient](/Vanilla/Variable_Types/IIngredient)[][] (见下)  
`function（函数）`类型为IRecipeFunction。更多关于function的信息请参考[对应的wiki页面](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipefunction)。
`action（功能）`类型为IRecipeAction。更多关于action的信息请参考[对应的wiki页面](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipeaction)。

`inputs`是一个二维[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)数组。  
因此铁护腿的配方会被写成`[[iron,iron,iron],[iron,null,iron],[iron,null,iron]]`  
如果它看着就太复杂，可以将数组分裂，使得每一行都有一个数组。
```Java
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

recipes.addShaped("CTLeggings", leggings,
 [[iron,iron,iron],
  [iron,null,iron],
  [iron,null,iron]]);
```

### addShapedMirrored（添加镜像合成）
```Java
//常规格式（1.12之前）
recipes.addShapedMirrored(output,inputs,function,action);

//推荐在1.12使用的格式
recipes.addShapedMirrored(name,output,inputs,function,action);
```

处理创建的配方是镜像合成以外，和`addShaped`没有区别。


### addShapeless（添加无序合成）
```Java
//常规格式（1.12之前）
recipes.addShapeless(output,inputs,function,action)

//推荐在1.12使用的格式
recipes.addShapeless(name,output,inputs,function,action)
```


此方法将添加一个使用`input`合成`output`的无序合成配方
如果`function`作为第三个被添加的参数，你还可以使用函数以判定产物。
如果`action`函数作为第四个被添加的参数，你还可以决定当物品被合成时触发的事件。

`name（名称）` 类型为字符串且需要是独特的
`output（输出）`类型为[IItemStack](/Vanilla/Items/IItemStack)  
`inputs（输入）`类型为[IIngredient](/Vanilla/Variable_Types/IIngredient)[] (例 [<minecraft:dye:1>,<minecraft:dye:2>])  
`function（函数）`类型为IRecipeFunction。更多关于function的信息请参考[对应的wiki页面](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipefunction)。它是可选参数。
`action（功能）`类型为IRecipeAction。更多关于action的信息请参考[对应的wiki页面](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipeaction)。它是可选参数。


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
