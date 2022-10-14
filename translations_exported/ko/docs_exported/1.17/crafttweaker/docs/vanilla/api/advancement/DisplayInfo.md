# DisplayInfo

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.DisplayInfo;
```


## Methods

:::group{name=getBackground}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// DisplayInfo.getBackground() as ResourceLocation

myDisplayInfo.getBackground();
```

:::

:::group{name=getDescription}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// DisplayInfo.getDescription() as Component

myDisplayInfo.getDescription();
```

:::

:::group{name=getFrame}

Return Type: [FrameType](/vanilla/api/advancement/FrameType)

```zenscript
// DisplayInfo.getFrame() as FrameType

myDisplayInfo.getFrame();
```

:::

:::group{name=getIcon}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// DisplayInfo.getIcon() as ItemStack

myDisplayInfo.getIcon();
```

:::

:::group{name=getTitle}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// DisplayInfo.getTitle() as Component

myDisplayInfo.getTitle();
```

:::

:::group{name=getX}

Return Type: float

```zenscript
// DisplayInfo.getX() as float

myDisplayInfo.getX();
```

:::

:::group{name=getY}

Return Type: float

```zenscript
// DisplayInfo.getY() as float

myDisplayInfo.getY();
```

:::

:::group{name=isHidden}

Return Type: boolean

```zenscript
// DisplayInfo.isHidden() as boolean

myDisplayInfo.isHidden();
```

:::

:::group{name=setLocation}

Return Type: void

```zenscript
DisplayInfo.setLocation(x as float, y as float) as void
```

| Parameter | Type  | Description             |
| --------- | ----- | ----------------------- |
| x         | float | No Description Provided |
| y         | float | No Description Provided |


:::

:::group{name=shouldAnnounceChat}

Return Type: boolean

```zenscript
// DisplayInfo.shouldAnnounceChat() as boolean

myDisplayInfo.shouldAnnounceChat();
```

:::

:::group{name=shouldShowToast}

Return Type: boolean

```zenscript
// DisplayInfo.shouldShowToast() as boolean

myDisplayInfo.shouldShowToast();
```

:::


## Properties

| 이름                 | Type                                                       | Has Getter | Has Setter | Description             |
| ------------------ | ---------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| background         | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      | No Description Provided |
| description        | [Component](/vanilla/api/text/Component)                   | true       | false      | No Description Provided |
| frame              | [FrameType](/vanilla/api/advancement/FrameType)            | true       | false      | No Description Provided |
| icon               | [ItemStack](/vanilla/api/item/ItemStack)                   | true       | false      | No Description Provided |
| isHidden           | boolean                                                    | true       | false      | No Description Provided |
| shouldAnnounceChat | boolean                                                    | true       | false      | No Description Provided |
| shouldShowToast    | boolean                                                    | true       | false      | No Description Provided |
| title              | [Component](/vanilla/api/text/Component)                   | true       | false      | No Description Provided |
| x                  | float                                                      | true       | false      | No Description Provided |
| y                  | float                                                      | true       | false      | No Description Provided |

