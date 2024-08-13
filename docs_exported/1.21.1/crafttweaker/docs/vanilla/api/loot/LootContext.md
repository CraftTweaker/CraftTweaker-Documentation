# LootContext

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootContext;
```


## Properties

|         Name          |                          Type                           | Has Getter | Has Setter |
|-----------------------|---------------------------------------------------------|------------|------------|
| attackingEntity       | [Entity](/vanilla/api/entity/Entity)?                   | true       | false      |
| blockEntity           | [BlockEntity](/vanilla/api/block/entity/BlockEntity)?   | true       | false      |
| blockState            | [BlockState](/vanilla/api/block/BlockState)?            | true       | false      |
| damageSource          | [DamageSource](/vanilla/api/world/damage/DamageSource)? | true       | false      |
| directAttackingEntity | [Entity](/vanilla/api/entity/Entity)?                   | true       | false      |
| explosionRadius       | float                                                   | true       | false      |
| lastDamagePlayer      | [Player](/vanilla/api/entity/type/player/Player)?       | true       | false      |
| level                 | [ServerLevel](/vanilla/api/world/ServerLevel)           | true       | false      |
| luck                  | float                                                   | true       | false      |
| origin                | [Vec3](/vanilla/api/util/math/Vec3)?                    | true       | false      |
| random                | [RandomSource](/vanilla/api/util/math/RandomSource)     | true       | false      |
| thisEntity            | [Entity](/vanilla/api/entity/Entity)?                   | true       | false      |
| tool                  | [IItemStack](/vanilla/api/item/IItemStack)              | true       | false      |

