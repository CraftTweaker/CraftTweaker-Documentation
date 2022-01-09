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

Return Type: void

```zenscript
EntityAccess.setRemoved(var1 as RemovalReason) as void
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| var1      | [RemovalReason](/vanilla/api/entity/RemovalReason) | No Description Provided |


:::

:::group{name=shouldBeSaved}

Return Type: boolean

```zenscript
// EntityAccess.shouldBeSaved() as boolean

myEntityAccess.shouldBeSaved();
```

:::


## Proprietà

| Nome            | Tipo                                        | Ha Getter | Ha Setter | Descrizione             |
| --------------- | ------------------------------------------- | --------- | --------- | ----------------------- |
| blockPosiion    | [BlockPos](/vanilla/api/util/math/BlockPos) | sì        | no        | No Description Provided |
| boundingBox     | [AABB](/vanilla/api/util/math/AABB)         | sì        | no        | No Description Provided |
| id              | int                                         | sì        | no        | No Description Provided |
| isAlwaysTicking | boolean                                     | sì        | no        | No Description Provided |
| shouldBeSaved   | boolean                                     | sì        | no        | No Description Provided |
| uuid            | **invalid**                                 | sì        | no        | No Description Provided |

