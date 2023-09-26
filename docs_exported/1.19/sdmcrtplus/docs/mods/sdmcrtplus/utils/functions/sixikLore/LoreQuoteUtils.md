# LoreQuoteUtils

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.functions.sixikLore.LoreQuoteUtils;
```


## Static Methods

:::group{name=getAllQuotes}

Return Type: stdlib.List&lt;[LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote)&gt;

```zenscript
// LoreQuoteUtils.getAllQuotes() as stdlib.List<LoreQuote>

LoreQuoteUtils.getAllQuotes();
```

:::

:::group{name=getByID}

Return Type: [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote)

```zenscript
LoreQuoteUtils.getByID(id as int) as LoreQuote
```

| Parameter | Type |
|-----------|------|
| id        | int  |


:::

:::group{name=getByName}

Return Type: [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote)?

```zenscript
LoreQuoteUtils.getByName(name as string) as LoreQuote?
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getDuration}

Return Type: double

```zenscript
LoreQuoteUtils.getDuration(loreSubtitles as LoreSubtitles) as double
```

|   Parameter   |                                   Type                                    |
|---------------|---------------------------------------------------------------------------|
| loreSubtitles | [LoreSubtitles](/mods/sdmcrtplus/utils/functions/sixikLore/LoreSubtitles) |


:::

:::group{name=getID}

Return Type: int

```zenscript
LoreQuoteUtils.getID(loreQuote as LoreQuote) as int
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| loreQuote | [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote) |


:::

:::group{name=getLastQuote}

Return Type: [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote)

```zenscript
// LoreQuoteUtils.getLastQuote() as LoreQuote

LoreQuoteUtils.getLastQuote();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
LoreQuoteUtils.getName(loreQuote as LoreQuote) as string
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| loreQuote | [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote) |


:::

:::group{name=getRandom}

Return Type: [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote)

```zenscript
LoreQuoteUtils.getRandom(list as stdlib.List<LoreQuote>) as LoreQuote
```

| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| list      | stdlib.List&lt;[LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote)&gt; |


:::

:::group{name=getSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
LoreQuoteUtils.getSound(loreQuote as LoreQuote) as SoundEvent
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| loreQuote | [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote) |


:::

:::group{name=getSubtitles}

Return Type: [LoreSubtitles](/mods/sdmcrtplus/utils/functions/sixikLore/LoreSubtitles)

```zenscript
LoreQuoteUtils.getSubtitles(loreQuote as LoreQuote) as LoreSubtitles
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| loreQuote | [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote) |


:::

:::group{name=play}

```zenscript
LoreQuoteUtils.play(loreQuote as LoreQuote, player as ServerPlayer)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| loreQuote | [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote) |
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)      |


:::

:::group{name=play}

```zenscript
LoreQuoteUtils.play(loreQuote as LoreQuote, player as ServerPlayer, delayTicks as int)
```

| Parameter  |                               Type                                |
|------------|-------------------------------------------------------------------|
| loreQuote  | [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote) |
| player     | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)      |
| delayTicks | int                                                               |


:::

:::group{name=playCustom}

```zenscript
LoreQuoteUtils.playCustom(player as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

