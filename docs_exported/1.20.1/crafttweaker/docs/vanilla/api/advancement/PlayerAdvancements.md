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
PlayerAdvancements.award(advancement as Advancement, criteria as string) as boolean
```

|  Parameter  |                        Type                         |
|-------------|-----------------------------------------------------|
| advancement | [Advancement](/vanilla/api/advancement/Advancement) |
| criteria    | string                                              |


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
PlayerAdvancements.getOrStartProgress(advancement as Advancement) as AdvancementProgress
```

|  Parameter  |                        Type                         |
|-------------|-----------------------------------------------------|
| advancement | [Advancement](/vanilla/api/advancement/Advancement) |


:::

:::group{name=revoke}

Return Type: boolean

```zenscript
PlayerAdvancements.revoke(advancement as Advancement, criteria as string) as boolean
```

|  Parameter  |                        Type                         |
|-------------|-----------------------------------------------------|
| advancement | [Advancement](/vanilla/api/advancement/Advancement) |
| criteria    | string                                              |


:::


