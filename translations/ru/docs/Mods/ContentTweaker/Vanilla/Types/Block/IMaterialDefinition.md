# Определение IMaterialThis

Объект IMaterialDefinition представляет собой материальное определение в игре. Для создания нового блока требуется определение материала.

# Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.BlockMaterial;`

## Вызов объекта IMaterialDefinition

Такой объект можно получить с помощью [Block Material Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>`

## Геттеры/методы без параметров

| Геттер          | Метод               | Возвращаемый тип                                                       |
| --------------- | ------------------- | ---------------------------------------------------------------------- |
| blocksLight     | blocksLight()       | bool                                                                   |
| blocksMovement  | blocksMovement()    | bool                                                                   |
| canBurn         | getCanBurn()        | bool                                                                   |
| mobilityFlag    | getMobilityFlag()   | [PushReaction](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| жидкость        | isLiquid()          | bool                                                                   |
| opaque          | isOpaque()          | bool                                                                   |
| replaceable     | isReplaceable()     | bool                                                                   |
| solid           | isSolid()           | bool                                                                   |
| toolNotRequired | isToolNotRequired() | bool                                                                   |

## Сравнить два блока

Вы можете использовать оператор `==` , чтобы увидеть, одинаковы ли два MaterialDefinitions

```zenscript
if(materialA == materialB)
    принтера ("успеха!");
```