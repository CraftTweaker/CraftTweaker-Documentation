# LootContext

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootContext;
```


## Proprietà

| Nome               | Tipo                                                  | Ha Getter | Ha Setter |
| ------------------ | ----------------------------------------------------- | --------- | --------- |
| blockEntity        | [BlockEntity](/vanilla/api/block/entity/BlockEntity)? | sì        | no        |
| blockState         | [BlockState](/vanilla/api/block/BlockState)?          | sì        | no        |
| damageSource       | [DamageSource](/vanilla/api/world/DamageSource)?      | sì        | no        |
| directKillerEntity | [Entity](/vanilla/api/entity/Entity)?                 | sì        | no        |
| explosionRadius    | float                                                 | sì        | no        |
| killerEntity       | [Entity](/vanilla/api/entity/Entity)?                 | sì        | no        |
| lastDamagePlayer   | [Player](/vanilla/api/entity/type/player/Player)?     | sì        | no        |
| level              | [ServerLevel](/vanilla/api/world/ServerLevel)         | sì        | no        |
| luck               | float                                                 | sì        | no        |
| origin             | [Vec3](/vanilla/api/util/math/Vec3)?                  | sì        | no        |
| random             | [Random](/vanilla/api/util/math/Random)               | sì        | no        |
| thisEntity         | [Entity](/vanilla/api/entity/Entity)?                 | sì        | no        |
| tool               | [IItemStack](/vanilla/api/item/IItemStack)            | sì        | no        |

