# ЭндерТелепорт

Событие EnderTeleport запускается всякий раз, когда эндерман или шалкер телепорт.  
Также стреляется, когда игрок телепортируется с помощью enderpearl (возможно, что другие моды тоже огоняются.)

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EnderTeleportEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

События LivingEntityUseItem реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры/сеттеры

Во время события можно извлечь/задать следующую информацию:

| Геттеры      | ZenSetter    | Тип    |
| ------------ | ------------ | ------ |
| `targetX`    | `targetX`    | double |
| `targetY`    | `targetY`    | double |
| `целевой Z`  | `целевой Z`  | double |
| `Урон атаки` | `Урон атаки` | float  |