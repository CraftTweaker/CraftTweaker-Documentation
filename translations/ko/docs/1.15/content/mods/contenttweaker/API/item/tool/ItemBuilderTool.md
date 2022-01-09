# ItemBuilderTool

A special builder that allows you to create items that can be used as tools. You should have set the item's max damage before changing to this builder. <p> Has special methods that allow you to set the mining level for several tool types as well as the attack damage.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.item.tool.ItemBuilderTool
```

## Implemented Interfaces
ItemBuilderTool implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Methods
### build

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | String | 해당 블록의 리소스 경로 |


### withAttackDamage

Allows you to set the attack damage bonus that you get when holding this item

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Parameter    | Type  | Description                  |
| ------------ | ----- | ---------------------------- |
| attackDamage | float | The additional attack damage |


### withAttackSpeed

Allows you to set the attack speed bonus that you get when holding this item.

 Returns: `This builder, used for method chaining.`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed as double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Parameter   | Type   | Description      |
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

| Parameter            | Type | Description                              |
| -------------------- | ---- | ---------------------------------------- |
| durabilityCostAttack | int  | The damage points this item will receive |


### withDurabilityCostMining

Allows you to set the amount of damage that this item will receive when mining blocks. By default this is `0`

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Parameter            | Type | Description                              |
| -------------------- | ---- | ---------------------------------------- |
| durabilityCostMining | int  | The damage points this item will receive |


### withToolType

Allows you to add a tool type to this tool. You can specify the type, the mining level and optionally the mining speed when this type is hit as well.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Parameter   | Type                                                                            | Description                                          | IsOptional | Default Value |
| ----------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------- | ------------- |
| toolType    | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | The type of the tool                                 | false      | `null`        |
| miningLevel | int                                                                             | The mining level for this tool type                  | false      | `null`        |
| miningSpeed | float                                                                           | How fast this tool can mine blocks of the given type | true       | `1.0`         |



