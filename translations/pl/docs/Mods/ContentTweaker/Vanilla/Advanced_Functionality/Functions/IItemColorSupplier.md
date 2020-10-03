# IItemColorSupplier

The IItemColorSupplier function can be used to provide the [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) to be used for whatever.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemColorSupplier;`

## Parameters

The IItemColorSupplier Function is a function with following parameters.

- [IItemStack](/Vanilla/Items/IItemStack/) itemStack → the item whose color is being requested.
- int tintIndex → the tint index, use that however you like. The function needs to return an [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).