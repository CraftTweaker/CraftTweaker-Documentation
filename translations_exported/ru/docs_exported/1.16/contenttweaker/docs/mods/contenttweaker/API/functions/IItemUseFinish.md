# IItemUseFinish

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IItemUseFinish;
```


## Методы

:::group{name=apply}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
IItemUseFinish.apply(stack as IItemStack, worldIn as MCWorld, entityLiving as MCLivingEntity) as ItemStack
```

| Параметр     | Тип                                                  | Описание                |
| ------------ | ---------------------------------------------------- | ----------------------- |
| stack        | [IItemStack](/vanilla/api/items/IItemStack)          | No Description Provided |
| worldIn      | [MCWorld](/vanilla/api/world/MCWorld)                | No Description Provided |
| entityLiving | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |


:::


