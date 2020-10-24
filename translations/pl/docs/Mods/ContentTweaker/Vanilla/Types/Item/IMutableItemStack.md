# MutableItemStack

A Mutable Item Stack is a special [IItemStack](/Vanilla/Items/IItemStack/) object that can only be retrieved from [ICTPlayers](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).  
That means all of [IItemStack](/Vanilla/Items/IItemStack/)'s methods, and those of [IIngredients](/Vanilla/Variable_Types/IIngredient/)!

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MutableItemStack;`

## ZenMethods

### Quantity

A Stack's count is the number of items in that stack!

| ZenMethod       | Parameter Type | Description                                         |
| --------------- | -------------- | --------------------------------------------------- |
| setCount(count) | int            | Sets the stack's count to the `count` provided      |
| grow(count)     | int            | Increases the stack's count by the `count` provided |
| shrink(count)   | int            | Decreases the stack's count by the `count` provided |

### Damage

`damage(int amount, ICTPlayer player)`

Parameters:

- int amount → The amount of Damage points to give the item
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) player → the player/Entity damaging the item