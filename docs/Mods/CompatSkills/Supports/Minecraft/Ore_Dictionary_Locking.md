# OreDictionary Locking

## Feature:
This locks adds the ability to lock any and all items that are under a certain Ore Dictionary Tag.
This means that if you lock the Ore Dictionary Entry of "oreIron" and item/block with the tag "oreIron" would be locked behind the set requirements.
This type of lock also supports a [IData](/Vanilla/Data/IData/) Parameter which means that it only affects things under the Ore-Dict tag IF they have a matching IDATA tag to the one provided to the lock.

## Syntax:
```
mods.compatskills.OreDictLock.addOreDictLock(IOreDictEntry entry, String... locked);
mods.compatskills.OreDictLock.addNBTOreDictLock(IOreDictEntry entry, IData tag, String... locked);

mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim|1");
mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, IData tag, "dim|1");
```