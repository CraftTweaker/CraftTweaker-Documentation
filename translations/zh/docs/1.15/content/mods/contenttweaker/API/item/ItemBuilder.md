# ItemBuilder

The item builder is to... build items (surprise!) <p> It allows you to set various properties that will change how the item behaves and what it can do. 您也可以使用 [mods.contenttweeper.itemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) 切换到更专业化的构建器，如果存在任何构建器。 <p> 要告诉Cot, 你想要这个项目出现在新手中, 你需要调用 [mods.contenttweeper.itemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) 并指定一个有效的资源位置路径.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweeper.item.ItemBuilder
```

## 已实现的接口
ItemBuilder implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructor #构造函数
Creates a new ItemBuilder. 请记住，这将 _不是_ 在游戏中创建一个新的块，为此你需要调用 [mods.contenttweeper.itemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build)。
```zenscript
新mods.contenttweeper.itemBuilder();
```

## 使用方式
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| 参数               | 类型          | 描述                                   |
| ---------------- | ----------- | ------------------------------------ |
| resourceLocation | 字符串[string] | The resource path to give this block |


### withItemGroup

Allows you to set the item group that this item will appear in. By default, items will land in `misc`

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| 参数        | 类型                                                                                | 描述                                        |
| --------- | --------------------------------------------------------------------------------- | ----------------------------------------- |
| itemGroup | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | The item group this item should appear in |


### withMaxDamage

允许您设置此物品的最大伤害。<br/> 请注意，此选项不能与 [mod结合使用。 ontentinstruer.itemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)！

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxDamage(maxDamage as int);
new ItemBuilder().withMaxDamage(250);
```

| 参数        | 类型  | 描述                     |
| --------- | --- | ---------------------- |
| maxDamage | int | The maximum stack size |


### withMaxStackSize

允许您设置此项目的最大堆栈大小。<br/> 请注意，此选项不能与 [mod结合使用。 ontentinstruer.item.ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)！

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxStackSize(maxStackSize as int);
new ItemBuilder().withMaxStackSize(16);
```

| 参数           | 类型  | 描述                     |
| ------------ | --- | ---------------------- |
| maxStackSize | int | The maximum stack size |


### withNoRepair

Sets that this item may not be repaired in an anvil Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withNoRepair();
```

### withRarity

Allows you to set the item's rarity

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| 参数     | 类型          | 描述         |
| ------ | ----------- | ---------- |
| rarity | 字符串[string] | The rarity |


### withType

Sets the specific type of this item. After this method is called the builder's context will switch to the more provided type builder. That means that the methods of this builder will no longer be available, so any properties you wish to set should be set before you call this method. Returns: `A builder with the given item.`

Return type: T

```zenscript
新 ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool> (); ;
```

| ParameterName | Bounds                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------- |
| T             | [mods.contenttweeper.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


