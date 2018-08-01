# ITeam

If you don't know what a team is then you are a horrible person.  

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.ITeam;`

## ZenGetters

| Getter name            | Type          |
|------------------------|---------------|
| name                   | string        |
| allowFriendlyFire      | bool          |
| colorPrefix            | string        |
| membershipCollection   | List<string\> |
| deathMessageVisibility | string        |
| collisionRule          | string        |

## ZenMethods

- `formatString(string input);` → Formats the input string for the team. Returns the formatted string.