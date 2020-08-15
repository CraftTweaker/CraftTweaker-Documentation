# ITeam

If you don't know what a team is then you are a horrible person.

## Importation du paquet

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.ITeam;`

## ZenGetters

| Getter name            | Type de texte        |
| ---------------------- | -------------------- |
| Nom                    | chaîne de caractères |
| allowFriendlyFire      | booléen              |
| colorPrefix            | chaîne de caractères |
| membershipCollection   | List<string\>       |
| deathMessageVisibility | chaîne de caractères |
| collisionRule          | chaîne de caractères |

## Méthodes Zen

- `formatString(string input);` → Formats the input string for the team. Returns the formatted string.