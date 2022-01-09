# ThrowableItemProjectile

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.ThrowableItemProjectile;
```


## Extending ThrowableProjectile

ThrowableItemProjectile extends [ThrowableProjectile](/vanilla/api/entity/type/projectile/ThrowableProjectile). That means all methods available in [ThrowableProjectile](/vanilla/api/entity/type/projectile/ThrowableProjectile) are also available in ThrowableItemProjectile

## Implemented Interfaces
ThrowableItemProjectile implements the following interfaces. That means all methods defined in these interfaces are also available in ThrowableItemProjectile

- [ItemSupplier](/vanilla/api/entity/type/projectile/ItemSupplier)

## Методы

:::group{name=setItem}

Return Type: void

```zenscript
ThrowableItemProjectile.setItem(stack as ItemStack) as void
```

| Параметр | Тип                                      | Описание                |
| -------- | ---------------------------------------- | ----------------------- |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) | No Description Provided |


:::


## Свойства

| Название | Тип                                                                                    | Имеет Getter | Имеет Setter | Описание                |
| -------- | -------------------------------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| item     | [ThrowableItemProjectile](/vanilla/api/entity/type/projectile/ThrowableItemProjectile) | false        | true         | No Description Provided |

