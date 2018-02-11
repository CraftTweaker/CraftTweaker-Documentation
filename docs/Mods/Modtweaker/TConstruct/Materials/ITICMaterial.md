# ITICMaterial

A Tinkers' Construct IMaterial (not to be confused with [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material)) is what a Tinker's construct tool can be made of.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.tconstruct.ITICMaterial;` 

## Retrieving such an object
You can retrieve an ITICMaterial object using the [ITICMaterial Bracket Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material):
```java
val stone = <material:stone>;
```

## Fields

You can get/set the following fields:

| ZenGetter         | ZenSetter         | Return/Setter Type                         | Description                                                       |
|-------------------|-------------------|--------------------------------------------|-------------------------------------------------------------------|
| getName           |                   | String                                     | The Material's Name                                               |
| definition        |                   | [IMaterialDefinition](IMaterialDefinition) | The Material's Definition                                         |
| durabilityHead    | durabilityHead    | int                                        | A Toolhead made from this material has this durability            |
| miningSpeedHead   | miningSpeedHead   | float                                      | A Toolhead made from this material has this mining speed          |
| attackHead        | attackHead        | float                                      | A Toolhead made from this material has this attack Damage         |
| harvestLevelHead  | harvestLevelHead  | int                                        | A Toolhead made from this material has this harvest level         |
| durabilityHandle  | durabilityHandle  | int                                        | A Toolhandle made from this material has this durability          |
| modifierHandle    | modifierHandle    | float                                      | A Toolhandle made from this material has this durability modifier |
| durabilityExtra   | durabilityExtra   | int                                        | Extra toolparts made from this material have this base durability |
| arrowModifier     | arrowModifier     | float                                      | Arrows made from this material have this durability modifier      |
| arrowBonusAmmo    | arrowBonusAmmo    | int                                        | Arrow made from this material have this addiotional ammonition    |
| fletchingModifier | fletchingModifier | float                                      | Fletchungs made from this material have this durability modifier  |
| fletchingAccuracy | fletchingAccuracy | float                                      | Fletchungs made from this material provide this accuracy          |

## Methods

- boolean matches(ITICMaterial other); → returns if the given material is equal to `other`
