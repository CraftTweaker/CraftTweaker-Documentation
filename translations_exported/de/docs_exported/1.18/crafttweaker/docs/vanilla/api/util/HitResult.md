# HitResult

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.HitResult;
```


## Methoden

:::group{name=distanceTo}

Return Type: double

```zenscript
HitResult.distanceTo(entity as Entity) as double
```

| Parameter | Type                                 | Beschreibung            |
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


## Properties

| Name     | Type                                             | Has Getter | Has Setter | Beschreibung            |
| -------- | ------------------------------------------------ | ---------- | ---------- | ----------------------- |
| standort | [Vec3](/vanilla/api/util/math/Vec3)              | true       | false      | No Description Provided |
| type     | [HitResultType](/vanilla/api/util/HitResultType) | true       | false      | No Description Provided |

