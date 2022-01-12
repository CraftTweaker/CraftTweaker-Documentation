# HitResult

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.HitResult;
```


## Metodi

:::group{name=distanceTo}

Return Type: double

```zenscript
HitResult.distanceTo(entity as Entity) as double
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=getLocation}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// HitResult.getLocation() as Vec3

myHitResult.getLocation();
```

:::

:::group{name=getType}

Return Type: [HitResultType](/vanilla/api/util/HitResultType)

```zenscript
// HitResult.getType() as HitResultType

myHitResult.getType();
```

:::


## Proprietà

| Nome      | Tipo                                             | Ha Getter | Ha Setter | Descrizione             |
| --------- | ------------------------------------------------ | --------- | --------- | ----------------------- |
| posizione | [Vec3](/vanilla/api/util/math/Vec3)              | sì        | no        | No Description Provided |
| type      | [HitResultType](/vanilla/api/util/HitResultType) | sì        | no        | No Description Provided |

