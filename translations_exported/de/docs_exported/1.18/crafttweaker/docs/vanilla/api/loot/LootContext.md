# LootContext

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootContext;
```


## Properties

| Name               | Type                                                  | Has Getter | Has Setter |
| ------------------ | ----------------------------------------------------- | ---------- | ---------- |
| blockEntity        | [BlockEntity](/vanilla/api/block/entity/BlockEntity)? | true       | false      |
| blockState         | [BlockState](/vanilla/api/block/BlockState)?          | true       | false      |
| damageSource       | [DamageSource](/vanilla/api/world/DamageSource)?      | true       | false      |
| directKillerEntity | [Entity](/vanilla/api/entity/Entity)?                 | true       | false      |
| explosionRadius    | float                                                 | true       | false      |
| killerEntity       | [Entity](/vanilla/api/entity/Entity)?                 | true       | false      |
| lastDamagePlayer   | [Player](/vanilla/api/entity/type/player/Player)?     | true       | false      |
| level              | [ServerLevel](/vanilla/api/world/ServerLevel)         | true       | false      |
| luck               | float                                                 | true       | false      |
| origin             | [Vec3](/vanilla/api/util/math/Vec3)?                  | true       | false      |
| random             | [Random](/vanilla/api/util/math/Random)               | true       | false      |
| thisEntity         | [Entity](/vanilla/api/entity/Entity)?                 | true       | false      |
| tool               | [IItemStack](/vanilla/api/item/IItemStack)            | true       | false      |

