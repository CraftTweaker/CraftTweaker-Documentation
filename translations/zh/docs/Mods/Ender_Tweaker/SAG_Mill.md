# SAG Mill

## 所属包名

`导入 mods.enderio.SagMill;`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/)[]输出** 该配方的结果。
- **浮动[]几率** 这个项目出现的几率。 必须与输出相同长度。
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 输入** 输入.
- **String bonusType** This impact how Grinding Balls 可能是NOE (无红利)，MULTIPLY_OUTPUT (可以增加几率> 1.0)，和 CHANCE_ONLY (上限为 1.0)。
- **英寸能量成本** 配方使用量有多大。 默认值为 5000。
- **float xp** 是从这个配方获得的 xp 。 也许不是消极的。

## 添加配方

```zenscript
mods.enderio.SagMill.addRecipe(IItemStack[]output, float[]chances, IIngredient input, @Optional String bonusType, @Optional int energyCost, @Optional float[] xp);

mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>);
```

## 移除

```zenscript
mods.enderio.SagMill.removeRecipe(IItemStack 输入);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```