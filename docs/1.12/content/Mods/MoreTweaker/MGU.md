# Mob Grinding Utils

### Chicken-Feed

You may change the Spawn-Egg dropped by the chicken-feed.

```
import moretweaker.mob_grinding_utils.ChickenFeed;

ChickenFeed.setSpawnEgg(String mobId, IItemStack spawnegg);

ChickenFeed.resetSpawnEgg(String mobId);
```

Example:

```
ChickenFeed.setSpawnEgg("minecraft:enderman", <minecraft:ender_pearl>);
```