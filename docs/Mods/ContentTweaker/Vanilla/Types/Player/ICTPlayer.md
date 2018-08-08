# ICTPlayer

An ICTPlayer is ContentTweaker's special [IPlayer](/Vanilla/Players/IPlayer/) object.  
That means all of [IPlayer's](/Vanilla/Players/IPlayer/) methods are also available on this object!

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.Player;`

## ZenMethods
`IMutableItemStack getHeldItem(Hand hand);`

Parameters:

- [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) hand → Main or Off Hand

Returns the [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) held at the given [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/).