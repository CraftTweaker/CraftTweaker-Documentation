# ItemCooldowns

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemCooldowns;
```


## Методы

:::group{name=addCooldown}

```zenscript
ItemCooldowns.addCooldown(item as ItemDefinition, ticks as int)
```

| Параметр | Тип                                                |
| -------- | -------------------------------------------------- |
| item     | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| ticks    | int                                                |


:::

:::group{name=getCooldownPercent}

Return Type: float

```zenscript
ItemCooldowns.getCooldownPercent(item as ItemDefinition, partialTicks as float) as float
```

| Параметр     | Тип                                                |
| ------------ | -------------------------------------------------- |
| item         | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| partialTicks | float                                              |


:::

:::group{name=isOnCooldown}

Return Type: boolean

```zenscript
ItemCooldowns.isOnCooldown(item as ItemDefinition) as boolean
```

| Параметр | Тип                                                |
| -------- | -------------------------------------------------- |
| item     | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=removeCooldown}

```zenscript
ItemCooldowns.removeCooldown(item as ItemDefinition)
```

| Параметр | Тип                                                |
| -------- | -------------------------------------------------- |
| item     | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::


