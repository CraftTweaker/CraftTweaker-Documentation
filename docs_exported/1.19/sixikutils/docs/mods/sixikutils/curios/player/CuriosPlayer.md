# CuriosPlayer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.player.CuriosPlayer;
```


## Methods

:::group{name=findItemInSlots}

Return Type: int

```zenscript
CuriosPlayer.findItemInSlots(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getFortuneBonus}

Return Type: int

```zenscript
// CuriosPlayer.getFortuneBonus() as int

myCuriosPlayer.getFortuneBonus();
```

:::

:::group{name=getItems}

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// CuriosPlayer.getItems() as stdlib.List<IItemStack>

myCuriosPlayer.getItems();
```

:::

:::group{name=getLootingBonus}

Return Type: int

```zenscript
// CuriosPlayer.getLootingBonus() as int

myCuriosPlayer.getLootingBonus();
```

:::

:::group{name=getSlots}

Return Type: int

```zenscript
// CuriosPlayer.getSlots() as int

myCuriosPlayer.getSlots();
```

:::

:::group{name=getStackInSlot}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
CuriosPlayer.getStackInSlot(slot as int) as IItemStack
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::

:::group{name=getVisibleSlots}

Return Type: int

```zenscript
// CuriosPlayer.getVisibleSlots() as int

myCuriosPlayer.getVisibleSlots();
```

:::

:::group{name=setStackInSlot}

```zenscript
CuriosPlayer.setStackInSlot(IItem as IItemStack, slot as int)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| IItem     | [IItemStack](/vanilla/api/item/IItemStack) |
| slot      | int                                        |


:::


