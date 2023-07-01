# PotionBrewEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.brewing.PotionBrewEvent;
```


## Extending Event

PotionBrewEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in PotionBrewEvent

## Methods

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
PotionBrewEvent.getItem(index as int) as IItemStack
```

| Parameter | Type |
|-----------|------|
| index     | int  |


:::

:::group{name=setItem}

```zenscript
PotionBrewEvent.setItem(index as int, stack as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| index     | int                                        |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::


## Properties

|  Name  | Type | Has Getter | Has Setter |
|--------|------|------------|------------|
| length | int  | true       | false      |

