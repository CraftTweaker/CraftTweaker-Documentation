# ICrafting配方

ICraftingRecipe 是ZS 如何看待它的一个制造桌子。

## 导入相关包

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.reciples.ICraftingRecipe`

## ZenMethods/Getters

### 获取属性

要么返回一个 [IIngredient](/Vanilla/Variable_Types/IIngredient/)[]或一个 [Igredient](/Vanilla/Variable_Types/IIngredient/)[]

```zenscript
复合成分1D
rec.incomponents2D
```

### Get standart output

以 [IItemStack](/Vanilla/Items/IItemStack/) 返回的 ouptut。 小心，可以为空！

```zenscript
输出
```

### 检查条件

每个返回一个布尔值

```zenscript
建议.hasTransformers;
rec.hasRecipepeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.shaped;
```

### 资源域

基本上，添加该配方的模组的模组。

```zenscript
Rec.resourceDomain;
rec.fullResourceDomain;
```

### 成分：

返回成分列表分别为 [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[] 或 [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[]\[……]。

```zenscript
rec.listicents1D;
rec.listents2D;
```

### 输出

该配方的 [IItemStack](/Vanilla/Items/IItemStack/) 输出。

```zenscript
输出；
```

### 到字符串

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```