# Furnace
MineTweaker also allows modifying furnace recipes and furnace fuels using a few simple commands.

Do you believe smelting ores in a furnace is too easy? You can fix it as such:

```zenscript
furnace.remove(<item.ingotIron>);

// alternatively, you can specify the input item
furnace.remove(<*>, <tile.oreIron>);
```
Found it sad you can't turn charcoal into real coal? Easy fix:

```zenscript
furnace.addRecipe(<item.coal:0>, <item.coal:1>);

// or, if you want to generate 0.5 XP by doing so
furnace.addRecipe(<item.coal:0>, <item.coal:1>, 0.5);
```
Want to make items burnable? Set their fuel value wit the setFuel function:

```zenscript
furnace.setFuel(<item.rottenFlesh>, 100);
```
The same method can be used to set existing fuel - EXCEPT for vanilla fuels since those are, sadly, hard-coded. Additionally (with the exception of vanilla fuels) you can remove fuels by setting their fuel value to 0.