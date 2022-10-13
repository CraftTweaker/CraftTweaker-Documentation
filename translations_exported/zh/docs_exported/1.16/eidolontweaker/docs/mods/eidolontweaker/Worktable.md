# Worktable

This class was added by a mod with mod-id `eidolon_tweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.eidolon.Worktable;
```


## Static Methods

:::group{name=register}

Return Type: void

```zenscript
Worktable.register(name as string, core as IItemStack[], extra as IItemStack[], result as IItemStack, matrix as WorktableRecipeFunction) as void
```

| 参数       | 类型                                                                          | 描述                      |
| -------- | --------------------------------------------------------------------------- | ----------------------- |
| name（名称） | string                                                                      | No Description Provided |
| core     | [IItemStack](/vanilla/api/items/IItemStack)[]                               | No Description Provided |
| extra    | [IItemStack](/vanilla/api/items/IItemStack)[]                               | No Description Provided |
| result   | [IItemstack](/vanilla/api/items/IItemStack)                                 | No Description Provided |
| matrix   | [WorktableRecipeFunction](/mods/eidolontweaker/api/WorktableRecipeFunction) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
Worktable.remove(name as string) as void
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Worktable.removeAll() as void

Worktable.removeAll();
```

:::

