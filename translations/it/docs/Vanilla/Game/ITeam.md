# ITeam

Se non sai cos'è una squadra, allora sei una persona orribile.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.game.ITeam;`

## ZenGetters

| Nome generatore        | Tipo             |
| ---------------------- | ---------------- |
| nome                   | stringa          |
| allowFriendlyFire      | bool             |
| colorPrefisso          | stringa          |
| membershipCollection   | Elenco<string\> |
| deathMessageVisibilità | stringa          |
| collisionRule          | stringa          |

## ZenMethods

- `formatString(string input);` → Formatizza la stringa di input per la squadra. Restituisce la stringa formattata.