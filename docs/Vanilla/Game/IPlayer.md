# IPlayer

The IPlayer interface allows you to view certain information on a specific player and interact with said one.
Mostly used in Event Handlers and Recipe Functions.

##Zengetters

Zengetters are for retrieving information. Usually either assigned to a variable or used in a method/function.

| Zengetter     | What does it do                                                                            | Return Type | Usage                  |
|---------------|--------------------------------------------------------------------------------------------|-------------|------------------------|
| id            | returns the player's id                                                                    | string      | `player.id`            |
| name          | returns the player's name                                                                  | string      | `player.name`          |
| data          | returns the player's data                                                                  | IData       | `player.data`          |
| xp            | returns the player's experience level. Can also be used to set a player's experience level | int         | `player.xp`            |
| hotbarSize    | returns the player's hotbar size                                                           | int         | `player.hotbarSize`    |
| inventorySize | returns the player's inventory size                                                        | int         | `player.inventorySize` |
| currentItem   | returns the item the player is currently holding                                           | IItemStack  | `player.currentItem`   |
| creative      | returns if the player is currently in creative mode (a.k.a gamemode 1)                     | bool        | `player.creative`      |
| adventure     | returns if the player is currently in adventure mode (a.k.a gamemode 2)                    | bool        | `player.adventure`     |


##Zenmethods

Zenmethods are for doing things with other things, in this case with a player.

| ZenMethod             | Parameter Type(s)      | What does it do                                                    | Example                                  |
|-----------------------|------------------------|--------------------------------------------------------------------|------------------------------------------|
| removeXP(XPtoRemove)  | int                    | Removes the given experience levels from the player.               | `player.removeXP(1)`                     |
| update(IData)         | Idata                  | Updates the playerdata to the provided IData.                      |                                          |
| sendChat(Message)     | string OR IChatMessage | Sends the player a Chat Message.                                   | `player.sendChat("Hello my old friend")` |
| getHotbarStack(index) | int                    | Returns the item at the given index within the player's inventory. | `player.getHotbarStack(3)`               |
| give(item)            | IItemStack             | Give the player the provided item. Item is an IItemStack.          | `player.give(<minecraft:gold_ingot>)`    | 

