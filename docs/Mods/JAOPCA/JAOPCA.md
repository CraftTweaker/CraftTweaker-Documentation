# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (Just A Ore Processing Compatibility Attempt) is a mod that aims to add ore processing compatibilty to many mods.

## Importing the package
If you want to shorten your method calls, you can import the package.  
You can do so using  
```
import mods.jaopca.JAOPCA;
```

## Methods

This package is your entry point for JAOPCA. It provides a means of checking for and getting [OreEntry](/Mods/JAOPCA/OreEntry/) objects. Check the respective page for further information, but in short they are material names (e.g. "Gold") that can then have entries, like chunks, dusts and all.

- Entry: e.g. "nugget", "dust", "molten", ... (check [here](/Mods/JAOPCA/RegisteredEntries/) for a list of them all)
- [OreEntry](/Mods/JAOPCA/OreEntry/): e.g. "Diamond", "Coal", "Redstone", ...
- OreType: e.g. "INGOT", "GEM", "DUST"

### Check if an entry exists

Returns `true` if an entry with the given name exists
```
//mods.jaopca.JAOPCA.containsEntry(entryName);
mods.jaopca.JAOPCA.containsEntry("nugget");
```


### Get an OreEntry

Returns the given [OreEntry](/Mods/JAOPCA/OreEntry/) for the given name, or `null` if it does not exist.
_Careful: Most materials are Capitalized, and yes, casing matters!_

```
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("Coal");
```



### Get all OreEntries for an entry

Returns a list of all [OreEntry](/Mods/JAOPCA/OreEntry/) objects that have the given entry registered.

```
//mods.jaopca.JAOPCA.getOresForEntry(entryName);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```


### Get all OreEntries for an entry

Returns a list of all [OreEntry](/Mods/JAOPCA/OreEntry/) objects that are of the given oreType.

```
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```


### Get all registered OreEntries

Returns a list of all registered [OreEntry](/Mods/JAOPCA/OreEntry/) objects.

```
mods.jaopca.JAOPCA.getAllOres();
```