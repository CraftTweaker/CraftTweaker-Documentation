# PernilNoiseEvent

The event can be canceled

 Event is called every time the perlin noise is called . In 90% of cases, these are terrain generation.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.level.generation.PernilNoiseEvent;
```


## Extending Event

PernilNoiseEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in PernilNoiseEvent

## Methods

:::group{name=getNumX}

Return Type: double

```zenscript
// PernilNoiseEvent.getNumX() as double

myPernilNoiseEvent.getNumX();
```

:::

:::group{name=getNumZ}

Return Type: double

```zenscript
// PernilNoiseEvent.getNumZ() as double

myPernilNoiseEvent.getNumZ();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)?

```zenscript
// PernilNoiseEvent.getPlayer() as Player?

myPernilNoiseEvent.getPlayer();
```

:::

:::group{name=getTotalNum}

Return Type: double

```zenscript
// PernilNoiseEvent.getTotalNum() as double

myPernilNoiseEvent.getTotalNum();
```

:::

:::group{name=setNumX}

```zenscript
PernilNoiseEvent.setNumX(num as double)
```

| Parameter |  Type  |
|-----------|--------|
| num       | double |


:::

:::group{name=setNumZ}

```zenscript
PernilNoiseEvent.setNumZ(num as double)
```

| Parameter |  Type  |
|-----------|--------|
| num       | double |


:::

:::group{name=setTotalNum}

```zenscript
PernilNoiseEvent.setTotalNum(num as double)
```

| Parameter |  Type  |
|-----------|--------|
| num       | double |


:::


