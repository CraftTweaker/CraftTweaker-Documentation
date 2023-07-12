# ItemFishedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.item.ItemFishedEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.item.ItemFishedEvent>(event => {
    println("ItemFishedEvent ran!");
});
```


## Supertype

ItemFishedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemFishedEvent

## Properties

|    Name    |                              Type                              | Has Getter | Has Setter |
|------------|----------------------------------------------------------------|------------|------------|
| drops      | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;  | true       | true       |
| hookEntity | [FishingHook](/vanilla/api/entity/type/projectile/FishingHook) | true       | false      |
| rodDamage  | int                                                            | true       | true       |

