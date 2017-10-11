# MutableItemStack

A Mutable Item Stack is a special [IItemStack](/Vanilla/Items/IItemStack) object that can only be retrieved from [ICTPlayers](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer).  
However, most (as of now, all) of IItemStack's methods won't work on this instead you need to use the ones below:

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MutableItemStack;` 

##ZenMethods

### Quantity
A Stack's count is the number of items in that stack!

| ZenMethod       | Parameter Type | Description                                         |
|-----------------|----------------|-----------------------------------------------------|
| setCount(count) | int            | Sets the stack's count to the `count` provided      |
| grow(count)     | int            | Increases the stack's count by the `count` provided |
| shrink(count)   | int            | Decreases the stack's count by the `count` provided |