# ItemCooldowns

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemCooldowns;
```


## Methods

:::group{name=addCooldown}

Return Type: void

```zenscript
ItemCooldowns.addCooldown(item as ItemDefinition, ticks as int) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| item | [ItemDefinition](/vanilla/api/item/ItemDefinition) | No Description Provided |
| ticks | int | No Description Provided |


:::

:::group{name=getCooldownPercent}

Return Type: float

```zenscript
ItemCooldowns.getCooldownPercent(item as ItemDefinition, partialTicks as float) as float
```

| Parameter | Type | Description |
|-----------|------|-------------|
| item | [ItemDefinition](/vanilla/api/item/ItemDefinition) | No Description Provided |
| partialTicks | float | No Description Provided |


:::

:::group{name=isOnCooldown}

Return Type: boolean

```zenscript
ItemCooldowns.isOnCooldown(item as ItemDefinition) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| item | [ItemDefinition](/vanilla/api/item/ItemDefinition) | No Description Provided |


:::

:::group{name=removeCooldown}

Return Type: void

```zenscript
ItemCooldowns.removeCooldown(item as ItemDefinition) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| item | [ItemDefinition](/vanilla/api/item/ItemDefinition) | No Description Provided |


:::


