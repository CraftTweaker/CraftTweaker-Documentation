# Взрывной Детонат

Событие Взрыв Детоната запускается незадолго до начала взрыва. Это не может быть отменено.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionDetonateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
ExplosionDetonate Events реализуют следующие интерфейсы и могут также вызвать все их методы/getters/setters:

- [IExplosion-событие](/Vanilla/Events/Events/IExplosionEvent/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter             | ZenSetter | Тип                                            |
| --------------------- | --------- | ---------------------------------------------- |
| `измененные сущности` |           | [IEntity](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions`   |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
