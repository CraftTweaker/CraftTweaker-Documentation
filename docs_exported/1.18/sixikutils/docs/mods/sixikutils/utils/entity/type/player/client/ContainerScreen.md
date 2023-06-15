# ContainerScreen

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.client.ContainerScreen;
```


## Methods

:::group{name=getGuiLeft}

Return Type: int

```zenscript
// ContainerScreen.getGuiLeft() as int

myContainerScreen.getGuiLeft();
```

:::

:::group{name=getGuiTop}

Return Type: int

```zenscript
// ContainerScreen.getGuiTop() as int

myContainerScreen.getGuiTop();
```

:::

:::group{name=getPlayer}

Return Type: [LocalPlayer](/mods/sixikutils/utils/entity/type/player/client/LocalPlayer)

```zenscript
// ContainerScreen.getPlayer() as LocalPlayer

myContainerScreen.getPlayer();
```

:::

:::group{name=getScreen}

Return Type: [Screen](/mods/sixikutils/utils/entity/type/player/client/Screen)

```zenscript
// ContainerScreen.getScreen() as Screen

myContainerScreen.getScreen();
```

:::

:::group{name=getSlotUnderMouse}

Return Type: [Slot](/mods/sixikutils/utils/entity/type/player/client/Slot)?

```zenscript
// ContainerScreen.getSlotUnderMouse() as Slot?

myContainerScreen.getSlotUnderMouse();
```

:::

:::group{name=getXSize}

Return Type: int

```zenscript
// ContainerScreen.getXSize() as int

myContainerScreen.getXSize();
```

:::

:::group{name=getYSize}

Return Type: int

```zenscript
// ContainerScreen.getYSize() as int

myContainerScreen.getYSize();
```

:::


## Properties

|  Name  |                                    Type                                     | Has Getter | Has Setter |
|--------|-----------------------------------------------------------------------------|------------|------------|
| left   | int                                                                         | true       | false      |
| player | [LocalPlayer](/mods/sixikutils/utils/entity/type/player/client/LocalPlayer) | true       | false      |
| screen | [Screen](/mods/sixikutils/utils/entity/type/player/client/Screen)           | true       | false      |
| slot   | [Slot](/mods/sixikutils/utils/entity/type/player/client/Slot)?              | true       | false      |
| top    | int                                                                         | true       | false      |
| xSize  | int                                                                         | true       | false      |
| ySize  | int                                                                         | true       | false      |

