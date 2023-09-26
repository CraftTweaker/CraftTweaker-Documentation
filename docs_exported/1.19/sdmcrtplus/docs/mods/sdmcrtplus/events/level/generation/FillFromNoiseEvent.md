# FillFromNoiseEvent

The event can be canceled

 The event is called when the terrain is created. You can change the generation conditions with it.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.level.generation.FillFromNoiseEvent;
```


## Extending Event

FillFromNoiseEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in FillFromNoiseEvent

## Methods

:::group{name=getNumX}

The upper threshold of the world.

Return Type: int

```zenscript
// FillFromNoiseEvent.getNumX() as int

myFillFromNoiseEvent.getNumX();
```

:::

:::group{name=getNumY}

The height of the lower border of the world

Return Type: int

```zenscript
// FillFromNoiseEvent.getNumY() as int

myFillFromNoiseEvent.getNumY();
```

:::

:::group{name=getNumZ}

Span height from the lower border

Return Type: int

```zenscript
// FillFromNoiseEvent.getNumZ() as int

myFillFromNoiseEvent.getNumZ();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)?

```zenscript
// FillFromNoiseEvent.getPlayer() as Player?

myFillFromNoiseEvent.getPlayer();
```

:::

:::group{name=setNumX}

```zenscript
FillFromNoiseEvent.setNumX(num as int)
```

| Parameter | Type |
|-----------|------|
| num       | int  |


:::

:::group{name=setNumY}

```zenscript
FillFromNoiseEvent.setNumY(num as int)
```

| Parameter | Type |
|-----------|------|
| num       | int  |


:::

:::group{name=setNumZ}

```zenscript
FillFromNoiseEvent.setNumZ(num as int)
```

| Parameter | Type |
|-----------|------|
| num       | int  |


:::


