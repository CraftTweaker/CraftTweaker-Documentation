# BlockHitResult

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.BlockHitResult;
```


## Extending HitResult

BlockHitResult extends [HitResult](/vanilla/api/util/HitResult). That means all methods available in [HitResult](/vanilla/api/util/HitResult) are also available in BlockHitResult

## Methods

:::group{name=getBlockPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockHitResult.getBlockPos() as BlockPos

myBlockHitResult.getBlockPos();
```

:::

:::group{name=getDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// BlockHitResult.getDirection() as Direction

myBlockHitResult.getDirection();
```

:::

:::group{name=getType}

Return Type: [HitResultType](/vanilla/api/util/HitResultType)

```zenscript
// BlockHitResult.getType() as HitResultType

myBlockHitResult.getType();
```

:::

:::group{name=isInside}

Return Type: boolean

```zenscript
// BlockHitResult.isInside() as boolean

myBlockHitResult.isInside();
```

:::

:::group{name=withDirection}

Return Type: [BlockHitResult](/vanilla/api/util/BlockHitResult)

```zenscript
BlockHitResult.withDirection(param0 as Direction) as BlockHitResult
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| param0    | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::

:::group{name=withPosition}

Return Type: [BlockHitResult](/vanilla/api/util/BlockHitResult)

```zenscript
BlockHitResult.withPosition(param0 as BlockPos) as BlockHitResult
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| param0    | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::


## Properties

| Nombre    | Type                                               | Has Getter | Has Setter | Description             |
| --------- | -------------------------------------------------- | ---------- | ---------- | ----------------------- |
| blockPos  | [BlockPos](/vanilla/api/util/math/BlockPos)        | true       | false      | No Description Provided |
| direction | [Direction](/vanilla/api/util/direction/Direction) | true       | false      | No Description Provided |
| isInside  | boolean                                            | true       | false      | No Description Provided |
| type      | [HitResultType](/vanilla/api/util/HitResultType)   | true       | false      | No Description Provided |

