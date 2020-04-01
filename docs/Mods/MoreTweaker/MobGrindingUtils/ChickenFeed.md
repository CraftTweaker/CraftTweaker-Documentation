# Chicken Feed

This allows you to change the item dropped by a chicken when feed with the chicken feed.

## Package
`moretweaker.mob_grinding_utils.ChickenFeed`

## Addition

```zenscript
//moretweaker.mob_grinding_utils.ChickenFeed.setSpawnEgg(String mobId, IItemStack spawnegg);
moretweaker.mob_grinding_utils.ChickenFeed.setSpawnEgg("minecraft:enderman", <minecraft:ender_pearl>);
```

## Removal

```zenscript
//moretweaker.mob_grinding_utils.ChickenFeed.resetSpawnEgg(String mobId);
moretweaker.mob_grinding_utils.ChickenFeed.resetSpawnEgg("minecraft:enderman");

moretweaker.mob_grinding_utils.ChickenFeed.removeAll();
```