# Mods

保存所有注册模组的信息。 可以使用 `加载模组` 全局关键字 访问

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mod.Mods;
```


## 使用方式

:::group{name=getMod}

Gets a specific mod

Returns: a specific Mod  
Return Type: [Mod](/vanilla/api/mod/Mod)

```zenscript
// Mods.getMod(modid as string) as Mod

loadedMods.getMod("minecraft");
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| modid | string | No Description Provided |


:::

:::group{name=getMods}

Gets a list of all mods in the game

Returns: list of Mod  
Return Type: stdlib.List&lt;[Mod](/vanilla/api/mod/Mod)&gt;

```zenscript
// Mods.getMods() as stdlib.List<Mod>

loadedMods.getMods();
```

:::

:::group{name=getSize}

Gets the amount of mods loaded

Returns: The amount of mods that are loaded  
Return Type: int

```zenscript
// Mods.getSize() as int

loadedMods.getSize();
```

:::

:::group{name=isModLoaded}

Checks if a mod is laoded

Returns: true if the mod is loaded  
Return Type: boolean

```zenscript
// Mods.isModLoaded(modid as string) as boolean

loadedMods.isModLoaded("minecraft");
```

| 参数    | 类型     | 描述    |
| ----- | ------ | ----- |
| modid | string | 摩托车检查 |


:::


## 运算符

:::group{name=MEMBERGETTER}

Gets a specific mod

```zenscript
myMods.modid as string
loadedMods."minecraft"
```

:::


## 参数

| 名称       | 类型                                                         | 可获得  | 可设置   | 描述                                  |
| -------- | ---------------------------------------------------------- | ---- | ----- | ----------------------------------- |
| 模组       | stdlib.List&lt;[Mod](/vanilla/api/mod/Mod)&gt; | true | false | Gets a list of all mods in the game |
| size #大小 | int                                                        | true | false | Gets the amount of mods loaded      |

