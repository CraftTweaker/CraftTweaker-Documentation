# Soils

类路径： `mods.botanypots.Soil`

## 使用

若要使用，导入 `导入mods.botanypots.Soil的类；` 在您的脚本开头。

## 创建新的土地

`土壤.create(id, components, displayState, tickRate, categories);`

- `id` &lt;字符串> 新土壤的 id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `成分` <[Iugrendient](/vanilla/api/items/IIngredient)> 用来确定哪些物品/方块用于将土壤放入土豆的成分。
- `显示状态` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 土壤在池中显示的方块状态。
- `tickRate` &lt;int> The tick rate for the land
- `类别` &lt;字符串[……]> 与新土壤相关联的数组类别。

创建一个新的土壤入口，玩家可以在机器人坑中使用。

```zenscript
Soil.create("示例包:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 100, ["rocky"]);
```

## 移除一块土

`土壤.移除(id)；`

- `id` &lt;字符串> 要移除的土壤ID。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。

从游戏数据中移除土壤。

```zenscript
土壤.remove("botanypots:soil/podzol");
```

## 变化中的土壤提取率

`土壤.setTicks(id, tickRate)；`

- `id` &lt;字符串> 土壤中的id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `tickRate` &lt;int> The new tick rate for the land

改变给定土壤的刻度速度。

```zenscript
Soil.setTicks("botanypots:soil/grass", 1300);
```

## 土壤成分变化

`土壤成分(id，成分)；`

- `id` &lt;字符串> 土壤中的id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `成分` <[Iugrendient](/vanilla/api/items/IIngredient)> 用来确定哪些物品/方块用于将土壤放入土豆的成分。

改变用于将土壤放入机器人马桶的物品。

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## 改变土壤显示

`Soil.setDisplayState(id, displayState)；`

- `id` &lt;字符串> 土壤中的id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `显示状态` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 土壤在池中显示的方块状态。

更改显示在土壤中的方块。

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## 变化中的土壤类别

更改与土壤相关联的类别。 它们被用来将作物与有效土壤相匹配。

### 将类别添加到土壤中

`Soil.addCategory(id, categoriesToAdd)；`

- `id` &lt;字符串> 土壤中的id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `categoriesToAdd` &lt;string]> 一个与土壤关联的数组类别。

```zenscript
Soil.addCategory(“botanypots:soil/soul_sand”、“["下水道"]”)；
```

### 从土壤中删除类别

`Soil.removeCategory(id, categoriesTOremove)；`

- `id` &lt;字符串> 土壤中的id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `categoriesToday` &lt;string[]> 一个要与土壤脱离关联的数组类别。

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand"");
```

### 清除土壤中的所有类别

`清空类别(id)；`

- `id` &lt;字符串> 土壤中的id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。

```zenscript
土壤.clearories("botanypots:soil/farmland");
```

## 正在获取所有ID

`() Soil.getAllIds();`

- 返回： &lt;字符串[]> 当时所有已知土壤ID的数组。

这将给您一个当时所有已知土壤ID的数组。

```zenscript
// 在Soil.getAllIds() 中将所有id记录到craftbiner.log 文件
中的soilId
    println(soilId)；
}
```

## 移除所有泥土。

这将完全清除目前登记的所有土壤。 如果你想要通过脚本从头重新创建所有数据，这是有用的。

```zenscript
土壤.移除所有();
```
