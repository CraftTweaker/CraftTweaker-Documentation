# Item Bracket Handler

The Item Bracket Handler gives you access to the Items in the game. It is only possible to get items registered in the game, so adding or removing mods may cause issues if you reference the mod's items in an ITem Bracket Handler.

Items are referenced in the Item Bracket Handler by like so:

```
<modid:itemname>
```

With the `modid` being the modid of the mod that the Item belongs to, and `itemname` being the name of the item, It is recommended to use `/ct hand` to get the correct name of the item.

Generally it is like this though:
```
<item:modid:itemname:meta>
```
With `item` as first entry, it specifically says "This has to be an item!" to CT.  
As you've seen above: Optional.  
Usually you will never need this, unless dealing with several custom bracket handlers.  
`modid` is the modid of the mod that the Item belongs to.  
`itemname` is the name of the item, use /ct hand to get the correct name.  
`meta` is the meta value of the item (e.g. Damage value, types, etc.). This is an integer.  
You can also use a wildcard `*` to address all meta values.  
Also optional: If left out it will be 0.

Normally, this will return an IItemStack Object.  
Please refer to [the respective wiki entry](../Items/IItemStack) for further information.

## Examples

An example of the Item Bracket Handler would be:

```
//apple
<minecraft:apple>

//coal
<minecraft:coal>
<minecraft:coal:0>

//charcoal
<minecraft:coal:1>

//both, coal and charcoal
<minecraft:coal:*>
<item:minecraft:coal:*>
```

This will give you access to the `Apple` item.