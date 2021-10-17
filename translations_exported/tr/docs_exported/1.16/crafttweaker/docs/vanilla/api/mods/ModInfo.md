# ModInfo

Holds information about a loaded mod

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.ModInfo;
```


## Properties

| Name        | Type                                                                              | Has Getter | Has Setter | Description                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blocks      | stdlib.List&lt;[MCBlock](/vanilla/api/block/MCBlock)&gt;              | true       | false      | Finds all blocks registered for that mod.                                                                                                                                                                   |
| displayName | string                                                                            | true       | false      | Gets the display name of the mod                                                                                                                                                                            |
| entitytypes | stdlib.List&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true       | false      | Finds all EntityTypes registered for that mod                                                                                                                                                               |
| fluids      | stdlib.List&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt;              | true       | false      | Finds all EntityTypes registered for that mod                                                                                                                                                               |
| items       | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;        | true       | false      | Gets all known items from that mod <br />   <br />  Does not take "sub items" into account! <br />  That means, that it will e.g. find an enchanted book, but without tags, and only one! |
| modid       | string                                                                            | true       | false      | Gets the modid of the mod                                                                                                                                                                                   |
| namespace   | string                                                                            | true       | false      | Gets the namespace of the mod                                                                                                                                                                               |
| version     | string                                                                            | true       | false      | Gets the version of the mod                                                                                                                                                                                 |

