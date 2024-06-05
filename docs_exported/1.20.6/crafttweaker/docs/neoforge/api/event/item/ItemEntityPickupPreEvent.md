# ItemEntityPickupPreEvent

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemEntityPickupPreEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.ItemEntityPickupPreEvent>(event => {
    println("ItemEntityPickupPreEvent ran!");
});
```


## Supertype

ItemEntityPickupPreEvent extends [ItemEntityPickupEvent](/neoforge/api/event/item/ItemEntityPickupEvent). That means all methods available in [ItemEntityPickupEvent](/neoforge/api/event/item/ItemEntityPickupEvent) are also available in ItemEntityPickupPreEvent

## Properties

|   Name    |                  Type                   | Has Getter | Has Setter |
|-----------|-----------------------------------------|------------|------------|
| canPickup | [TriState](/neoforge/api/util/TriState) | true       | true       |

