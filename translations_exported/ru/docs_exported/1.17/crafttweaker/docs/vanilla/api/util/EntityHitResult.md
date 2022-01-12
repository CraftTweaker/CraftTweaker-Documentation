# EntityHitResult

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.EntityHitResult;
```


## Extending HitResult

EntityHitResult extends [HitResult](/vanilla/api/util/HitResult). That means all methods available in [HitResult](/vanilla/api/util/HitResult) are also available in EntityHitResult

## Методы

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// EntityHitResult.getEntity() as Entity

myEntityHitResult.getEntity();
```

:::

:::group{name=getType}

Return Type: [HitResultType](/vanilla/api/util/HitResultType)

```zenscript
// EntityHitResult.getType() as HitResultType

myEntityHitResult.getType();
```

:::


## Свойства

| Название | Тип                                  | Имеет Getter | Имеет Setter | Описание                |
| -------- | ------------------------------------ | ------------ | ------------ | ----------------------- |
| type     | [Entity](/vanilla/api/entity/Entity) | true         | false        | No Description Provided |

