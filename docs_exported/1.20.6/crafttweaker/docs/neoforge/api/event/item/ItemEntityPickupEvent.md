# ItemEntityPickupEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemEntityPickupEvent;
```


## Extending Event

ItemEntityPickupEvent extends [Event](/neoforge/api/event/Event). That means all methods available in [Event](/neoforge/api/event/Event) are also available in ItemEntityPickupEvent

## Properties

|    Name    |                          Type                          | Has Getter | Has Setter |
|------------|--------------------------------------------------------|------------|------------|
| itemEntity | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity) | true       | false      |

