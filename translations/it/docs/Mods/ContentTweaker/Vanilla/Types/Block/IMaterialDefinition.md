# IMaterialDefinizione

Un oggetto IMaterialDefinition rappresenta una definizione materiale nel gioco. Una Definizione di Materiale è necessaria se vuoi creare un nuovo blocco.

# Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.BlockMaterial;`

## Chiamare un oggetto IMaterialDefinizione

È possibile ottenere un tale oggetto utilizzando il [Block Material Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>`

## ZenGetters/ZenMethods senza parametri

| ZenGetter       | ZenMethod           | Tipo Di Reso                                                           |
| --------------- | ------------------- | ---------------------------------------------------------------------- |
| blocksLight     | blocksLight()       | bool                                                                   |
| blocksMovement  | blocksMovement()    | bool                                                                   |
| canBurn         | getCanBurn()        | bool                                                                   |
| mobilityFlag    | getMobilityFlag()   | [PushReaction](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| liquido         | isLiquid()          | bool                                                                   |
| opaco           | isOpaque()          | bool                                                                   |
| sostituibile    | isReplaceable()     | bool                                                                   |
| solid           | isSolid()           | bool                                                                   |
| toolNotRequired | isToolNotRequired() | bool                                                                   |

## Confronta due BlockMaterials

Puoi usare l'operatore `==` per vedere se due Definizioni di Materiali sono uguali

```zenscript
if(materialA == materialB)
    print("successo!");
```