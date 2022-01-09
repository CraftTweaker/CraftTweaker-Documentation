# ItemBuilderTool

A special builder that allows you to create items that can be used as tools. You should have set the item's max damage before changing to this builder. <p> Has special methods that allow you to set the mining level for several tool types as well as the attack damage.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
contenttweeper.item.tool.ItemBuilder工具
```

## 已实现的接口
ItemBuilderTool implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweeper.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## 使用方式
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| 参数               | 类型          | 描述                                   |
| ---------------- | ----------- | ------------------------------------ |
| resourceLocation | 字符串[string] | The resource path to give this block |


### withAttackDamage

Allows you to set the attack damage bonus that you get when holding this item

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| 参数           | 类型  | 描述                           |
| ------------ | --- | ---------------------------- |
| attackDamage | 浮点数 | The additional attack damage |


### withAttackSpeed

Allows you to set the attack speed bonus that you get when holding this item.

 Returns: `This builder, used for method chaining.`

返回类型： [mods.contenttweiner.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed as double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| 参数          | 类型  | 描述               |
| ----------- | --- | ---------------- |
| attackSpeed | 双精度 | The attack speed |


### withDurabilityCostAttack

Allows you to set the amount of damage that this item will receive when hitting enemies. By default this is `0`

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| 参数                   | 类型  | 描述                                       |
| -------------------- | --- | ---------------------------------------- |
| durabilityCostAttack | int | The damage points this item will receive |


### withDurabilityCostMining

Allows you to set the amount of damage that this item will receive when mining blocks. By default this is `0`

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| 参数                   | 类型  | 描述                                       |
| -------------------- | --- | ---------------------------------------- |
| durabilityCostMining | int | The damage points this item will receive |


### withToolType

Allows you to add a tool type to this tool. You can specify the type, the mining level and optionally the mining speed when this type is hit as well.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| 参数          | 类型                                                                              | 描述                                                   | 可选的   | 默认值    |
| ----------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- | ----- | ------ |
| toolType    | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | The type of the tool                                 | false | `null` |
| miningLevel | int                                                                             | The mining level for this tool type                  | false | `null` |
| miningSpeed | 浮点数                                                                             | How fast this tool can mine blocks of the given type | true  | `1.0`  |



