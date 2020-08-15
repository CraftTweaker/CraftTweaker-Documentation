# ITeam

If you don't know what a team is then you are a horrible person.

## Importazione del pacchetto

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.ITeam;`

## ZenGetters

| Getter name            | Tipo           |
| ---------------------- | -------------- |
| nome                   | stringa        |
| allowFriendlyFire      | bool           |
| colorPrefix            | stringa        |
| membershipCollection   | List<string\> |
| deathMessageVisibility | stringa        |
| collisionRule          | stringa        |

## ZenMethods

- `formatString(string input);` → Formats the input string for the team. Returns the formatted string.