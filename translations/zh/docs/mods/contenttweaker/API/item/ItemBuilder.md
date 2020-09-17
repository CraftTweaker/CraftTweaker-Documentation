# 项目生成器

项目生成器是为了... 构建项目 (意外!) <p> 它允许你设置各种属性来改变物品的行为方式和它可以做什么。 您也可以使用 [mods.contenttweaker.items。ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) 以切换到更专业的生成器，如果存在的话。 <p> 要告诉Cot，你想要这个项目出现在新手中，你需要调用 [mods.contenttweaker.item。项目生成器#build(正在生成)](/mods/contenttweaker/API/item/ItemBuilder/#build) 并指定一个有效的资源位置路径。

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.item.项目生成器
```

## 已实现的接口
ItemBuilder 实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructor #构造函数
创建一个新的项目生成器。 请记住，这将 _不是_ 在游戏中创建一个新块，您需要调用 [mods.contenttweaker.items。项目生成器#build(正在生成)](/mods/contenttweaker/API/item/ItemBuilder/#build)。
```zenscript
新建mods.contenttweeper.items。项目制造商();
```

## 方法
### 构建中

指示CoT实际建造任何这个建筑师的建筑物。

```zenscript
新 ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| 参数   | 返回值类型       | 描述        |
| ---- | ----------- | --------- |
| 资源位置 | 字符串[string] | 给此方块的资源路径 |


### withItemGroup

允许您设置此项目将出现在的项目组。 默认情况下，项目将在 `misc` 中降落。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.items。项目生成器](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
新 ItemBuilder().withItemGroup(itemGroup as mods.contenttweeper.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| 参数  | 返回值类型                                                                             | 描述         |
| --- | --------------------------------------------------------------------------------- | ---------- |
| 项目组 | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | 项目应该显示在哪个组 |


### 最大伤害

允许您设置此项目的最大伤害。<br/> 请注意，此选项不能与 [mods.contenttweaker.items结合使用。项目生成器#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)！

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.items。项目生成器](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxDamage(maxdamage as int);
new ItemBuilder().withMaxDamage(250)；
```

| 参数        | 返回值类型 | 描述     |
| --------- | ----- | ------ |
| maxDamage | 整型    | 最大堆栈大小 |


### 与 MaxStackSize

允许您为此项目设置最大堆栈大小。<br/> 请注意，此选项不能与 [mods.contenttweaker.items结合使用。物品生成器#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)！

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.items。项目生成器](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxStackSize(maxStackSize 等于原样)；
new ItemBuilder().withMaxStackSize(16)；
```

| 参数           | 返回值类型 | 描述     |
| ------------ | ----- | ------ |
| maxStackSize | 整型    | 最大堆栈大小 |


### 不修复

设置此项目可能无法在铁轨 返回时修复： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.items。项目生成器](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
新 ItemBuilder().withNoRepair();
```

### 与稀有度

允许您设置项目的稀有度

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.items。项目生成器](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
新 ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| 参数  | 返回值类型  | 描述  |
| --- | ------ | --- |
| 稀有度 | String | 稀有度 |


### 包含类型

设置此项目的特定类型。 在这个方法被调用后，生成器的上下文将切换到更多提供的类型生成器。 这意味着这个建造者的方法将不再存在。 所以您想要设置的任何属性都应该在您调用此方法之前被设置。 返回： `是给定物品的生成器。`

返回类型：T

```zenscript
新 ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweeper.item.tool.ItemBuilderTool>();
```

| 参数名称 | 边框                                                                                        |
| ---- | ----------------------------------------------------------------------------------------- |
| T    | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


