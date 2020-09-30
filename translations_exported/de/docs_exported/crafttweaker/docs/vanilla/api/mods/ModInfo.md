# ModInfo

Haltet Informationen über einen geladenen Mod

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.mods.ModInfo
```

## Properties

| Name        | Type                                                                                                | Has Getter | Has Setter |
| ----------- | --------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks      | Liste&lt;[craftweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;               | true       | false      |
| displayName | String                                                                                              | true       | false      |
| entitytypes | Liste&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true       | false      |
| fluids      | Liste&lt;[craftweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;                | true       | false      |
| items       | Liste&lt;[craftweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;           | true       | false      |
| modid       | String                                                                                              | true       | false      |
| namespace   | String                                                                                              | true       | false      |
| version     | String                                                                                              | true       | false      |

