# 项目条件

正常项目有时不会剪切它：

有时我们想要能够指定只有当输入项满足某些条件时才能起作用的配方。

有时我们想要能够指定能够产生特殊物品的配方，不管它有NBT-Tag或损坏值或其他值。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.item.IItemCondition；`

## 输入条件

这些将会影响到你可以用来制作生成的物品的项目。 记住，您可以混合修饰者以混合伤害和 NBT-Tag。

```zenscript
<minecraft:iron_pickaxe>只有Damaged().withTag({display: {Lore: "Arennot we all butterflies?"}});
```

### 伤害

#### 任何伤害

输入项的伤害值与配方无关。

```zenscript
tem.anyDamage()
```

#### 仅已损坏

输入项需要损坏

```zenscript
item.onlyDamaged();
```

#### 至少已损坏

输入项的伤害值必须至少是指定的 `值`  
`值` 是一个整数

```zenscript
只限损害Atleast(值)；
```

#### 最多伤害

输入项的伤害值必须为指定的最大值 ``  
`值` 为整数

```zenscript
仅限损害AtMost(值)；
```

#### 间伤害

输入项的伤害值需要在指定的 `值` 和 `值2`  
`值1` 为整数  
`值2` 为整数

```zenscript
item.only DamageBetween(value1, value2)；
```

### 返回项目或明确禁止某个项目的可重复使用

有时你需要一个配方，让你回来一些输入项目。  
通过应用 `transformDamage(int)` 您可以创建这样的配方。

#### 变压伤害

输入项将获得 `个值` 伤害点。除非在制造过程中中断，否则您将恢复它。  
`值` 为int

```zenscript
item.transformDamage(值)；
```

### NBT标签

有时你想要你的原料需要一个特定的 NBT-Tag。 如果您的项目除了指定的 NBT-Tags 之外还有其他产品，配方不在乎， 也可以附着一个带有特定光线的皮斧！

如果您使用 `使用标签` jei 将会正确显示它，如果您使用 `仅撤回标签`，jei 将只显示一个无标签的项目 ！

这是您如何操作： `NBTTag` 是您的 NBT 数据

```zenscript
item.withTag(NBTData)；
item.onlyWi-Tag(NBTTag)；

<minecraft.iron_pickaxe>.onlyWi-Tag({显示：{名称："选择皮克利伯里"})；
<minecraft.iron_pickaxe>.withTag({显示：{名称："选择皮克利伯里"}})；
```

## 输出修饰符

如果您可以指定输入条件，那么同时定义输出条件或输出修改器就不是那么困难。

### 伤害

您的输出项将有 `个值` 伤害点。  
`值` 是一个整数。

```zenscript
item.withdamage(值)；
```

### NBT标签

您的输出项目将有 `NBTTag` 为 NBT-Tag。  
`NBTTag` 是您的 NBT 数据

```zenscript
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({显示: {name: "选取皮革"}})
```

## 注册自己的项目条件

您也可以添加您自己的项目条件。 These are special functions that accept the [item](/Vanilla/Items/IItemStack/) itself as single parameter.

```zenscript
conditionedites = item.only(item) {return true;});
```

如果项目匹配条件，函数需要返回一个真的布尔值。