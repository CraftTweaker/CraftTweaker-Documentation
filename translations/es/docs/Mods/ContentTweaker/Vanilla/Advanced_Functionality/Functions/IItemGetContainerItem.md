# IItemGetContainerItem

The IItemGetContainerItem function can be added to an [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) and will run whenever the item is used as ingredient.  
It is used to determine, what will be left in the crafting slot, when the item is used as such.  
Think of buckets, for example: Each filled bucket has the empty bucket as containerItem, and when a filled bucket is crafted, you will end up with an empty one.  
This function can be used to calculate the containerItem, so you can go crazy with stuff like NBT-Tags or more.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemGetContainerItem;`

## Parameters

The IItemGetContainerItem is a function with the following parameters:

- [IItemStack](/Vanilla/Items/IItemStack/) stack → The item.

The Function needs to return a new [IItemStack](/Vanilla/Items/IItemStack/) object, or null, if the item should not leave anything behind.