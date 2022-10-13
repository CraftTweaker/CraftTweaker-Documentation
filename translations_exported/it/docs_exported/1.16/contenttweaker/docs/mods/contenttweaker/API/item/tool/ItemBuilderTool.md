# ItemBuilderBasic implements the following interfaces.

A special builder that allows you to create items that can be used as tools. You should have set the item's max damage before changing to this builder.

 Has special methods that allow you to set the mining level for several tool types as well as the attack damage.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.tool.ItemBuilderTool;
```


## Extending ItemTypeBuilder

ItemBuilderTool extends [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder). That means all methods available in [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) are also available in ItemBuilderTool

## Metodi

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// ItemBuilderTool.build(resourceLocation as string) as void

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Parametro        | Tipo   | Descrizione                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::

:::group{name=withAttackDamage}

Allows you to set the attack damage bonus that you get when holding this item

Returns: This builder, used for method chaining  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withAttackDamage(attackDamage as float) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Parametro    | Tipo  | Descrizione                  |
| ------------ | ----- | ---------------------------- |
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

| Parametro   | Tipo   | Descrizione      |
| ----------- | ------ | ---------------- |
| attackSpeed | double | The attack speed |


:::

:::group{name=withDurabilityCostAttack}

Allows you to set the amount of damage that this item will receive when hitting enemies. By default this is `0`

Returns: This builder, used for method chaining  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withDurabilityCostAttack(durabilityCostAttack as int) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Parametro            | Tipo | Descrizione                              |
| -------------------- | ---- | ---------------------------------------- |
| durabilityCostAttack | int  | The damage points this item will receive |


:::

:::group{name=withDurabilityCostMining}

Allows you to set the amount of damage that this item will receive when mining blocks. By default this is `0`

Returns: This builder, used for method chaining  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withDurabilityCostMining(durabilityCostMining as int) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Parametro            | Tipo | Descrizione                              |
| -------------------- | ---- | ---------------------------------------- |
| durabilityCostMining | int  | The damage points this item will receive |


:::

:::group{name=withToolType}

Allows you to add a tool type to this tool. You can specify the type, the mining level and optionally the mining speed when this type is hit as well.

Returns: This builder, used for method chaining  
Return Type: [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
// ItemBuilderTool.withToolType(toolType as ToolType, miningLevel as int, miningSpeed as float) as ItemBuilderTool

new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Parametro   | Tipo                                   | Descrizione                                          | Optional | DefaultValue |
| ----------- | -------------------------------------- | ---------------------------------------------------- | -------- | ------------ |
| toolType    | [ToolType](/vanilla/api/tool/ToolType) | The type of the tool                                 | no       |              |
| miningLevel | int                                    | The mining level for this tool type                  | no       |              |
| miningSpeed | float                                  | How fast this tool can mine blocks of the given type | sì       | 1.0          |


:::


