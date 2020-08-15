# Уничтожить Блок LivingDestroyBlock

Событие запускается, когда иссушитель или Эндер-Дракон пытается уничтожить блоки или когда зомби пытается сломать дверь. Это событие **отменено**, и, если отмена, блок не будет нарушен.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingDestroyBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События LivingDestroyBlock реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter | ZenSetter | Тип                                         |
| --------- | --------- | ------------------------------------------- |
| `штат`    |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |

