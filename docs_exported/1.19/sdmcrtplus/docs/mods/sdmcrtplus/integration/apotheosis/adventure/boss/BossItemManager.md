# BossItemManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.boss.BossItemManager;
```


## Methods

:::group{name=getRandomItem}

Return Type: [BossItem](/mods/sdmcrtplus/integration/apotheosis/adventure/boss/BossItem)

```zenscript
BossItemManager.getRandomItem(rand as RandomSource) as BossItem
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| rand      | [RandomSource](/vanilla/api/util/math/RandomSource) |


:::

:::group{name=getRandomItem}

Return Type: [BossItem](/mods/sdmcrtplus/integration/apotheosis/adventure/boss/BossItem)

```zenscript
BossItemManager.getRandomItem(rand as RandomSource, luck as float) as BossItem
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| rand      | [RandomSource](/vanilla/api/util/math/RandomSource) |
| luck      | float                                               |


:::

:::group{name=getValue}

Return Type: [BossItem](/mods/sdmcrtplus/integration/apotheosis/adventure/boss/BossItem)

```zenscript
BossItemManager.getValue(id as ResourceLocation) as BossItem
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::


