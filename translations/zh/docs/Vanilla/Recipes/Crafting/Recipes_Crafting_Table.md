# 配方

## 配方类型

有几种配方：

### 形状配方

形状的配方是一种配方，在这种配方中，哪个项目进入哪个配置。 例如，你不能在任何情况下只安排7个铁豆来创建铁腿。 形状很重要，因此它是一种形状的配方。

### 镜像配方

镜像配方是形状的配方。 唯一不同的是，配方可以沿水平轴或垂直轴镜像。

### 无缝配方

无缝配方是配方的，只有你放置在网格中的物品才是配方的，而形状则不重要。 例如，蓝色和黄色染料会产生绿色染料。 这个配方不关心你放在哪里的项目。

## 删除配方

消除配方有几种方法。

### remove #移除

```zenscript
remove(输出, NBTMatch)；
```

这将制作给定的 `输出`的表格配方。  
如果 `NBTMatch` 为 true 它只会移除导致提供相同非关税壁垒数据的配方

`输出` 是一个 [IIngredient](/Vanilla/Variable_Types/IIngredient/)。  
`NBTMatch` 是一种布尔值和可选值(如果未指定则与假值相同)。

### 移除形状

```zenscript
移除Shaped(输出、输入)；
```

这更严格的是要删除哪个配方，并且只会删除那些使用 `输入为 <code>输出` 的形状配方</code>。

`输出` 是 [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`输入` 是一个 [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (例如，[[iron,iron,iron,iron,iron],[iron,null,iron],[iron,null,iron],[iron,null,iron]])

此外， `输入` 是可选的。 如果省略，函数将做到与 `recipe.remove`, 尽管它只会删除形状的配方。  
`输入` 可以包含通配符字符： `[[<*>]<*>,<*>], [<*>,<*>,<*>],[<*>,<*>,<*>]` 会引述一个配方的项目，只要每个配方都填满，就不会有任何关系。

### 移除休眠

```zenscript
removeShapeless(输出、输入、通配卡)；
```

这更严格的是要删除哪些配方，并且只会删除那些用 `输入来制作 <code>输出` 的无形配方</code>。  
如果 `通配符` 为 true 它会移除可制作 `输出` 带有 `输入` 等的合成配方 未指定的项目 (例如，您可以禁用所有含有Lapis等成分的无形配方)。

`输出` 是 [IIngrendient](/Vanilla/Variable_Types/IIngredient/)  
`输入` 是一个 [IIngredient](/Vanilla/Variable_Types/IIngredient/)[]  
`通配符` 是一个可选的 (如果未指定则与fals相同)

此外， `输入` 是可选的。 如果省略，函数将做与 `recipe.remove`相同的事情，尽管它只会删除shapeless Recipes。

### 全部移除

移除游戏中的所有制造配方。  
有点过度，不要你想吗？

```zenscript
移除所有();
```

### 按名称删除

由于1.12引入了命名配方，一旦您知道配方的名字，您也可以删除配方。 您也可以使用正则表达式同时删除多个配方。 如果你不知道是什么正则表达式，我不会在这里解释它！

```zenscript
removeByRegex("name[1-9]");
配方.removeByRecipeName("moded:symposname");
```

### 通过模组删除

您也可以删除由指定的模组添加的所有配方。  
您需要提供模组的模组作为字符串。

```zenscript
除去ByMod("modularmachinery")；
```

## 添加配方

### 第1.12段说明

关于1.12，每个添加的配方都需要一个UNIQUE标识符，因为锻造开发团队希望这样做。  
这意味着所有添加函数现在都需要额外的参数 `名称` 在开始时(不能省略)。  
这意味着 `recipe.addShaped(output,input)。` 现在是 `配方。 ddShaped(name,output,input);`  
所有其他功能都保持不变。 请记住 `name` 需要是唯一的！  
`name` 是一个字符串。

### 添加了

```zenscript
//pre-1.12
配方.addShaped(输出,inputs,function,action);

//1.12
配方.addShaped(name,output,inputs,function,action);
```

这将为 `输出` 创建一个形状的配方。使用 `输入` 作为属性。  
如果添加一个 `函数` 作为第三个参数，您也可以使用一个函数来确定输出。  
如果添加一个 `动作` 函数作为fiss参数， 如果项目是制作的，你也可以确定会发生什么情况。

`name` is a string and needs to be unique but is also optional `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (see below)  
`function` is a IRecipeFunction. 更多关于函数的信息，请参考 [关于 wiki 条目](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) 。  
`动作` 是一个 IRecipepeAction。 关于操作的更多信息，请参阅 [关于wiki条目的](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction)。

`输入` 是一个 2 维度 [元素](/Vanilla/Variable_Types/IIngredient/) 数组  
铁护腿的写法将为 `[[iron,iron,iron,iron],[iron,null,iron],[iron,null,iron],[iron,] ull,iron]]`  
如果这会令人困惑，请尝试将数组分割成每行一个数组

```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

配方.addShaped("CTLeggings", leggings,
 [iron,iron,iron,],
  [iron,null,iron],
  [iron,null,iron]]);
