# EntityAccess

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityAccess;
```


## Metodi

:::group{name=blockPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// EntityAccess.blockPosition() as BlockPos

myEntityAccess.blockPosition();
```

:::

:::group{name=getBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
// EntityAccess.getBoundingBox() as AABB

myEntityAccess.getBoundingBox();
```

:::

:::group{name=getId}

Return Type: int

```zenscript
// EntityAccess.getId() as int

myEntityAccess.getId();
```

:::

:::group{name=getUUID}

Return Type: **invalid**

```zenscript
// EntityAccess.getUUID() as invalid

myEntityAccess.getUUID();
```

:::

:::group{name=isAlwaysTicking}

Return Type: boolean

```zenscript
// EntityAccess.isAlwaysTicking() as boolean

myEntityAccess.isAlwaysTicking();
```

:::

:::group{name=setRemoved}

```zenscript
EntityAccess.setRemoved(var1 as RemovalReason)
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| var1      | [RemovalReason](/vanilla/api/entity/RemovalReason) |


:::

:::group{name=shouldBeSaved}

Return Type: boolean

```zenscript
// EntityAccess.shouldBeSaved() as boolean

myEntityAccess.shouldBeSaved();
```

:::


## Proprietà

| Nome            | Tipo                                        | Ha Getter | Ha Setter |
| --------------- | ------------------------------------------- | --------- | --------- |
| blockPosiion    | [BlockPos](/vanilla/api/util/math/BlockPos) | sì        | no        |
| boundingBox     | [AABB](/vanilla/api/util/math/AABB)         | sì        | no        |
| id              | int                                         | sì        | no        |
| isAlwaysTicking | boolean                                     | sì        | no        |
| shouldBeSaved   | boolean                                     | sì        | no        |
| uuid            | **invalid**                                 | sì        | no        |

