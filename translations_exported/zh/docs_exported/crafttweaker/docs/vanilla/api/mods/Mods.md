# Mods

保存所有注册模组的信息。 可以使用 `加载模组` 全局关键字 访问

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.Mods;
```


## 方法

### getMod

Gets a specific mod

Return Type: [ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
Mods.getMod(modid as string) as ModInfo
loadedMods.getMod("minecraft");
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| modid | string | No Description Provided |


### isModLoaded

Checks if a mod is laoded

Return Type: boolean

```zenscript
Mods.isModLoaded(modid as string) as boolean
loadedMods.isModLoaded("minecraft");
```

| 参数    | 类型     | 描述    |
| ----- | ------ | ----- |
| modid | string | 摩托车检查 |



## 参数

| 名称   | 类型                                                                  | 可获得  | 可设置   |
| ---- | ------------------------------------------------------------------- | ---- | ----- |
| 模组   | stdlib.List&lt;[ModInfo](/vanilla/api/mods/ModInfo)&gt; | true | false |
| size | int                                                                 | true | false |

