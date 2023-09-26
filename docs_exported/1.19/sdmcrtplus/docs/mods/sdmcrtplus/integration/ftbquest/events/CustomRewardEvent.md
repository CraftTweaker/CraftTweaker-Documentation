# CustomRewardEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.events.CustomRewardEvent;
```


## Extending Event

CustomRewardEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in CustomRewardEvent

## Methods

:::group{name=getPlayer}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)

```zenscript
// CustomRewardEvent.getPlayer() as ServerPlayer

myCustomRewardEvent.getPlayer();
```

:::

:::group{name=getReward}

Return Type: **invalid**

```zenscript
// CustomRewardEvent.getReward() as invalid

myCustomRewardEvent.getReward();
```

:::

:::group{name=isNotify}

Return Type: boolean

```zenscript
// CustomRewardEvent.isNotify() as boolean

myCustomRewardEvent.isNotify();
```

:::


