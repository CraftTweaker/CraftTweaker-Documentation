# LootContext

Holds all information that may be obtainable from a loot table roll, allowing for identifying key information.

 Not all parameters are present at all times, for obvious reasons. For example, information related to an entity will not be available if the loot table being rolled is the one for a block.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootContext;
```


## Properties

| 이름                 | Type                                                       | Has Getter | Has Setter |
| ------------------ | ---------------------------------------------------------- | ---------- | ---------- |
| blockState         | [MCBlockState](/vanilla/api/blocks/MCBlockState)?          | true       | false      |
| damageSource       | [DamageSource](/vanilla/api/util/DamageSource)?            | true       | false      |
| directKillerEntity | [MCEntity](/vanilla/api/entity/MCEntity)?                  | true       | false      |
| explosionRadius    | float                                                      | true       | false      |
| killerEntity       | [MCEntity](/vanilla/api/entity/MCEntity)?                  | true       | false      |
| lastDamagePlayer   | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)?      | true       | false      |
| lootTableId        | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| lootingModifier    | int                                                        | true       | false      |
| luck               | float                                                      | true       | false      |
| origin             | [MCVector3d](/vanilla/api/util/MCVector3d)?                | true       | false      |
| thisEntity         | [MCEntity](/vanilla/api/entity/MCEntity)?                  | true       | false      |
| tileEntity         | [MCTileEntity](/vanilla/api/tileentity/MCTileEntity)?      | true       | false      |
| tool               | [IItemStack](/vanilla/api/items/IItemStack)                | true       | false      |
| world              | [MCWorld](/vanilla/api/world/MCWorld)?                     | true       | false      |

