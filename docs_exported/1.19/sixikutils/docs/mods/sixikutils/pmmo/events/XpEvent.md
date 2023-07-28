# XpEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.pmmo.api.events.projecrtmmo.XpEvent;
```


## Extending PlayerEvent

XpEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in XpEvent

## Methods

:::group{name=getAmount}

Return Type: double

```zenscript
// XpEvent.getAmount() as double

myXpEvent.getAmount();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// XpEvent.getPlayer() as Player

myXpEvent.getPlayer();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// XpEvent.getResult() as EventResult

myXpEvent.getResult();
```

:::

:::group{name=getSkill}

Return Type: string

```zenscript
// XpEvent.getSkill() as string

myXpEvent.getSkill();
```

:::

:::group{name=setAmount}

```zenscript
XpEvent.setAmount(amount as long)
```

| Parameter | Type |
|-----------|------|
| amount    | long |


:::

:::group{name=setCanceled}

```zenscript
XpEvent.setCanceled(bool as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| bool      | boolean |


:::

:::group{name=setSkill}

```zenscript
XpEvent.setSkill(string as string)
```

| Parameter |  Type  |
|-----------|--------|
| string    | string |


:::


## Properties

|  Name  |                      Type                       | Has Getter | Has Setter |
|--------|-------------------------------------------------|------------|------------|
| amount | double                                          | true       | true       |
| player | [Player](/mods/sixikutils/curios/player/Player) | true       | false      |
| skill  | string                                          | true       | true       |

