# ModInfo

Holds information about a loaded mod

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.mods.ModInfo;
```


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| blocks | stdlib.List&lt;[MCBlock](/vanilla/api/blocks/MCBlock)&gt; | true | false |
| displayName | String | true | false |
| entitytypes | stdlib.List&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true | false |
| fluids | stdlib.List&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt; | true | false |
| items | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true | false |
| modid | String | true | false |
| namespace | String | true | false |
| version | String | true | false |

