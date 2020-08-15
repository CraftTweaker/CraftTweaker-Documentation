# ITeam

If you don't know what a team is then you are a horrible person.

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.ITeam;`

## ZenGetters

| Getter name            | タイプ            |
| ---------------------- | -------------- |
| 名前                     | 文字列            |
| allowFriendlyFire      | bool           |
| colorPrefix            | 文字列            |
| membershipCollection   | List<string\> |
| deathMessageVisibility | 文字列            |
| collisionRule          | 文字列            |

## ZenMethods

- `formatString(string input);` → Formats the input string for the team. Returns the formatted string.