# BlockRayTraceResult

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.BlockRayTraceResult;
```


## Extending RayTraceResult

BlockRayTraceResult extends [RayTraceResult](/vanilla/api/util/math/RayTraceResult). That means all methods available in [RayTraceResult](/vanilla/api/util/math/RayTraceResult) are also available in BlockRayTraceResult

## Методы

:::group{name=getFace}

Gets the face that was hit.

Returns: The face that was hit.  
Return Type: [Direction](/vanilla/api/util/Direction)

```zenscript
// BlockRayTraceResult.getFace() as Direction

myBlockRayTraceResult.getFace();
```

:::

:::group{name=getPos}

Gets the position that was hit.

Returns: The position that was hit.  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockRayTraceResult.getPos() as BlockPos

myBlockRayTraceResult.getPos();
```

:::

:::group{name=isInside}

Results if the result is inside of a block.

 This is used for scaffolding.

Returns: True if it is inside. False otherwise.  
Return Type: boolean

```zenscript
// BlockRayTraceResult.isInside() as boolean

myBlockRayTraceResult.isInside();
```

:::

:::group{name=withFace}

Returns a new BlockRayTraceResult based on this result with the given face.

Returns: a new BlockRayTraceResult based on this result with the given face.  
Return Type: [BlockRayTraceResult](/vanilla/api/util/math/BlockRayTraceResult)

```zenscript
// BlockRayTraceResult.withFace(newFace as Direction) as BlockRayTraceResult

myBlockRayTraceResult.withFace(MCDirection.north);
```

| Параметр | Тип                                      | Описание      |
| -------- | ---------------------------------------- | ------------- |
| newFace  | [Direction](/vanilla/api/util/Direction) | The new face. |


:::

:::group{name=withPosition}

Returns a new BlockRayTraceResult based on this result with the given position.

Returns: a new BlockRayTraceResult based on this result with the given position.  
Return Type: [BlockRayTraceResult](/vanilla/api/util/math/BlockRayTraceResult)

```zenscript
// BlockRayTraceResult.withPosition(pos as BlockPos) as BlockRayTraceResult

myBlockRayTraceResult.withPosition(new BlockPos(1, 2, 3));
```

| Параметр | Тип                                    | Описание          |
| -------- | -------------------------------------- | ----------------- |
| pos      | [BlockPos](/vanilla/api/util/BlockPos) | The new position. |


:::


## Свойства

| Название | Тип                                      | Имеет Getter | Имеет Setter | Описание                                                                                              |
| -------- | ---------------------------------------- | ------------ | ------------ | ----------------------------------------------------------------------------------------------------- |
| face     | [Direction](/vanilla/api/util/Direction) | true         | false        | Gets the face that was hit.                                                                           |
| inside   | boolean                                  | true         | false        | Results if the result is inside of a block. <br />  <br />  This is used for scaffolding. |
| pos      | [BlockPos](/vanilla/api/util/BlockPos)   | true         | false        | Gets the position that was hit.                                                                       |

