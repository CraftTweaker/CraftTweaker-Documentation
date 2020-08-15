# Quern

## 所属包名
`mods.atum.Quern;`

## 添加配方

`mods.atum.Quern.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `旋转` 0以上的任何数字

添加指定输入 & 输出的配方，这需要指定的旋转来完成查询

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3)；
```

## 删除配方

### 通过输出移除配方

`mods.atum.Quern.removeRecipeByOutput(输出);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

移除输出结果为所提供的 [IItemStack](/vanilla/api/items/IItemStack) 的所有配方。

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>)；
```

### 通过输出 & 输入移除配方

`mods.atum.Quern.removeRecipeByOutput(输出, 输入)；`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

移除指定输出 & 输入的特定方法

```zenscript
mods.atum.Quern.removeRecipeByOutpute(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### 其他移除方法

请参阅 [配方管理器](/recipes/recipe_managers) 以其他方式移除查询配方
