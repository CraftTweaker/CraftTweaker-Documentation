# InitialInventory

## Description

이 모드는 플레이어가 처음 세계에 참여할 때 단 한 번 아이템을 받도록 해 줍니다. 일부 모드에서 플레이어가 세계에 처음 참여할 때 책을 주는 것과 유사합니다.

## Package
`mods.initialinventory.InvHandler`

## 시작 아이템 추가

플레이어가 세계에 합류할 때 인벤토리에 아이템이 추가됩니다.

The parameters are:


매개변수: `key`

자료형: `String`

Description:

추가해야 할 아이템을 정의하는 데 쓰입니다. key에는 모든 문자열이 들어갈 수 있으며, 이는 이전에 같은 아이템들을 받았는지 확인하는 데 쓰입니다.

모드팩에서 추후에 시작 아이템을 추가하는 경우 유용합니다. 다른 키를 사용하여, 이미 처음 시작 아이템을 받은 사람에게도 해당 아이템을 줄 수 있습니다. 예를 들어서,

Add a diamond as a starting item with key "1", join the world, the player will get the diamond.

Add an apple as a starting item with key "2", join the world, the player will get the apple, but not the diamond again.

Make a new world, the player will receive both an apple and a diamond.

param: `item`

Type `IItemStack`

Description:

The item to give to the player when they join.

Param: `index`

Type: `int`

Description:

Optional integer to define where the item will be given, can be used to put an item in a inventory slot like an armor slot.

If left out, will default to -1, which means it will put it in the first available slot, or combine it with other items that may already be in the inventory.


## 예제

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack item, Optional int index);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:apple>);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:golden_apple>, 5);
```


