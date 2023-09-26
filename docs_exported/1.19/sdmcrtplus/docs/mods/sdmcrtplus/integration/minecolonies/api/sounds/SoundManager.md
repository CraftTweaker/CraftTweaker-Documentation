# SoundManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.sounds.SoundManager;
```


## Methods

:::group{name=addToQueue}

```zenscript
SoundManager.addToQueue(soundEvent as SoundEvent, source as SoundSource, repetitions as int, length as int, pos as BlockPos, volume as float, pitch as float)
```

|  Parameter  |                     Type                      |
|-------------|-----------------------------------------------|
| soundEvent  | [SoundEvent](/vanilla/api/sound/SoundEvent)   |
| source      | [SoundSource](/vanilla/api/sound/SoundSource) |
| repetitions | int                                           |
| length      | int                                           |
| pos         | [BlockPos](/vanilla/api/util/math/BlockPos)   |
| volume      | float                                         |
| pitch       | float                                         |


:::

:::group{name=tick}

```zenscript
// SoundManager.tick()

mySoundManager.tick();
```

:::


