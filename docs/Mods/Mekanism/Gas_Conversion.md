# Item to Gas Conversion

As of Mekanism 9.7.5 it is now possible to have custom item to gas conversions in various machines.

If you want to change any of the values of the built in conversions it is recommended that you first remove the conversion and then add it back rather than overwriting it. This ensures that it properly removes all the data as in 9.7.5 it does not have a specified output/handling of what happens when an item is listed twice.

Addition
------
```
mods.mekanism.GasConversion.register(IIngredient ingredient, IGasStack gas);

mods.mekanism.GasConversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

Removal
------
```
mods.mekanism.GasConversion.unregister(IIngredient ingredient, IGasStack gas);

mods.mekanism.GasConversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```


Removing all conversions
------
```
mods.mekanism.GasConversion.unregisterAll();
```