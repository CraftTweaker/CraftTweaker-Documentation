# ItemCooldowns

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemCooldowns;
```


## Metodi

:::group{name=addCooldown}

```zenscript
ItemCooldowns.addCooldown(item as ItemDefinition, ticks as int)
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| ticks     | int                                                |


:::

:::group{name=getCooldownPercent}

Return Type: float

```zenscript
ItemCooldowns.getCooldownPercent(item as ItemDefinition, partialTicks as float) as float
```

| Parametro    | Tipo                                               |
| ------------ | -------------------------------------------------- |
| item         | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| partialTicks | float                                              |


:::

:::group{name=isOnCooldown}

Return Type: boolean

```zenscript
ItemCooldowns.isOnCooldown(item as ItemDefinition) as boolean
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=removeCooldown}

```zenscript
ItemCooldowns.removeCooldown(item as ItemDefinition)
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::


