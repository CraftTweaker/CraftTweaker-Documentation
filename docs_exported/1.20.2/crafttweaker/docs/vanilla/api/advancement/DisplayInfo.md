# DisplayInfo

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.DisplayInfo;
```


## Methods

:::group{name=setLocation}

```zenscript
DisplayInfo.setLocation(x as float, y as float)
```

| Parameter | Type  |
|-----------|-------|
| x         | float |
| y         | float |


:::


## Properties

|        Name        |                            Type                             | Has Getter | Has Setter |
|--------------------|-------------------------------------------------------------|------------|------------|
| background         | [ResourceLocation](/vanilla/api/resource/ResourceLocation)? | true       | false      |
| description        | [Component](/vanilla/api/text/Component)                    | true       | false      |
| frame              | [FrameType](/vanilla/api/advancement/FrameType)             | true       | false      |
| icon               | [ItemStack](/vanilla/api/item/ItemStack)                    | true       | false      |
| isHidden           | boolean                                                     | true       | false      |
| shouldAnnounceChat | boolean                                                     | true       | false      |
| shouldShowToast    | boolean                                                     | true       | false      |
| title              | [Component](/vanilla/api/text/Component)                    | true       | false      |
| x                  | float                                                       | true       | false      |
| y                  | float                                                       | true       | false      |

