# Набор зачарований

Событие Зачарованный Комплект запускается, когда в Зачарованном столе создаются уровни для трех возможных чаров.

## Примечания

`event.enchantRow` представляет строку (1-3) стола зачарований, в то время как `event.originalLevel` представляет исходный уровень строки. `Событие.power` — это общее значение окруженного Зачаростью стола, `события.` — это предмет, который зачарует.

`event.level` может быть произвольно изменен на значение в диапазоне от 0 & 30.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EnchantmentLevelSetEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События EnchantmentLevelSet реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

| ZenGetter              | ZenSetter | Возвращаемый тип                         |
| ---------------------- | --------- | ---------------------------------------- |
| `world`                |           | [IWorld](/Vanilla/World/IWorld/)         |
| `enchantRow`           |           | int                                      |
| `мощность`             |           | int                                      |
| `элемент`              |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `оригинальный уровень` |           | int                                      |
| `уровень`              | `уровень` | int                                      |
