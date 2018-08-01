# IMaterialDefinition

An IMaterialDefinition object represents a material definition in the game. A Material Definition is needed if you want to create a new block.

# Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.BlockMaterial;` 


## Calling an IMaterialDefinition object
You can get such an object using the [Block Material Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>`

## ZenGetters/ZenMethods without parameters

| ZenGetter       | ZenMethod           | Return Type                                                           |
|-----------------|---------------------|-----------------------------------------------------------------------|
| blocksLight     | blocksLight()       | bool                                                                  |
| blocksMovement  | blocksMovement()    | bool                                                                  |
| canBurn         | getCanBurn()        | bool                                                                  |
| mobilityFlag    | getMobilityFlag()   | [PushReaction](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction) |
| liquid          | isLiquid()          | bool                                                                  |
| opaque          | isOpaque()          | bool                                                                  |
| replaceable     | isReplaceable()     | bool                                                                  |
| solid           | isSolid()           | bool                                                                  |
| toolNotRequired | isToolNotRequired() | bool                                                                  |



## Compare two BlockMaterials

You can use the `==` operator to see if two MaterialDefinitions are equal

```
if(materialA == materialB)
    print("success!");
```