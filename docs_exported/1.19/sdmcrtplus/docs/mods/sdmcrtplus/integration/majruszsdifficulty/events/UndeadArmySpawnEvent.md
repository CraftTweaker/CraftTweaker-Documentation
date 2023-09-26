# UndeadArmySpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.majruszsdifficulty.events.UndeadArmySpawnEvent;
```


## Extending Event

UndeadArmySpawnEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in UndeadArmySpawnEvent

## Methods

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)?

```zenscript
// UndeadArmySpawnEvent.getPlayer() as Player?

myUndeadArmySpawnEvent.getPlayer();
```

:::

:::group{name=getUndeadArmy}

Return Type: [UndeadArmy](/mods/sdmcrtplus/integration/majruszsdifficulty/UndeadArmy)

```zenscript
// UndeadArmySpawnEvent.getUndeadArmy() as UndeadArmy

myUndeadArmySpawnEvent.getUndeadArmy();
```

:::


