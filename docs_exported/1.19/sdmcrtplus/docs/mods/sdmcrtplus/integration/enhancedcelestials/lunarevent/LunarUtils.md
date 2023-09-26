# LunarUtils

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enhancedcelestials.lunarevent.LunarUtils;
```


## Static Methods

:::group{name=getLunarEvents}

Return Type: stdlib.List&lt;[LunarEvent](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/LunarEvent)&gt;

```zenscript
// LunarUtils.getLunarEvents() as stdlib.List<LunarEvent>

LunarUtils.getLunarEvents();
```

:::

:::group{name=startLunarEvent}

Return Type: int

```zenscript
LunarUtils.startLunarEvent(level as Level, resourceLocation as ResourceLocation) as int
```

|    Parameter     |                            Type                            |
|------------------|------------------------------------------------------------|
| level            | [Level](/vanilla/api/world/Level)                          |
| resourceLocation | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

