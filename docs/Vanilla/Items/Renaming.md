# Renaming

Always reading 'chest' is annoying, isn't it?  

That's why there's the possibility to rename stuff.

## Changing the display name

This is probably the easiest way to achieve a different item or block name.
You rename `item` to `newName`:
```
item.displayName = newName;

//Example
<minecraft:chest>.displayName = "Storage Box Deluxe";
```
`item` is an [IItemStack](/Vanilla/Items/IItemStack/).  
`newName` is a String.

## Changing the localization

If some modded inventories still show the item's old name instead of the new one, you need to change the localization.
You can read what that means on the `game` entry.
```
game.setLocalization(languageCode,unlocalizedName,newName);

game.setLocalization("tile.chest.name","StorageBox Deluxe")
```
`languageCode` is a string and optional. If you omit it, it will apply the localization regardless of the client's set language.  
`unlocaLizedName` is a string.  
`newName` is a string.