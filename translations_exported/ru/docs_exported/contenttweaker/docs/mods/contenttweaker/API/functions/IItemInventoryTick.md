# IItemInventoryTick

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IItemInventoryTick;
```


## Methods

:::group{name=apply}

Return Type: void

```zenscript
IItemInventoryTick.apply(stack as MCItemStackMutable, world as MCWorld, entity as MCEntity, itemSlot as int, isSelected as boolean) as void
```

| Параметр   | Тип                                                         | Description             |
| ---------- | ----------------------------------------------------------- | ----------------------- |
| stack      | [MCItemStackMutable](/vanilla/api/items/MCItemStackMutable) | No Description Provided |
| world      | [MCWorld](/vanilla/api/world/MCWorld)                       | No Description Provided |
| entity     | [MCEntity](/vanilla/api/entity/MCEntity)                    | No Description Provided |
| itemSlot   | int                                                         | No Description Provided |
| isSelected | boolean                                                     | No Description Provided |


:::


