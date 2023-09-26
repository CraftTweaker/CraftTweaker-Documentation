# LunarStartEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enhancedcelestials.events.LunarStartEvent;
```


## Extending Event

LunarStartEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in LunarStartEvent

## Methods

:::group{name=getCurrentDay}

Return Type: long

```zenscript
// LunarStartEvent.getCurrentDay() as long

myLunarStartEvent.getCurrentDay();
```

:::

:::group{name=getCurrentServer}

Return Type: [Server](/vanilla/api/game/Server)

```zenscript
// LunarStartEvent.getCurrentServer() as Server

myLunarStartEvent.getCurrentServer();
```

:::

:::group{name=getLunarEventInstance}

Return Type: [LunarEventInstance](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/LunarEventInstance)

```zenscript
// LunarStartEvent.getLunarEventInstance() as LunarEventInstance

myLunarStartEvent.getLunarEventInstance();
```

:::

:::group{name=getLunarName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// LunarStartEvent.getLunarName() as ResourceLocation

myLunarStartEvent.getLunarName();
```

:::

:::group{name=getRandomSource}

Return Type: [RandomSource](/vanilla/api/util/math/RandomSource)

```zenscript
// LunarStartEvent.getRandomSource() as RandomSource

myLunarStartEvent.getRandomSource();
```

:::


