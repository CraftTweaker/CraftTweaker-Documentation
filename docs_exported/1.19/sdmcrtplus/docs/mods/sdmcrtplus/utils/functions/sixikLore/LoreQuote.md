# LoreQuote

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.functions.sixikLore.LoreQuote;
```


## Constructors


```zenscript
new LoreQuote(name as string) as LoreQuote
```
| Parameter |  Type  |
|-----------|--------|
| name      | string |



## Methods

:::group{name=addSubtitles}

Return Type: [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote)

```zenscript
LoreQuote.addSubtitles(loreSubtitles as LoreSubtitles) as LoreQuote
```

|   Parameter   |                                   Type                                    |
|---------------|---------------------------------------------------------------------------|
| loreSubtitles | [LoreSubtitles](/mods/sdmcrtplus/utils/functions/sixikLore/LoreSubtitles) |


:::

:::group{name=getId}

Return Type: int

```zenscript
// LoreQuote.getId() as int

myLoreQuote.getId();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// LoreQuote.getName() as string

myLoreQuote.getName();
```

:::

:::group{name=getSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// LoreQuote.getSound() as SoundEvent

myLoreQuote.getSound();
```

:::

:::group{name=getSubtitles}

Return Type: [LoreSubtitles](/mods/sdmcrtplus/utils/functions/sixikLore/LoreSubtitles)

```zenscript
// LoreQuote.getSubtitles() as LoreSubtitles

myLoreQuote.getSubtitles();
```

:::

:::group{name=play}

```zenscript
// LoreQuote.play()

myLoreQuote.play();
```

:::

:::group{name=play}

```zenscript
LoreQuote.play(delay as int)
```

| Parameter | Type |
|-----------|------|
| delay     | int  |


:::

:::group{name=play}

```zenscript
LoreQuote.play(player as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=play}

```zenscript
LoreQuote.play(player as ServerPlayer, delay as int)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |
| delay     | int                                                          |


:::


