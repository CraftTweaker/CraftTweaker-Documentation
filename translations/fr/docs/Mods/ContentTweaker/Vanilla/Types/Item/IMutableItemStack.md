# MutableItemStack

A Mutable Item Stack is a special [IItemStack](/Vanilla/Items/IItemStack/) object that can only be retrieved from [ICTPlayers](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).  
That means all of [IItemStack](/Vanilla/Items/IItemStack/)'s methods, and those of [IIngredients](/Vanilla/Variable_Types/IIngredient/)!

## Importation du paquet

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MutableItemStack;`

## ZenMethods

### Quantity

A Stack's count is the number of items in that stack!

| Méthode Zen     | Type de paramètre | Libellé                                             |
| --------------- | ----------------- | --------------------------------------------------- |
| setCount(count) | Indice            | Sets the stack's count to the `count` provided      |
| grow(count)     | Indice            | Increases the stack's count by the `count` provided |
| shrink(count)   | Indice            | Decreases the stack's count by the `count` provided |

### Damage

`damage(int amount, ICTPlayer player)`

Parameters:

- int amount → The amount of Damage points to give the item
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) player → the player/Entity damaging the item