# ItemBuilderTool

A special builder that allows you to create items that can be used as tools.
 You should have set the item's max damage before changing to this builder.
 
 Has special methods that allow you to set the mining level for several tool types as well as the attack damage.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.tool.ItemBuilderTool;
```


## Extending ItemTypeBuilder

ItemBuilderTool extends [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder). That means all methods available in [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) are also available in ItemBuilderTool

## Methods

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// ItemBuilderTool.build(resourceLocation as string) as void

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| resourceLocation | string | The resource path to give this block |


:::

:::group{name=withAttackDamage}

Allows you to set the attack damage bonus that you get when holding this item

Returns: This builder, used for method chaining  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withAttackDamage(attackDamage as float) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| attackDamage | float | The additional attack damage |


:::

:::group{name=withAttackSpeed}

Allows you to set the attack speed bonus that you get when holding this item.

Returns: This builder, used for method chaining.  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withAttackSpeed(attackSpeed as double) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| attackSpeed | double | The attack speed |


:::

:::group{name=withDurabilityCostAttack}

Allows you to set the amount of damage that this item will receive when hitting enemies.
 By default this is `0`

Returns: This builder, used for method chaining  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withDurabilityCostAttack(durabilityCostAttack as int) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| durabilityCostAttack | int | The damage points this item will receive |


:::

:::group{name=withDurabilityCostMining}

Allows you to set the amount of damage that this item will receive when mining blocks.
 By default this is `0`

Returns: This builder, used for method chaining  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withDurabilityCostMining(durabilityCostMining as int) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| durabilityCostMining | int | The damage points this item will receive |


:::

:::group{name=withToolType}

Allows you to add a tool type to this tool.
 You can specify the type, the mining level and optionally the mining speed when this type is hit as well.

Returns: This builder, used for method chaining  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withToolType(toolType as ToolType, miningLevel as int, miningSpeed as float) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| toolType | [ToolType](/vanilla/api/tool/ToolType) | The type of the tool | false |  |
| miningLevel | int | The mining level for this tool type | false |  |
| miningSpeed | float | How fast this tool can mine blocks of the given type | true | 1.0 |


:::


