# Expansion for Player

## Methods

:::group{name=findCurioItemInSlots}

Return Type: int

```zenscript
Player.findCurioItemInSlots(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getCurioFortuneBonus}

Return Type: int

```zenscript
// Player.getCurioFortuneBonus() as int

player.getCurioFortuneBonus();
```

:::

:::group{name=getCurioItems}

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// Player.getCurioItems() as stdlib.List<IItemStack>

player.getCurioItems();
```

:::

:::group{name=getCurioLootingBonus}

Return Type: int

```zenscript
// Player.getCurioLootingBonus() as int

player.getCurioLootingBonus();
```

:::

:::group{name=getCurioSlots}

Return Type: int

```zenscript
// Player.getCurioSlots() as int

player.getCurioSlots();
```

:::

:::group{name=getCurioVisibleSlots}

Return Type: int

```zenscript
// Player.getCurioVisibleSlots() as int

player.getCurioVisibleSlots();
```

:::

:::group{name=getStCurioackInSlot}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
Player.getStCurioackInSlot(slot as int) as IItemStack
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::

:::group{name=setCurioStackInSlot}

```zenscript
Player.setCurioStackInSlot(IItem as IItemStack, slot as int)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| IItem     | [IItemStack](/vanilla/api/item/IItemStack) |
| slot      | int                                        |


:::


## Properties

|       Name        |                             Type                              | Has Getter | Has Setter |
|-------------------|---------------------------------------------------------------|------------|------------|
| curioFortuneBonus | int                                                           | true       | false      |
| curioItems        | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true       | false      |
| curioLootingBonus | int                                                           | true       | false      |
| curioSlots        | int                                                           | true       | false      |
| curioVisibleSlots | int                                                           | true       | false      |

