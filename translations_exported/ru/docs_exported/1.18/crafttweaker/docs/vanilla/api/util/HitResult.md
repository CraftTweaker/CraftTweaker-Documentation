# HitResult

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.HitResult;
```


## Методы

:::group{name=distanceTo}

Return Type: double

```zenscript
HitResult.distanceTo(entity as Entity) as double
```

| Параметр | Тип                                  | Описание                |
| -------- | ------------------------------------ | ----------------------- |
| entity   | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


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


## Свойства

| Название       | Тип                                              | Имеет Getter | Имеет Setter | Описание                |
| -------------- | ------------------------------------------------ | ------------ | ------------ | ----------------------- |
| местоположение | [Vec3](/vanilla/api/util/math/Vec3)              | true         | false        | No Description Provided |
| type           | [HitResultType](/vanilla/api/util/HitResultType) | true         | false        | No Description Provided |

