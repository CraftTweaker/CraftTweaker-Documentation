# ITeam

Если вы не знаете, что такое команда, вы ужасный человек.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.game.ITeam;`

## Геттеры

| Геттер                 | Тип            |
| ---------------------- | -------------- |
| name                   | string         |
| allowFriendlyFire      | bool           |
| colorPrefix            | string         |
| membershipCollection   | List<string\> |
| deathMessageVisibility | string         |
| collisionRule          | string         |

## ZenMethods

- `formatString(string input);` → Formats the input string for the team. Returns the formatted string.