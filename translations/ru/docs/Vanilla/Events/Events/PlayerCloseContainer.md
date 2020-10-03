# PlayerCloseContainer

The PlayerCloseContainer Event is fired whenever a player closes a container.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCloseContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerCloseContainer Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter   | Возвращаемый тип                             |
| ----------- | -------------------------------------------- |
| `container` | [IContainer](/Vanilla/Container/IContainer/) |
