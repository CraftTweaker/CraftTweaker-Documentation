# Item Bracket Handler

The Item Bracket Handler gives you access to the Items in the game. It is only possible to get items registered in the game, so adding or removing mods may cause issues if you reference the mod's items in an ITem Bracket Handler.

Items are referenced in the Item Bracket Handler by like so:

```
<modid:itemname>
```

With the `modid` being the modid of the mod that the Item belongs to, and `itemname` being the name of the item, It is recommended to use `/ct hand` to get the correct name of the item.

## Examples

An example of the Item Bracket Handler would be:

```
<minecraft:apple>
```

This will give you access to the `Apple` item.