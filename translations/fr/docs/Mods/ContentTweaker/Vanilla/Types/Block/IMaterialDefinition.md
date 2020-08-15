# IMaterialDefinition

An IMaterialDefinition object represents a material definition in the game. A Material Definition is needed if you want to create a new block.

# Importation du paquet

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.BlockMaterial;`

## Calling an IMaterialDefinition object

You can get such an object using the [Block Material Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>`

## ZenGetters/ZenMethods without parameters

| ZenGetter       | Méthode Zen         | Type de retour                                                         |
| --------------- | ------------------- | ---------------------------------------------------------------------- |
| blocksLight     | blocksLight()       | booléen                                                                |
| blocksMovement  | blocksMovement()    | booléen                                                                |
| canBurn         | getCanBurn()        | booléen                                                                |
| mobilityFlag    | getMobilityFlag()   | [PushReaction](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| liquid          | isLiquid()          | booléen                                                                |
| opaque          | isOpaque()          | booléen                                                                |
| replaceable     | isReplaceable()     | booléen                                                                |
| solid           | isSolid()           | booléen                                                                |
| toolNotRequired | isToolNotRequired() | booléen                                                                |

## Compare two BlockMaterials

You can use the `==` operator to see if two MaterialDefinitions are equal

```zenscript
if(materialA == materialB)
    print("success!");
```