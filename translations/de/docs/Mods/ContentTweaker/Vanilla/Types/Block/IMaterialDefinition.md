# IMaterialDefinition

Ein IMaterialDefinition-Objekt stellt eine materielle Definition im Spiel dar. Eine Materialdefinition wird benötigt, wenn Sie einen neuen Block erstellen möchten.

# Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.BlockMaterial;`

## Aufruf eines IMaterialDefinition-Objekts

You can get such an object using the [Block Material Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>`

## ZenGetters/ZenMethoden ohne Parameter

| ZenGetter           | ZenMethode          | Rückgabetyp                                                            |
| ------------------- | ------------------- | ---------------------------------------------------------------------- |
| blockhell           | blocksLight()       | bool                                                                   |
| blocksbewegung      | blocksMovement()    | bool                                                                   |
| gebrannt            | getCanBurn()        | bool                                                                   |
| mobilityFlag        | getMobilityFlag()   | [PushReaktion](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| flüssig             | isLiquid()          | bool                                                                   |
| undurchsichtig      | isOpaque()          | bool                                                                   |
| austauschbar        | isReplaceable()     | bool                                                                   |
| solid               | isSolid()           | bool                                                                   |
| toolNoterforderlich | isToolNotRequired() | bool                                                                   |

## Vergleiche zwei Blockmaterialien

Du kannst den `==` Operator verwenden, um zu sehen, ob zwei Materialdefinitionen gleich sind

```zenscript
if(materialA == materialB)
    print("Erfolg!");
```