# Loot
## Chest Loot
Since 3.0.8, it is possible to change any kind of dungeon loot. Loot can be changed for dungeon chests, mineshaft chests or any other kind of vanilla or mod chest.

This line would make diamonds very likely to appear:

```zenscript
vanilla.loot.addChestLoot("dungeonChest", <minecraft:diamond>.weight(100));

// Spawn 1-5 sticks with a probability of 100
vanilla.loot.addChestLoot("dungeonChest", <minecraft:stick>.weight(100), 1, 5);
```
It's also possible to remove chest loot:

```zenscript
vanilla.loot.removeChestLoot("dungeonChest", <minecraft:enchanted_book>);
```
Both items and ore dictionary entries work, as does the wildcard pattern to remove everything (<*>).

Use /mt loot to dump the list of chests and their contents.

## Seeds
You can now also modify the seeds that are dropped when you break tall grass:

```zenscript
vanilla.seeds.addSeed(<minecraft:planks>.weight(100));
vanilla.seeds.removeSeed(<Natura:barley.seed:*>);
```
This functionality existed in ModTweaker before and has now been integrated into MineTweaker.

Use /mt seeds to see what's already registered.