# ICTPlayer

An ICTPlayer is ContentTweaker's special [IPlayer](/Vanilla/Game/IPlayer) object.  
However, most of the functions (in fact, all) that IPlayer offers don't work here!

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Player;`

## ZenMethods
`IMutableItemStack getHeldItem(Hand hand);`

Parameters:

- [Hand](Hand) hand → Main or Off Hand

Returns the [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack) held at the given [Hand](Hand).