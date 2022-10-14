# ThrowableItemProjectile

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.ThrowableItemProjectile;
```


## Extending ThrowableProjectile

ThrowableItemProjectile extends [ThrowableProjectile](/vanilla/api/entity/type/projectile/ThrowableProjectile). That means all methods available in [ThrowableProjectile](/vanilla/api/entity/type/projectile/ThrowableProjectile) are also available in ThrowableItemProjectile

## 已实现的接口
ThrowableItemProjectile implements the following interfaces. That means all methods defined in these interfaces are also available in ThrowableItemProjectile

- [ItemSupplier](/vanilla/api/entity/type/projectile/ItemSupplier)

## 使用方式

:::group{name=setItem}

```zenscript
ThrowableItemProjectile.setItem(stack as ItemStack)
```

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::


## 参数

| 名称   | 类型                                                                                     | 可获得   | 可设置  |
| ---- | -------------------------------------------------------------------------------------- | ----- | ---- |
| item | [ThrowableItemProjectile](/vanilla/api/entity/type/projectile/ThrowableItemProjectile) | false | true |

