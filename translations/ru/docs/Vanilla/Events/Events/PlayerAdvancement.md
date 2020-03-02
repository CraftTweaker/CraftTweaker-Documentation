# PlayerAdvancement

The PlayerAdvancement Event is fired whenever a player is awarded an Advancement.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAdvancementEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerAdvancement Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## Геттеры

Следующая информация может быть получена от события:

| Геттер | Возвращаемый тип |
| ------ | ---------------- |
| `id`   | string           |

## Id

Apart from the functionality the PlayerEvent exposes you can get the advancement's ID as string.

This can for example be a string like

```zenscript
"minecraft:story/mine_diamond"
```