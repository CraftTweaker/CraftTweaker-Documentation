# PlayerAdvancements

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.PlayerAdvancements;
```


## Methods

:::group{name=award}

Return Type: boolean

```zenscript
PlayerAdvancements.award(advancement as AdvancementHolder, criteria as string) as boolean
```

|  Parameter  |                              Type                               |
|-------------|-----------------------------------------------------------------|
| advancement | [AdvancementHolder](/vanilla/api/advancement/AdvancementHolder) |
| criteria    | string                                                          |


:::

:::group{name=flushDirty}

```zenscript
PlayerAdvancements.flushDirty(player as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=getOrStartProgress}

Return Type: [AdvancementProgress](/vanilla/api/advancement/AdvancementProgress)

```zenscript
PlayerAdvancements.getOrStartProgress(advancement as AdvancementHolder) as AdvancementProgress
```

|  Parameter  |                              Type                               |
|-------------|-----------------------------------------------------------------|
| advancement | [AdvancementHolder](/vanilla/api/advancement/AdvancementHolder) |


:::

:::group{name=revoke}

Return Type: boolean

```zenscript
PlayerAdvancements.revoke(advancement as AdvancementHolder, criteria as string) as boolean
```

|  Parameter  |                              Type                               |
|-------------|-----------------------------------------------------------------|
| advancement | [AdvancementHolder](/vanilla/api/advancement/AdvancementHolder) |
| criteria    | string                                                          |


:::


