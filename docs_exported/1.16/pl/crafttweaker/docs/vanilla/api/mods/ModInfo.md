# ModInfo

Zatrzymuje informacje o załadowanym modze

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.ModInfo;
```


## Properties

| Name            | Type                                                                              | Has Getter | Has Setter |
| --------------- | --------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks          | stdlib.List&lt;[MCBlock](/vanilla/api/blocks/MCBlock)&gt;             | true       | false      |
| displayName     | string                                                                            | true       | false      |
| typy podmiotów  | stdlib.List&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true       | false      |
| fluids          | stdlib.List&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt;              | true       | false      |
| items           | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;        | true       | false      |
| modid           | string                                                                            | true       | false      |
| przestrzeń nazw | string                                                                            | true       | false      |
| version         | string                                                                            | true       | false      |

