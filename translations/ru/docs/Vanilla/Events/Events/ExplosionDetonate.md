# ExplosionDetonate

The ExplosionDetonate Event is fired shortly before an explosion starts. It cannot be canceled.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionDetonateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
ExplosionDetonate Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter           | ZenSetter | Тип                                            |
| ------------------- | --------- | ---------------------------------------------- |
| `affectedEntities`  |           | [IEntity](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions` |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
