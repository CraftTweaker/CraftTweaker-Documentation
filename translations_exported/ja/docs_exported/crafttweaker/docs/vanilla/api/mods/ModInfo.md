# ModInfo

読み込まれたMODについての情報を保持します

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.modInfo
```

## Properties

| 名称          | Type                                                                                               | Has Getter | Has Setter |
| ----------- | -------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks      | List&lt;[crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | true       | false      |
| displayName | String                                                                                             | true       | false      |
| エンティティタイプ   | List&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true       | false      |
| fluids      | List&lt;[crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;               | true       | false      |
| items       | List&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;          | true       | false      |
| modid       | String                                                                                             | true       | false      |
| 名前空間        | String                                                                                             | true       | false      |
| version     | String                                                                                             | true       | false      |

