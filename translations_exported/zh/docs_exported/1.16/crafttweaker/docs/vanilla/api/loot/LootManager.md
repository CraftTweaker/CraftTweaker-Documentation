# LootManager

The main entry point for everything loot related.

 This entry point can be obtained via the <code>loot</code> global in scripts and allows you to manipulate everything related to loot or query loot tables.

 Other mods may also expand the current possibilities, so check their documentation to see what additional entry points are available.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootManager;
```


## 参数

| 名称        | 类型                                                                     | 可获得  | 可设置   | 描述                                                                                                                                                                |
| --------- | ---------------------------------------------------------------------- | ---- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modifiers | [LootModifierManager](/vanilla/api/loot/modifiers/LootModifierManager) | true | false | Gets the loot modifiers manager. <br />  <br />  Refer to [LootModifierManager](/vanilla/api/loot/modifiers/LootModifierManager) for additional info. |

