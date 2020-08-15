# ItemBuilderTool

A special builder that allows you to create items that can be used as tools. You should have set the item's max damage before changing to this builder. <p> Has special methods that allow you to set the mining level for several tool types as well as the attack damage.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.item.tool.ItemBuilderTool
```

## Implemented Interfaces
ItemBuilderTool implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Metody
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Parametr         | Typ         | Opis                                 |
| ---------------- | ----------- | ------------------------------------ |
| resourceLocation | Ciąg znaków | The resource path to give this block |


### withAttackDamage

Allows you to set the attack damage bonus that you get when holding this item

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Parametr        | Typ                | Opis                         |
| --------------- | ------------------ | ---------------------------- |
| Obrażenia ataku | zmiennoprzecinkowe | The additional attack damage |


### withAttackSpeed

Allows you to set the attack speed bonus that you get when holding this item.

 Returns: `This builder, used for method chaining.`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed as double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Parametr    | Typ      | Opis             |
| ----------- | -------- | ---------------- |
| attackSpeed | podwójne | The attack speed |


### withDurabilityCostAttack

Allows you to set the amount of damage that this item will receive when hitting enemies. By default this is `0`

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Parametr             | Typ    | Opis                                     |
| -------------------- | ------ | ---------------------------------------- |
| durabilityCostAttack | odcień | The damage points this item will receive |


### withDurabilityCostMining

Allows you to set the amount of damage that this item will receive when mining blocks. By default this is `0`

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Parametr             | Typ    | Opis                                     |
| -------------------- | ------ | ---------------------------------------- |
| durabilityCostMining | odcień | The damage points this item will receive |


### withToolType

Allows you to add a tool type to this tool. You can specify the type, the mining level and optionally the mining speed when this type is hit as well.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Parametr    | Typ                                                                             | Opis                                                 | IsOptional | Wartość domyślna |
| ----------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------- | ---------------- |
| toolType    | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | The type of the tool                                 | fałszywy   | `null`           |
| miningLevel | odcień                                                                          | The mining level for this tool type                  | fałszywy   | `null`           |
| miningSpeed | zmiennoprzecinkowe                                                              | How fast this tool can mine blocks of the given type | prawda     | `1.0`            |



