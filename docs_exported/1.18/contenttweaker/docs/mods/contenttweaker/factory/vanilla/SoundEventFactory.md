# SoundEventFactory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.factory.vanilla.SoundEventFactory;
```


## Implemented Interfaces
SoundEventFactory implements the following interfaces. That means all methods defined in these interfaces are also available in SoundEventFactory

- [Factory](/mods/contenttweaker/rt/Factory)&lt;[SoundEvent](/vanilla/api/sound/SoundEvent)&gt;

## Methods

:::group{name=event}

Return Type: [SoundEventBuilder](/mods/contenttweaker/builder/vanilla/sound/SoundEventBuilder)

```zenscript
SoundEventFactory.event(id as string) as SoundEventBuilder
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::


