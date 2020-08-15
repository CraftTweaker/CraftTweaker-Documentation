# Путешествие сущности измерений

Событие EntityTravelToDimension запускается всякий раз, когда сущность собирается отправиться в другое измерение. В случае отмены сущности не разрешается путешествовать.

## Примечания

`event.dimension` содержит измерение, в которое собирается переместиться.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События EntityTravelToDimension реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter   | Возвращаемый тип |
| ----------- | ---------------- |
| `измерение` | int              |
