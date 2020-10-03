# Modificar

Información sobre un mod cargado

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.mods.ModInfo
```

## Properties

| Name               | Type                                                                                                | Has Getter | Has Setter |
| ------------------ | --------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks             | Lista&lt;[crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | true       | false      |
| displayName        | String                                                                                              | true       | false      |
| tipos de entidades | Lista&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true       | false      |
| fluids             | Lista&lt;[crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;               | true       | false      |
| items              | Lista&lt;[crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)&gt;           | true       | false      |
| modid              | String                                                                                              | true       | false      |
| namespace          | String                                                                                              | true       | false      |
| version            | String                                                                                              | true       | false      |

