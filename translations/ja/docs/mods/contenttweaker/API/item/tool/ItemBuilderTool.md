# ItemBuilderTool

A special builder that allows you to create items that can be used as tools. You should have set the item's max damage before changing to this builder. <p> Has special methods that allow you to set the mining level for several tool types as well as the attack damage.

This class was added by a mod with mod-id `contenttweaker`. 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.tool.ItemBuilderTool
```

## Implemented Interfaces
ItemBuilderTool implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## メソッド
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| パラメータ            | タイプ  | 説明                                   |
| ---------------- | ---- | ------------------------------------ |
| resourceLocation | 文字列型 | The resource path to give this block |


### withAttackDamage

Allows you to set the attack damage bonus that you get when holding this item

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| パラメータ  | タイプ    | 説明                           |
| ------ | ------ | ---------------------------- |
| 攻撃ダメージ | float型 | The additional attack damage |


### withAttackSpeed

Allows you to set the attack speed bonus that you get when holding this item.

 Returns: `This builder, used for method chaining.`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed as double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| パラメータ       | タイプ    | 説明               |
| ----------- | ------ | ---------------- |
| attackSpeed | double | The attack speed |


### withDurabilityCostAttack

Allows you to set the amount of damage that this item will receive when hitting enemies. By default this is `0`

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| パラメータ                | タイプ | 説明                                       |
| -------------------- | --- | ---------------------------------------- |
| durabilityCostAttack | int | The damage points this item will receive |


### withDurabilityCostMining

Allows you to set the amount of damage that this item will receive when mining blocks. By default this is `0`

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| パラメータ                | タイプ | 説明                                       |
| -------------------- | --- | ---------------------------------------- |
| durabilityCostMining | int | The damage points this item will receive |


### withToolType

Allows you to add a tool type to this tool. You can specify the type, the mining level and optionally the mining speed when this type is hit as well.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| パラメータ       | タイプ                                                                             | 説明                                                   | IsOptional | デフォルト値 |
| ----------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------- | ------ |
| toolType    | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | The type of the tool                                 | false      | `null` |
| miningLevel | int                                                                             | The mining level for this tool type                  | false      | `null` |
| miningSpeed | float型                                                                          | How fast this tool can mine blocks of the given type | true       | `1.0`  |



