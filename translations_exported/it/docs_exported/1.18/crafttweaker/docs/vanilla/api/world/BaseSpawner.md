# BaseSpawner

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.BaseSpawner;
```


## Metodi

:::group{name=getOrCreateDisplayEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
BaseSpawner.getOrCreateDisplayEntity(param0 as Level) as Entity?
```

| Parametro | Tipo                              |
| --------- | --------------------------------- |
| param0    | [Level](/vanilla/api/world/Level) |


:::

:::group{name=getSpin}

Return Type: double

```zenscript
// BaseSpawner.getSpin() as double

myBaseSpawner.getSpin();
```

:::

:::group{name=getoSpin}

Return Type: double

```zenscript
// BaseSpawner.getoSpin() as double

myBaseSpawner.getoSpin();
```

:::

:::group{name=setEntityId}

```zenscript
BaseSpawner.setEntityId(param0 as EntityType)
```

| Parametro | Tipo                                         |
| --------- | -------------------------------------------- |
| param0    | [EntityType](/vanilla/api/entity/EntityType) |


:::


## Proprietà

| Nome     | Tipo                                          | Ha Getter | Ha Setter |
| -------- | --------------------------------------------- | --------- | --------- |
| entityId | [BaseSpawner](/vanilla/api/world/BaseSpawner) | no        | sì        |
| oSpin    | double                                        | sì        | no        |
| spin     | double                                        | sì        | no        |

