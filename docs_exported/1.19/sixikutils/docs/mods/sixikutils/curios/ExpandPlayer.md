# Expansion for Player

## Methods

:::group{name=findCuriosItemInSlots}

Allows you to get the id of the Curios slot with the desired item

Return Type: int

```zenscript
Player.findCuriosItemInSlots(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getCuriosFortuneBonus}

Return Type: int

```zenscript
// Player.getCuriosFortuneBonus() as int

player.getCuriosFortuneBonus();
```

:::

:::group{name=getCuriosItems}

Allows you to get a list of all dressed items in Curios slots

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// Player.getCuriosItems() as stdlib.List<IItemStack>

player.getCuriosItems();
```

:::

:::group{name=getCuriosLootingBonus}

Return Type: int

```zenscript
// Player.getCuriosLootingBonus() as int

player.getCuriosLootingBonus();
```

:::

:::group{name=getCuriosSlots}

Allows you to get the number of Curios slots

Return Type: int

```zenscript
// Player.getCuriosSlots() as int

player.getCuriosSlots();
```

:::

:::group{name=getCuriosStackInSlot}

Allows you to get an item in one of the Curios slots

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
Player.getCuriosStackInSlot(slot as int) as IItemStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| slot      | int  | slot index  |


:::

:::group{name=getCuriosVisibleSlots}

Allows you to get the number of non-hidden Curios slots

Return Type: int

```zenscript
// Player.getCuriosVisibleSlots() as int

player.getCuriosVisibleSlots();
```

:::

:::group{name=setCuriosStackInSlot}

Allows you to forcibly install any item in any of the Curios slots

```zenscript
Player.setCuriosStackInSlot(IItem as IItemStack, slot as int)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| IItem     | [IItemStack](/vanilla/api/item/IItemStack) |
| slot      | int                                        |


:::


