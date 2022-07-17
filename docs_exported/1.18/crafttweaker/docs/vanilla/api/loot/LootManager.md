# LootManager

The main entry point for everything loot related.

 This entry point can be obtained via the `loot` global in scripts and allows you to manipulate everything
 related to loot or query loot tables.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootManager;
```


## Enum Constants

LootManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
LootManager.INSTANCE
```
## Properties

|   Name    |                                 Type                                  | Has Getter | Has Setter |                                                                     Description                                                                      |
|-----------|-----------------------------------------------------------------------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| modifiers | [LootModifierManager](/vanilla/api/loot/modifier/LootModifierManager) | true       | false      | Gets the loot modifiers manager. <br />  <br />  Refer to [LootModifierManager](/vanilla/api/loot/modifier/LootModifierManager) for additional info. |
| tables    | [LootTableManager](/vanilla/api/loot/table/LootTableManager)          | true       | false      | Gets the loot table manager. <br />  <br />  Refer to [LootTableManager](/vanilla/api/loot/table/LootTableManager) for additional info.              |