```

### addShapedMirrored

```zenscript
//正常pre 1.12语法
配方.addShapedMirrored(output,inputs,function);

///Recommend1.12语法
配方.addShapedMirrored(name,output,inputs,function,action);
```

与 `添加`相同。只有这样创建的配方才是一种镜像配方。

### addShapeless

```zenscript
//正常pre 1.12语法
配方.addShapeless(output,inputs,function,action)

///，建议1.12 语法
配方.addShapeless(name,output,inputs,function,action)
```

这就为 `输出` 创建了一个无耻的配方。使用 `输入` 作为成分。  
如果添加一个 `函数` 作为第三个参数，您也可以使用一个函数来确定输出。  
如果添加一个 `动作` 函数作为fiss参数， 如果项目是制作的，你也可以确定会发生什么情况。

`名称` 是一个字符串，需要唯一的 `输出` 是一个 [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` 是 [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (例如[<minecraft:dye:1>,<minecraft:dye:2>])  
`函数` 是一个 IRecipeFunction。 更多关于函数的信息，请参阅 [关于wiki条目的](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction)。 这是可选的。  
`行动` 是一种IRecipeAction。 关于操作的更多信息，请参阅 [关于wiki条目的](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction)。 这是可选的。

### addHidden

```zenscript
addHiddenShapeless(名称, IItemStack output, IIngredient[…]成分, @Optional IRecipeFunction 函数, @Optional IRecipeAction 动作);
addHiddenShaped(名称, IItemStack 输出, IIngredient[] 成分, @Optional IRecipeFunction 函数, @Optional IRecipepe Action action, @Optional boolian mirrored);
```

这为 `输出` 创建了一个无耻的配方。使用 `输入` 作为命名为 `名称`的属性。  
如果添加一个 `函数` 作为第三个参数，您也可以使用一个函数来确定输出。  
如果一个 `动作` 函数被添加为fass参数， 如果项目是制作的，你也可以确定会发生什么情况。  
如果配方是 `镜像`，您也可以设置无耻的变体，如果省略，它不会被忽略。

## 其他功能

### 获取所有注册的制造配方。

您可以使用它来获取一个 [`邮件列表<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) 其中包含所有注册的制造配方。

    所有配方；
    

### 获取给定的 IIngredient 的所有配方

您可以使用这个来获取一个 [`邮件列表<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) 其中包含所有注册的给定的配方 [IIngredient](/Vanilla/Variable_Types/IIngredient/)

    // 配方.getRecipesFor(Ingredient component);
    配方.getRecipesFor(<minecraft:iron_ingot>);
    

### 将所有物品的原料替换为另一个

你可以用它来替换配方中的所有 [成分](/Vanilla/Variable_Types/IIngredient/) ，比如所有棍棒都用石头。 它还接受一个可选的第三个参数，再次匹配配方输出。 如果配方

    //repluses.replace Alloccureces(IIngredient toReplace, IIngredient replace With, @Optional IIngredient forOutput);
    
    ///将每个棍棒替换为石质
    配方。 eplacAllocculences(<minecraft:stick>, <minecraft:stone>);
    
    // Exploiling uses any output, places gold innotes with gold blocks
    配方。 eplacAlloccurances(<ore:ingotGold>, <ore:blockGold>, <*>);
    
    
    ///Only replaces in restrictions with a diamond_sword as output
    restrictions eplaceAlloccureces(<ore:gemDiamond>, <ore:blockDiamond>, <minecraft:diamond_sword>);
    
    
    //conditions 工作 -> 替换除tnt 外任何配方输出的配方
    配方。 eplaceAlloccureces(<ore:gunpowder>, <minecraft:tnt>, <*>. nly(function(item) por
        return !isNull(item) & !<minecraft:tnt>.matches(item);
    });
    

### 制造业：

你甚至可以从 `内制作配方`！ 函数将返回 [IItemStack](/Vanilla/Items/IItemStack/) 或 `null` 取决于是否找到配方。

    // 配方.craft(IItemStack[] []content);
    配方.craft([[<minecraft:iron_ingot>]]);