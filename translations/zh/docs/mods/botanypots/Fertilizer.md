# 肥料

类路径： `mods.botanypots.Fertilizer`

## 使用

若要使用，导入 `导入mods.botanypots.Fertilizer的类；` 在你的脚本开头。

## 创建化肥器

`Fertilizer.create(id, component, minTick, maxTick);`

- `id` &lt;string> The id of the new profer. 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `成分` <[IIngredient](/vanilla/api/items/IIngredient)> 用于肥料的物品。
- `minTick` &lt;int> 由化肥添加的最少的刻录量。
- `maxTick` &lt;int> 化肥添加的最大刻度.

创建一个新化肥。 这些资源可以用来更快地种植作物。

```zenscript
Fertilizer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## 去除化肥器

`Fertilizer.remove(id)；`

- `id` &lt;字符串> 化肥的 id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。

这可以用来去除肥料。

```zenscript
(a) 化肥厂拆卸(“botanypots:肥料/bone_meal”)；
```

## 改变化肥服务单

`Fertilizer.setTicks(String id，int minTick，int maxTick)；`

- `id` &lt;字符串> 化肥的 id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `minTick` &lt;int> 由化肥添加的新的最小刻度。
- `maxTick` &lt;int> 由化肥添加的新最大的刻录量。

这将改变化肥添加的生长勾画范围。

```zenscript
Fertilizer.setTicks(“botanypots:fertiless/bone_meal”，800,900)；
```

## 肥料成分变化

`a. Fertilizer.setIngredient（id，成分）；`

- `id` &lt;字符串> 化肥的 id。 这是一个命名空间ID，必须是有效的 `命名空间：路径` 格式。
- `成分` <[IIngredient](/vanilla/api/items/IIngredient)> 用于化肥的新物品。

设置化肥的成份物品。

```zenscript
Fertilizer.setIngredient(“botanypots:fertilers/bone_meal”， <item:minecraft:sugar>)；
```

## 正在获取所有ID

`Fertilizer.getAllids();`

- 返回： &lt;字符串[]> 这是当时所有已知肥料id的数组。

这将给您一系列已知的肥料id。

```zenscript
// 将所有id记录到 craftbiner.log 文件
以获取化肥Id in Fertilizer.getAllIds() 然后
    println(fertilizerId);

```

## 移除所有化肥器

这将完全清除目前登记的所有化肥。 如果你想要通过脚本从头重新创建所有数据，这是有用的。

```zenscript
Fertilizer.removeAll();
```