# ItemEntityPickupPostEvent

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemEntityPickupPostEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.ItemEntityPickupPostEvent>(event => {
    println("ItemEntityPickupPostEvent ran!");
});
```


## Supertype

ItemEntityPickupPostEvent extends [ItemEntityPickupEvent](/neoforge/api/event/item/ItemEntityPickupEvent). That means all methods available in [ItemEntityPickupEvent](/neoforge/api/event/item/ItemEntityPickupEvent) are also available in ItemEntityPickupPostEvent

## Properties

|     Name      |                   Type                   | Has Getter | Has Setter |
|---------------|------------------------------------------|------------|------------|
| currentStack  | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      |
| originalStack | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      |

