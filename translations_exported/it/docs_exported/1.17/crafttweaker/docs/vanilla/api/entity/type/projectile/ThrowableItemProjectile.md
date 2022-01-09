# ThrowableItemProjectile

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.ThrowableItemProjectile;
```


## Extending ThrowableProjectile

ThrowableItemProjectile extends [ThrowableProjectile](/vanilla/api/entity/type/projectile/ThrowableProjectile). That means all methods available in [ThrowableProjectile](/vanilla/api/entity/type/projectile/ThrowableProjectile) are also available in ThrowableItemProjectile

## Interfacce Implementate
ThrowableItemProjectile implements the following interfaces. That means all methods defined in these interfaces are also available in ThrowableItemProjectile

- [ItemSupplier](/vanilla/api/entity/type/projectile/ItemSupplier)

## Metodi

:::group{name=setItem}

Return Type: void

```zenscript
ThrowableItemProjectile.setItem(stack as ItemStack) as void
```

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) | No Description Provided |


:::


## Proprietà

| Nome | Tipo                                                                                   | Ha Getter | Ha Setter | Descrizione             |
| ---- | -------------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| item | [ThrowableItemProjectile](/vanilla/api/entity/type/projectile/ThrowableItemProjectile) | no        | sì        | No Description Provided |

