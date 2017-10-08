# Ritual Mineralis

You can add and remove ores that can be spawned with the mineralis ritual.  
Already registered oreDict entries can be found [here](https://github.com/HellFirePvP/AstralSorcery/blob/master/src/main/java/hellfirepvp/astralsorcery/common/base/OreTypes.java#L35-L58).


## Calling
You can call the RitualMineralis package using `mods.astralsorcery.RitualMineralis`.  

## Remove Ores
This function removes an Ore Dictionary from the list of the ores the mineralis ritual can possibly spawn.

```JAVA
//mods.astralsorcery.RitualMineralis.removeOre(String oreDictOreName);
mods.astralsorcery.RitualMineralis.removeOre("oreCoal");
```

## Addition

This function adds an Ore Dictionary to the list of the ores the mineralis ritual can possibly spawn.  
Make sure that the oreDictName contains at least 1 ore **Block**.  
GregTech ores are blacklisted for stability reasons!

```JAVA
//mods.astralsorcery.RitualMineralis.addOre(String oreDictOreName, double weight);
mods.astralsorcery.RitualMineralis.addOre("blockMarble", 6000);
```