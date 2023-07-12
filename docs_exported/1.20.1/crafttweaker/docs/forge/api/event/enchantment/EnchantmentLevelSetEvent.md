# EnchantmentLevelSetEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.enchantment.EnchantmentLevelSetEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.enchantment.EnchantmentLevelSetEvent>(event => {
    println("EnchantmentLevelSetEvent ran!");
});
```


## Supertype

EnchantmentLevelSetEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in EnchantmentLevelSetEvent

## Properties

|     Name      |                    Type                     | Has Getter | Has Setter |
|---------------|---------------------------------------------|------------|------------|
| enchantLevel  | int                                         | true       | true       |
| enchantRow    | int                                         | true       | false      |
| item          | [IItemStack](/vanilla/api/item/IItemStack)  | true       | false      |
| level         | [Level](/vanilla/api/world/Level)           | true       | false      |
| originalLevel | int                                         | true       | false      |
| pos           | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| power         | int                                         | true       | false      |

