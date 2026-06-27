# Hearth  Well

There is already crafttweaker support for Hearth Well, but it is lacking some features regarding the coring.

**IMPORTANT: you should not use the native Hearth Well support to modify coring recipes if you're using this, or you might be in trouble.**

### MoreCoring

```
import moretweaker.hwell.MoreCoring;

MoreCoring.removeCoring(@Nullable String coreId, @Nullable String shardId);
MoreCoring.addCoring(String coreId, String shardId, IItemStack[] output, IItemStack[] input);
```

If `coreId` or `shardId` is null, it'll match every core / shard. So to remove al recipes from the heat core you can do:

```
MoreCoring.removeCoring("core_heat", null);
```

#### Core Ids

  * Rock Core: `core_stone`
  * Anima Core: `core_anima`
  * Warm Core: `core_heat`
  * Verdant Core: `core_green`
  * Sentient Core: `core_sentient`

#### Shard Ids

  * Shard of the Soil of Fire: `shard_c`
  * Shard of the Sacred Land: `shard_fe`
  * Shard of the Shining Dawn: `shard_au`
  * Shard of the Root of Life: `shard_o`
  * Shard of the Living World: `shard_h`
  * Shard of the Born Might: `shard_ca`
  * Shard of the Morning Star: `shard_p`
  * Shard of the Pure Giver: `shard_n`