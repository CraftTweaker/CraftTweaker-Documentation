# IPlayer

The IPlayer interface allows you to view certain information on a specific player and interact with said one.
Mostly used in Event Handlers and Recipe Functions.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.player.IPlayer;`

##Zengetters

Zengetters are for retrieving information. Usually either assigned to a variable or used in a method/function.

| Zengetter     | What does it do                                                                            | Return Type                              | Usage                  |
|---------------|--------------------------------------------------------------------------------------------|------------------------------------------|------------------------|
| id            | returns the player's id                                                                    | string                                   | `player.id`            |
| name          | returns the player's name                                                                  | string                                   | `player.name`          |
| data          | returns the player's data                                                                  | IData                                    | `player.data`          |
| xp            | returns the player's experience level. Can also be used to set a player's experience level | int                                      | `player.xp`            |
| hotbarSize    | returns the player's hotbar size                                                           | int                                      | `player.hotbarSize`    |
| inventorySize | returns the player's inventory size                                                        | int                                      | `player.inventorySize` |
| currentItem   | returns the item the player is currently holding                                           | [IItemStack](/Vanilla/Items/IItemStack)  | `player.currentItem`   |
| creative      | returns if the player is currently in creative mode (a.k.a gamemode 1)                     | bool                                     | `player.creative`      |
| adventure     | returns if the player is currently in adventure mode (a.k.a gamemode 2)                    | bool                                     | `player.adventure`     |
| x             | returns the player's current X position in the world                                       | double                                   | `player.x`             |
| y             | returns the player's current y position in the world                                       | double                                   | `player.y`             |
| z             | returns the player's current z position in the world                                       | double                                   | `player.z`             |
| position      | returns the player's current position. Can also be used to set a player's position         | [Position3f](/Vanilla/Utils/Position3f)  | `player.position`      |


##ZenMethods

Zenmethods are for doing things with other things, in this case with a player.

| ZenMethod                | Parameter Type(s)                       | What does it do                                                     | Example                                  |
|-----------------------   |-----------------------------------------|-------------------------------------------------------------------- |------------------------------------------|
| removeXP(XPtoRemove)     | int                                     | Removes the given experience levels from the player.                | `player.removeXP(1)`                     |
| update(IData)            | IData                                   | Updates the playerdata to the provided IData.                       |                                          |
| sendChat(Message)        | string OR IChatMessage                  | Sends the player a Chat Message.                                    | `player.sendChat("Hello my old friend")` |
| getHotbarStack(index)    | int                                     | Returns the item at the given index within the player's hotbar.     | `player.getHotbarStack(3)`               |
| getInventoryStack(index) | int                                     | Returns the item at the given index within the player's inventory.  | `player.getInventoryStack(3)`            |
| give(item)               | [IItemStack](/Vanilla/Items/IItemStack) | Give the player the provided item. Item is an IItemStack.           | `player.give(<minecraft:gold_ingot>)`    | 
| teleport(position)       | [Position3f](/Vanilla/Utils/Position3f) | Teleports the player to the provided position in the same dimension | `player.teleport(position)`              |