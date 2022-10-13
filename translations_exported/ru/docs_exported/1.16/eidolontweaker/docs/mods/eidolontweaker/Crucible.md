# Crucible

This class was added by a mod with mod-id `eidolon_tweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

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

| Параметр | Тип                                         | Описание                |
| -------- | ------------------------------------------- | ----------------------- |
| name     | string                                      | No Description Provided |
| result   | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
Crucible.remove(resourceName as string) as void
```

| Параметр     | Тип    | Описание                |
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

## Constructors

No Description Provided
```zenscript
new Crucible(name as string, result as IItemStack) as Crucible
```
| Параметр | Тип                                         | Описание                |
| -------- | ------------------------------------------- | ----------------------- |
| name     | string                                      | No Description Provided |
| result   | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |



## Методы

:::group{name=addStep}

Return Type: [Crucible](/mods/eidolontweaker/Crucible)

```zenscript
Crucible.addStep(stirs as int) as Crucible
```

| Параметр | Тип | Описание                |
| -------- | --- | ----------------------- |
| stirs    | int | No Description Provided |


:::

:::group{name=addStep}

Return Type: [Crucible](/mods/eidolontweaker/Crucible)

```zenscript
Crucible.addStep(input as IItemStack[], function as CrucibleRecipeFunction) as Crucible
```

| Параметр | Тип                                                                       | Описание                |
| -------- | ------------------------------------------------------------------------- | ----------------------- |
| input    | [IItemStack](/vanilla/api/items/IItemStack)[]                             | No Description Provided |
| function | [CrucibleRecipeFunction](/mods/eidolontweaker/api/CrucibleRecipeFunction) | No Description Provided |


:::

:::group{name=addStirringStep}

Return Type: [Crucible](/mods/eidolontweaker/Crucible)

```zenscript
Crucible.addStirringStep(stirs as int, input as IItemStack[], function as CrucibleRecipeFunction) as Crucible
```

| Параметр | Тип                                                                       | Описание                |
| -------- | ------------------------------------------------------------------------- | ----------------------- |
| stirs    | int                                                                       | No Description Provided |
| input    | [IItemStack](/vanilla/api/items/IItemStack)[]                             | No Description Provided |
| function | [CrucibleRecipeFunction](/mods/eidolontweaker/api/CrucibleRecipeFunction) | No Description Provided |


:::

:::group{name=register}

Return Type: void

```zenscript
// Crucible.register() as void

myCrucible.register();
```

:::


