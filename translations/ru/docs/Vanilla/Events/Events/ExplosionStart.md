# Взрывной старт

Событие Взрывной Старт запускается незадолго до начала взрыва. В случае отмены взрыв не произойдет.

## Класс события
Вам нужно оформить событие в заголовке функции как этот класс:  
`crafttweaker.event. xplosionStartEvent`  
, конечно, вы можете импортировать класс и [затем импортировать](/AdvancedFunctions/Import/).

## Наследование от интерфейсов событий
События ExplosionStart реализуют следующие интерфейсы и могут также вызвать все их методы/getters/setters:

- [IExplosion-событие](/Vanilla/Events/Events/IExplosionEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
