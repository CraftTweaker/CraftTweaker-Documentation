# 旋转滚轮

## 所属包名
`mods.atum.SpinningWheel;`

## 添加配方

`mods.atum.SpinningWheel.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `旋转` 0以上的任何数字

添加指定输入 & 输出的配方，这需要指定的旋转来完成配方

```zenscript
mods.atum.SpinningWheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3)；
```

## 删除配方

### 通过输出移除配方

`mods.atum.SpinningWheel.removeRecipeByOutput(输出);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

移除输出结果为所提供的 [IItemStack](/vanilla/api/items/IItemStack) 的所有配方。

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutput(<item:atum:linen_thread>)；
```

### 通过输出 & 输入移除配方

`mods.atum.SpinningWheel.removeRecipeByOutput(输出, 输入)；`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

移除指定输出 & 输入的特定方法

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutpute(<item:atum:linen_thread>, <item:atum:flax>);
```

### 其他移除方法

请参阅 [配方管理器](/recipes/recipe_managers) 以其他方式去除旋转轮配方
