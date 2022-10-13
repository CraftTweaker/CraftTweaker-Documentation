# Worktable

This class was added by a mod with mod-id `eidolon_tweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

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

| Параметр | Тип                                                                         | Описание                |
| -------- | --------------------------------------------------------------------------- | ----------------------- |
| name     | string                                                                      | No Description Provided |
| core     | [IItemStack](/vanilla/api/items/IItemStack)[]                               | No Description Provided |
| extra    | [IItemStack](/vanilla/api/items/IItemStack)[]                               | No Description Provided |
| result   | [IItemStack](/vanilla/api/items/IItemStack)                                 | No Description Provided |
| matrix   | [WorktableRecipeFunction](/mods/eidolontweaker/api/WorktableRecipeFunction) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
Worktable.remove(name as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Worktable.removeAll() as void

Worktable.removeAll();
```

:::

