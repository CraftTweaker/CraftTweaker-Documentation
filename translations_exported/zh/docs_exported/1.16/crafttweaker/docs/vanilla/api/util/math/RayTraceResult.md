# RayTraceResult

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.RayTraceResult;
```


## 使用方式

:::group{name=distanceTo}

Gets the distance from this RayTraceResult to the given Entity.

Returns: The distance from this result to the given entity.  
Return Type: double

```zenscript
// RayTraceResult.distanceTo(entity as MCEntity) as double

myRayTraceResult.distanceTo(event.entity);
```

| 参数     | 类型                                       | 描述                                 |
| ------ | ---------------------------------------- | ---------------------------------- |
| entity | [MCEntity](/vanilla/api/entity/MCEntity) | The entity to get the distance to. |


:::

:::group{name=getHitVec}

Gets the hit vector of this result.

Returns: The hit vector of this result.  
Return Type: [MCVector3d](/vanilla/api/util/MCVector3d)

```zenscript
// RayTraceResult.getHitVec() as MCVector3d

myRayTraceResult.getHitVec();
```

:::

:::group{name=getType}

Gets the type of this RayTraceResult. This can be used to determine if this is a BlockRayTraceResult, an EntityRayTraceResult or if the trace missed.

Returns: The type of this RayTraceResult.  
Return Type: [RayTraceResultType](/vanilla/api/util/math/RayTraceResultType)

```zenscript
// RayTraceResult.getType() as RayTraceResultType

myRayTraceResult.getType();
```

:::


## 参数

| 名称     | 类型                                                              | 可获得  | 可设置   | 描述                                                                                                                                                    |
| ------ | --------------------------------------------------------------- | ---- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| hitVec | [MCVector3d](/vanilla/api/util/MCVector3d)                      | true | false | Gets the hit vector of this result.                                                                                                                   |
| 类型     | [RayTraceResultType](/vanilla/api/util/math/RayTraceResultType) | true | false | Gets the type of this RayTraceResult. This can be used to determine if this is a BlockRayTraceResult, an EntityRayTraceResult or if the trace missed. |

