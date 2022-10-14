# DisplayInfo

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.DisplayInfo;
```


## Metodi

:::group{name=getBackground}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)?

```zenscript
// DisplayInfo.getBackground() as ResourceLocation?

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

```zenscript
DisplayInfo.setLocation(x as float, y as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| x         | float |
| y         | float |


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


## Proprietà

| Nome               | Tipo                                                        | Ha Getter | Ha Setter |
| ------------------ | ----------------------------------------------------------- | --------- | --------- |
| background         | [ResourceLocation](/vanilla/api/resource/ResourceLocation)? | sì        | no        |
| description        | [Component](/vanilla/api/text/Component)                    | sì        | no        |
| frame              | [FrameType](/vanilla/api/advancement/FrameType)             | sì        | no        |
| icon               | [ItemStack](/vanilla/api/item/ItemStack)                    | sì        | no        |
| isHidden           | boolean                                                     | sì        | no        |
| shouldAnnounceChat | boolean                                                     | sì        | no        |
| shouldShowToast    | boolean                                                     | sì        | no        |
| title              | [Component](/vanilla/api/text/Component)                    | sì        | no        |
| x                  | float                                                       | sì        | no        |
| y                  | float                                                       | sì        | no        |

