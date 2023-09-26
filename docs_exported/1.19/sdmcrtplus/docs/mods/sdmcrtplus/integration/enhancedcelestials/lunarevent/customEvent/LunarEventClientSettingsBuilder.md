# LunarEventClientSettingsBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enhancedcelestials.lunarevent.customEvent.LunarEventClientSettingsBuilder;
```


## Constructors


```zenscript
new LunarEventClientSettingsBuilder() as LunarEventClientSettingsBuilder
new LunarEventClientSettingsBuilder();
```

## Methods

:::group{name=build}

Return Type: [LunarEventClientSettingsBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarEventClientSettingsBuilder)

```zenscript
LunarEventClientSettingsBuilder.build(skyLightHexColor as string, moonTextureHexColor as string, moonSize as float, moonTextureLocation as ResourceLocation?) as LunarEventClientSettingsBuilder
```

|      Parameter      |                            Type                             |
|---------------------|-------------------------------------------------------------|
| skyLightHexColor    | string                                                      |
| moonTextureHexColor | string                                                      |
| moonSize            | float                                                       |
| moonTextureLocation | [ResourceLocation](/vanilla/api/resource/ResourceLocation)? |


:::


