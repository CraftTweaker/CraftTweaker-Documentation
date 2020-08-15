# LivingKnockBack

Это событие запускается, когда сущность отталкивается. Событие **отменено** и это не позволит отозвать сущность. Попеременно можно изменить силу отталкивания в дополнение к соотношениям X и Z.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingKnockBackEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
LivingKnockBack События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter                    | ZenSetter       | Тип                                   |
| ---------------------------- | --------------- | ------------------------------------- |
| `атакующий`                  | `атакующий`     | [IEntity](/Vanilla/Entities/IEntity/) |
| `оригинальный атакующий`     |                 | [IEntity](/Vanilla/Entities/IEntity/) |
| `сила`                       | `сила`          | float                                 |
| `оригинальная Сила`          |                 | float                                 |
| `соотношение X`              | `соотношение X` | double                                |
| `соотношение Z`              | `соотношение Z` | double                                |
| `оригинальное соотношение`   |                 | double                                |
| `оригинальное соотношение Z` |                 | double                                |

## Примечания

По прибытии события, возможно, что `атакующий`, `сила`, или различные `пропорции`s уже были изменены. Эти значения можно найти в `original*` переменных.
