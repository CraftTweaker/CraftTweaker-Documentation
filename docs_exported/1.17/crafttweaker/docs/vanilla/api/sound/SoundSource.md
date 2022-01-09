# SoundSource

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sound.SoundSource;
```


## Enum Constants

SoundSource is an enum. It has 10 enum constants. They are accessible using the code below.

```zenscript
SoundSource.MASTER
SoundSource.MUSIC
SoundSource.RECORDS
SoundSource.WEATHER
SoundSource.BLOCKS
SoundSource.HOSTILE
SoundSource.NEUTRAL
SoundSource.PLAYERS
SoundSource.AMBIENT
SoundSource.VOICE
```
## Methods

:::group{name=getName}

Return Type: string

```zenscript
// SoundSource.getName() as string

mySoundSource.getName();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| name | string | true | false | No Description Provided |

