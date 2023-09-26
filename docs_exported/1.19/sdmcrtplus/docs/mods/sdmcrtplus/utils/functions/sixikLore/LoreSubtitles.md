# LoreSubtitles

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.functions.sixikLore.LoreSubtitles;
```


## Constructors


```zenscript
new LoreSubtitles(duration as double) as LoreSubtitles
```
| Parameter |  Type  |
|-----------|--------|
| duration  | double |



## Methods

:::group{name=add}

Return Type: [LoreSubtitles](/mods/sdmcrtplus/utils/functions/sixikLore/LoreSubtitles)

```zenscript
LoreSubtitles.add(time as double) as LoreSubtitles
```

| Parameter |  Type  |
|-----------|--------|
| time      | double |


:::

:::group{name=add}

Return Type: [LoreSubtitles](/mods/sdmcrtplus/utils/functions/sixikLore/LoreSubtitles)

```zenscript
LoreSubtitles.add(time as double, line as string) as LoreSubtitles
```

| Parameter |  Type  |
|-----------|--------|
| time      | double |
| line      | string |


:::

:::group{name=getDuration}

Return Type: double

```zenscript
// LoreSubtitles.getDuration() as double

myLoreSubtitles.getDuration();
```

:::

:::group{name=getLine}

Return Type: string

```zenscript
LoreSubtitles.getLine(time as double) as string
```

| Parameter |  Type  |
|-----------|--------|
| time      | double |


:::

:::group{name=setQuote}

```zenscript
LoreSubtitles.setQuote(quote as LoreQuote)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| quote     | [LoreQuote](/mods/sdmcrtplus/utils/functions/sixikLore/LoreQuote) |


:::


