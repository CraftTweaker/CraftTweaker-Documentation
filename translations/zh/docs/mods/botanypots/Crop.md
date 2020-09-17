# 作物数

类路径： `mods.botanypots.Crop`

## 使用

若要使用，导入 `导入mods.botanypots.Crop的类；` 在您的脚本开头。

## 创建裁剪模式

`Crop.create(id, seed, display, tickRate, floader, categories);`

- `id` &lt;string> The id of the crop. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `种子` <[IIngredient](/vanilla/api/items/IIngredient)> 用于种植作物的物品。
- `显示` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 在渲染裁剪时要显示的方块。
- `tickRate` &lt;int> 是作物需要多长时间才能生长的因素之一。
- `乘数` &lt;浮点> 另一个因子来决定裁剪需要多长时间。
- `类别` &lt;字符串[……]> 这种作物可以生长的一组土壤类别。

这可以用来创建一个新的作物。 请记住，需要单独添加掉料。

```zenscript
Crop.create("示例包:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["stone"]);
```

## 移除裁剪模式

`裁剪拆卸(id)；`

- `id` &lt;字符串> 要移除的裁剪的 id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。

移除基于 id 的裁剪。

```zenscript
Crop.remove("botanypots:crop/wheat");
```

## 设置种子项

`Crop.setSeed(id, seed)；`

- `id` &lt;string> The id of the crop. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `种子` <[IIngredient](/vanilla/api/items/IIngredient)> 用于种植作物的物品。

设置用于种植作物的物品。

```zenscript
Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## 设置显示块

`Crop.setDisplay(id, state)；`

- `id` &lt;string> The id of the crop. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `显示` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 在渲染裁剪时要显示的方块。

设置裁剪的方块渲染。

```zenscript
Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## 设置推送速率

`Crop.setTickRate(id, tickRate);`

- `id` &lt;string> The id of the crop. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `tickRate` &lt;int> 更新的tick 速率。 作物种植需要多长时间的因素之一。

设置裁剪刻度因数。

```zenscript
Crop.setTickRate("botanypots:cro/ wheat", 5000);
```

## 设置增长乘数

`Crop.setGrowthModifier(id, multier);`

- `id` &lt;string> The id of the crop. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `乘数` &lt;浮点> 更新乘数。 作物种植需要多长时间的另一个因素。

设置作物的增长乘数/调整器。

```zenscript
Crop.setGrowthMofieir(“botanypots:crop/wheat”，1.8)；
```

## 更改裁剪类别

更改与裁剪关联的类别。 类别用于将有效土壤与作物相匹配。

### 将类别添加到裁剪中

`Crop.addCategory(id, categoriesToAdd)；`

- `id` &lt;string> The id of the crop. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `categoriesToAdd` &lt;string]> 一个与裁剪关联的分类数组。

```zenscript
Crop.addCategory(“botanypots:crop/wheat”, ["stone", "雪"]);
```

### 从裁剪中删除类别

`Crop.removeCategory(id, categoriesToRemove)；`

- `id` &lt;string> The id of the crop. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `categoriesToday` &lt;string. [> 一个要与crop 断开关联的类别数组。

```zenscript
Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### 从裁剪清除所有类别

`Crop.clearcategories(id)；`

- `id` &lt;string> The id of the crop. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。

```zenscript
Crop.clearcategories("botanypots:cro/wheat");
```

## 裁剪掉文件

### 添加掉落中

`Crop.addDrop(id, drop, opportence, min, max)；`

- `id` &lt;字符串> 要添加一滴到的裁剪的 id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `掉入` <[IItemStack](/vanilla/api/items/IItemStack)> 要掉落的物品
- `几率` &lt;浮点> 它掉落的几率。
- `分钟` &lt;int> 该项目的最小金额给出。
- `最大` &lt;int> 该物品的最大数量可给予。

这给作物增加了新的潜在下降。

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### 删除掉落中

`裁剪移除Drop(id，移除)；`

- `id` &lt;字符串> 要移除掉的裁剪的 id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `to删除` <[IIngredient](/vanilla/api/items/IIngredient)> 与可移除相匹配的组件

删除任何有匹配项的掉落。

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## 正在获取所有ID

`Crop.getAllIds();`

- 返回： &lt;字符串[]> 此时所有已知裁剪id的数组。

这将给您一个当时所有已知裁剪ID的数组。

```zenscript
// 将所有id记录到 crafttweeper.log 文件
的 Crop.getAllids() 中的 crop Id 中的 format@@
    println(ropId);
}
```

## 移除所有裁剪中

这将完全移除所有当前注册的作物。 如果你想要通过脚本从头重新创建所有数据，这是有用的。

```zenscript
crop.removeAll();
```
