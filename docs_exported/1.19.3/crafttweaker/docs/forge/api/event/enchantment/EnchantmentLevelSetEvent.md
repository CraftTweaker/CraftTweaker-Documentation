# EnchantmentLevelSetEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.enchantment.EnchantmentLevelSetEvent;
```


## Extending Event

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

