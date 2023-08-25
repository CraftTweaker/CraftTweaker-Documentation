# Expansion for Player

## Methods

:::group{name=dropItem}

Throws an item in front of the player

```zenscript
Player.dropItem(stack as IItemStack, isEvent as boolean)
```

| Parameter |                    Type                    |                Description                 |
|-----------|--------------------------------------------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The item that will be thrown away          |
| isEvent   | boolean                                    | Should the event be called ItemTossEvent ? |


:::

:::group{name=dropItemFromSlot}

Throws an item out of the player's inventory.

```zenscript
Player.dropItemFromSlot(index as int, isEvent as boolean)
```

| Parameter |  Type   |                Description                 |
|-----------|---------|--------------------------------------------|
| index     | int     | Slot Index                                 |
| isEvent   | boolean | Should the event be called ItemTossEvent ? |


:::

:::group{name=getEnterChest}

Returns the player's ender chest

Return Type: [PlayerEnderChestContainer](/mods/sdmcrtplus/entity/type/player/PlayerEnderChestContainer)

```zenscript
// Player.getEnterChest() as PlayerEnderChestContainer

player.getEnterChest();
```

:::

:::group{name=getXRot}

Return Type: float

```zenscript
// Player.getXRot() as float

player.getXRot();
```

:::

:::group{name=getYBodyRot}

Return Type: float

```zenscript
// Player.getYBodyRot() as float

player.getYBodyRot();
```

:::

:::group{name=getYHeadRot}

Return Type: float

```zenscript
// Player.getYHeadRot() as float

player.getYHeadRot();
```

:::

:::group{name=getYRot}

Return Type: float

```zenscript
// Player.getYRot() as float

player.getYRot();
```

:::

:::group{name=isShiftKeyDown}

Return Type: boolean

```zenscript
// Player.isShiftKeyDown() as boolean

player.isShiftKeyDown();
```

:::

:::group{name=setXRot}

```zenscript
Player.setXRot(rot as float)
```

| Parameter | Type  |
|-----------|-------|
| rot       | float |


:::

:::group{name=setYBodyRot}

```zenscript
Player.setYBodyRot(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::

:::group{name=setYBodyRotO}

```zenscript
Player.setYBodyRotO(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::

:::group{name=setYHeadRot}

```zenscript
Player.setYHeadRot(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::

:::group{name=setYHeadRotO}

```zenscript
Player.setYHeadRotO(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::

:::group{name=setYRot}

```zenscript
Player.setYRot(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::


## Properties

|      Name      |                                            Type                                            | Has Getter | Has Setter |           Description            |
|----------------|--------------------------------------------------------------------------------------------|------------|------------|----------------------------------|
| YBodyRotO      | [Player](/vanilla/api/entity/type/player/Player)                                           | false      | true       |                                  |
| enderChest     | [PlayerEnderChestContainer](/mods/sdmcrtplus/entity/type/player/PlayerEnderChestContainer) | true       | false      | Returns the player's ender chest |
| isShiftKeyDown | boolean                                                                                    | true       | false      |                                  |
| xRot           | float                                                                                      | true       | true       |                                  |
| yBodyRot       | float                                                                                      | true       | true       |                                  |
| yHeadRot       | float                                                                                      | true       | true       |                                  |
| yHeadRotO      | [Player](/vanilla/api/entity/type/player/Player)                                           | false      | true       |                                  |
| yRot           | float                                                                                      | true       | true       |                                  |

