# LivingEntityUseItem

Событие LivingEntityUseItem запускается каждый раз, когда сущность начинает использовать предмет, останавливается после того, как игрок закончит использовать предмет, и каждый тик использует предмет.  
Так как это будет называться слишком часто, есть 4 подсобытия, вызываемые только в их конкретном случае.

## Импорт класса

Может потребоваться [импортировать](/AdvancedFunctions/Import/) класс, чтобы избежать ошибок.

```zenscript
//Базовое событие
импортировать crafttweaker.event.EntityLivingUseItemEvent.All;

//Специальные события
импортировать crafttweaker.event.EntityLivingUseItemEvent.Start;
импортировать crafttweaker.event.EntityLivingUseItemEvent.Tick;
импортировать crafttweaker.event.EntityLivingUseItemEvent.Stop;
импортировать crafttweaker.event.EntityLivingUseItemEvent.Finish;
```

## Наследование от интерфейсов событий

События LivingEntityUseItem реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры/сеттеры

Во время события можно извлечь/задать следующую информацию:

| Геттер         | Возвращаемый тип                         |
| -------------- | ---------------------------------------- |
| `player`       | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `isPlayer`     | bool                                     |
| `элемент`      | [IItemStack](/Vanilla/Items/IItemStack/) |
| `длительность` | int                                      |

| ZenSetter      | Тип параметра |
| -------------- | ------------- |
| `длительность` | int           |