# ITeam

Если вы не знаете, что такое команда, вы ужасный человек.

## Импорт пакета
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.ITeam;`

## ZenGetters

| Геттер                 | Тип            |
| ---------------------- | -------------- |
| name                   | string         |
| allowFriendlyFire      | bool           |
| colorPrefix            | string         |
| membershipCollection   | List<string\> |
| deathMessageVisibility | string         |
| collisionRule          | string         |

## ZenMethods

- `formatString(string input);` → Форматирует входную строку для этой команды. Возвращает отформатированную строку.