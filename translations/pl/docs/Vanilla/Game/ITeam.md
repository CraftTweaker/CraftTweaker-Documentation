# ITeam

If you don't know what a team is then you are a horrible person.

## Importowanie pakietu

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.ITeam;`

## ZenGetters

| Getter name            | Typ             |
| ---------------------- | --------------- |
| Nazwa                  | ciąg znaków     |
| allowFriendlyFire      | bool            |
| colorPrefix            | ciąg znaków     |
| membershipCollection   | Lista<string\> |
| deathMessageVisibility | ciąg znaków     |
| collisionRule          | ciąg znaków     |

## Metody ZenMethods

- `formatString(string input);` → Formats the input string for the team. Returns the formatted string.