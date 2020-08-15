# ITICMaterial

A Tinkers' Construct IMaterial (not to be confused with [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)) is what a Tinker's construct tool can be made of.

## Importando el paquete

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.tconstruct.ITICMaterial;`

## Recuperando tal objeto

You can retrieve an ITICMaterial object using the [ITICMaterial Bracket Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/):

```zenscript
val stone = <ticmat:stone>;
```

## Campos

You can get/set the following fields:

| ZenGetter         | Ajuste            | Return/Setter Type                                                                     | Descripción                                                       |
| ----------------- | ----------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| getName           |                   | cadena                                                                                 | The Material's Name                                               |
| definition        |                   | [Definición inmaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | The Material's Definition                                         |
| durabilityHead    | durabilityHead    | int                                                                                    | A Toolhead made from this material has this durability            |
| miningSpeedHead   | miningSpeedHead   | flotante                                                                               | A Toolhead made from this material has this mining speed          |
| attackHead        | attackHead        | flotante                                                                               | A Toolhead made from this material has this attack Damage         |
| harvestLevelHead  | harvestLevelHead  | int                                                                                    | A Toolhead made from this material has this harvest level         |
| durabilityHandle  | durabilityHandle  | int                                                                                    | A Toolhandle made from this material has this durability          |
| modifierHandle    | modifierHandle    | flotante                                                                               | A Toolhandle made from this material has this durability modifier |
| durabilityExtra   | durabilityExtra   | int                                                                                    | Extra toolparts made from this material have this base durability |
| arrowModifier     | arrowModifier     | flotante                                                                               | Arrows made from this material have this durability modifier      |
| arrowBonusAmmo    | arrowBonusAmmo    | int                                                                                    | Arrow made from this material have this addiotional ammonition    |
| fletchingModifier | fletchingModifier | flotante                                                                               | Fletchungs made from this material have this durability modifier  |
| fletchingAccuracy | fletchingAccuracy | flotante                                                                               | Fletchungs made from this material provide this accuracy          |

## Métodos

- boolean matches(ITICMaterial other); → returns if the given material is equal to `other`