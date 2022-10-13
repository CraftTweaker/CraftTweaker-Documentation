# Crucible

This class was added by a mod with mod-id `eidolon_tweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.eidolon.Crucible;
```


## Static Methods

:::group{name=create}

Return Type: [Crucible](/mods/eidolontweaker/Crucible)

```zenscript
Crucible.create(name as string, result as IItemStack) as Crucible
```

| 参数       | 类型                                          | 描述                      |
| -------- | ------------------------------------------- | ----------------------- |
| name（名称） | string                                      | No Description Provided |
| result   | [IItemstack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
Crucible.remove(resourceName as string) as void
```

| 参数           | 类型     | 描述                      |
| ------------ | ------ | ----------------------- |
| resourceName | string | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Crucible.removeAll() as void

Crucible.removeAll();
```

:::

## Constructor #构造函数

No Description Provided
```zenscript
new Crucible(name as string, result as IItemStack) as Crucible
```
| 参数       | 类型                                          | 描述                      |
| -------- | ------------------------------------------- | ----------------------- |
| name（名称） | string                                      | No Description Provided |
| result   | [IItemstack](/vanilla/api/items/IItemStack) | No Description Provided |



## 使用方式

:::group{name=addStep}

Return Type: [Crucible](/mods/eidolontweaker/Crucible)

```zenscript
Crucible.addStep(stirs as int) as Crucible
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| stirs | int | No Description Provided |


:::

:::group{name=addStep}

Return Type: [Crucible](/mods/eidolontweaker/Crucible)

```zenscript
Crucible.addStep(input as IItemStack[], function as CrucibleRecipeFunction) as Crucible
```

| 参数        | 类型                                                                        | 描述                      |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| input（输入） | [IItemStack](/vanilla/api/items/IItemStack)[]                             | No Description Provided |
| function  | [CrucibleRecipeFunction](/mods/eidolontweaker/api/CrucibleRecipeFunction) | No Description Provided |


:::

:::group{name=addStirringStep}

Return Type: [Crucible](/mods/eidolontweaker/Crucible)

```zenscript
Crucible.addStirringStep(stirs as int, input as IItemStack[], function as CrucibleRecipeFunction) as Crucible
```

| 参数        | 类型                                                                        | 描述                      |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| stirs     | int                                                                       | No Description Provided |
| input（输入） | [IItemStack](/vanilla/api/items/IItemStack)[]                             | No Description Provided |
| function  | [CrucibleRecipeFunction](/mods/eidolontweaker/api/CrucibleRecipeFunction) | No Description Provided |


:::

:::group{name=register}

Return Type: void

```zenscript
// Crucible.register() as void

myCrucible.register();
```

:::


