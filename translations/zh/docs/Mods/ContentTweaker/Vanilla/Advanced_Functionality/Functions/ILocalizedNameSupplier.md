# ILocalizedNameSupplier

The ILocalizedNameSupplier function is used to programmatically determine an [Item's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) display name.

## importing the class

If you want to import the function's class, here you go:

```zenscript
import mods.contenttweaker.LocalizedNameSupplier;
```

## The function setup

The function returns a string and takes an [IItemStack](/Vanilla/Items/IItemStack/) as single input parameter.

```zenscript
item.setLocalizedNameSupplier(function(itemStack) {
    return "mySuperItem";
});
```