# 磨粉机

Crusher包可以用来添加/移除沉浸式工程粉碎器的配方。

## 调用包

您可以使用 `mods.immersiveengineering.Crusher` 来调用Crusher 包裹。

## 添加配方

| 必填 | 类型   | 数据类型                                                    |
| -- | ---- | ------------------------------------------------------- |
| 必要 | 输出   | [IItemStack](/Vanilla/Items/IItemStack/)                |
| 必要 | 输入   | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必填 | 能源   | 整数                                                      |
| 可选 | 次要输出 | [IItemStack](/Vanilla/Items/IItemStack/)                |
| 可选 | 次要机会 | 双精度                                                     |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Opiddle secondaryChance);

mods.immersiveengineerering.crusher。 ddRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods. mmersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5)；
```

## 通过输出移除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Crusher.removeRecipe(IItemstack 输出)；

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>)；
```

## 通过输入移除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输入 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveEngineering.Crusher.removeRecipesForput(Itemstack input)；

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>)；
```