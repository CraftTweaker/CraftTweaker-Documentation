# EntityRayTraceResult

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.EntityRayTraceResult;
```


## Extending RayTraceResult

EntityRayTraceResult extends [RayTraceResult](/vanilla/api/util/math/RayTraceResult). That means all methods available in [RayTraceResult](/vanilla/api/util/math/RayTraceResult) are also available in EntityRayTraceResult

## Методы

:::group{name=getEntity}

Gets the entity that was hit by this result.

Returns: The entity that was hit by this result.  
Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
// EntityRayTraceResult.getEntity() as MCEntity

myEntityRayTraceResult.getEntity();
```

:::


## Свойства

| Название | Тип                                      | Имеет Getter | Имеет Setter | Описание                                     |
| -------- | ---------------------------------------- | ------------ | ------------ | -------------------------------------------- |
| entity   | [MCEntity](/vanilla/api/entity/MCEntity) | true         | false        | Gets the entity that was hit by this result. |

