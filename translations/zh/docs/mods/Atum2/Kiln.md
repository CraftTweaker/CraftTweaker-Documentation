# 基尔文

Kiln 是一个用于快速处理构造块的多块，可以通过熔炼炉中的东西获得。

## 所属包名
`mods.atum.Kiln;`

## 黑名单

玉米配方是基于原料熔炉配方的，除构件块外，还排序所有其他配方。 黑名单是你进一步最大限度地减少从草原熔炉中抢到什么配方的一种方式。

`mods.atum.Kiln.blacklist(id);`

- `id` 应该黑名单上的输入方块/项目的命名空间 ID。

移除基尔会从原料熔炉中提取的配方中指定项目/方块的累计数

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## 添加配方

`mods.atum.Kiln.addRecipe(input, output, experience, @Optional cookTime)；`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `体验` 浮点数
- `cooktime` 整数 (如果留空，默认值为 75)

添加配方与指定输入、输出、体验 & 烹饪时间

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2)；
```

## 删除配方

移除方法仅适用于由 Atum (其他模式) 在 默认情况下，这只能是 Mar-White Ceramic Tile Block 配方。 如果你想要删除其他东西，你可能正在寻找黑名单 (上面的文档)

### 通过输出移除配方

`mods.atum.Kiln.removeRecipeByOutput(输出)；`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

移除输出结果为所提供的 [IItemStack](/vanilla/api/items/IItemStack) 的所有配方。

```zenscript
mods.atum.Kiln.removeRecipeByOut(<item:atum:marl>)；
```

### 通过输出 & 输入移除配方

`mods.atum.Kiln.removeRecipeByOutput(输出, 输入)；`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

移除指定输出 & 输入的特定方法

```zenscript
mods.atum.Kiln.removeRecipeByOutPutt(<item:atum:cermic_white>, <item:atum:marl>);
```

### 其他移除方法

请参阅 [配方管理器](/recipes/recipe_managers) 以其他方式去除旋转轮配方
