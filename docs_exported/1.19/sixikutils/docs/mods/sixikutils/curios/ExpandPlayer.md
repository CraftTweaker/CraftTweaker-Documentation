# Expansion for Player

## Methods

:::group{name=findItemInSlots}

Return Type: int

```zenscript
Player.findItemInSlots(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getFortuneBonus}

Return Type: int

```zenscript
// Player.getFortuneBonus() as int

player.getFortuneBonus();
```

:::

:::group{name=getItems}

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// Player.getItems() as stdlib.List<IItemStack>

player.getItems();
```

:::

:::group{name=getLootingBonus}

Return Type: int

```zenscript
// Player.getLootingBonus() as int

player.getLootingBonus();
```

:::

:::group{name=getSlots}

Return Type: int

```zenscript
// Player.getSlots() as int

player.getSlots();
```

:::

:::group{name=getStackInSlot}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
Player.getStackInSlot(slot as int) as IItemStack
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::

:::group{name=getVisibleSlots}

Return Type: int

```zenscript
// Player.getVisibleSlots() as int

player.getVisibleSlots();
```

:::

:::group{name=setStackInSlot}

```zenscript
Player.setStackInSlot(IItem as IItemStack, slot as int)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| IItem     | [IItemStack](/vanilla/api/item/IItemStack) |
| slot      | int                                        |


:::


