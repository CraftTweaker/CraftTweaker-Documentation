# ITICMaterial

A Tinkers' Construct IMaterial (not to be confused with [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)) is what a Tinker's construct tool can be made of.

## Importation du paquet

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.tconstruct.ITICMaterial;`

## Récupération d'un tel objet

You can retrieve an ITICMaterial object using the [ITICMaterial Bracket Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/):

```zenscript
val stone = <ticmat:stone>;
```

## Champs

You can get/set the following fields:

| ZenGetter         | ZenSetter         | Return/Setter Type                                                                   | Libellé                                                           |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| getName           |                   | chaîne de caractères                                                                 | The Material's Name                                               |
| definition        |                   | [IMaterialDefinition](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | The Material's Definition                                         |
| durabilityHead    | durabilityHead    | Indice                                                                               | A Toolhead made from this material has this durability            |
| miningSpeedHead   | miningSpeedHead   | flottant                                                                             | A Toolhead made from this material has this mining speed          |
| attackHead        | attackHead        | flottant                                                                             | A Toolhead made from this material has this attack Damage         |
| harvestLevelHead  | harvestLevelHead  | Indice                                                                               | A Toolhead made from this material has this harvest level         |
| durabilityHandle  | durabilityHandle  | Indice                                                                               | A Toolhandle made from this material has this durability          |
| modifierHandle    | modifierHandle    | flottant                                                                             | A Toolhandle made from this material has this durability modifier |
| durabilityExtra   | durabilityExtra   | Indice                                                                               | Extra toolparts made from this material have this base durability |
| arrowModifier     | arrowModifier     | flottant                                                                             | Arrows made from this material have this durability modifier      |
| arrowBonusAmmo    | arrowBonusAmmo    | Indice                                                                               | Arrow made from this material have this addiotional ammonition    |
| fletchingModifier | fletchingModifier | flottant                                                                             | Fletchungs made from this material have this durability modifier  |
| fletchingAccuracy | fletchingAccuracy | flottant                                                                             | Fletchungs made from this material provide this accuracy          |

## Méthodes

- boolean matches(ITICMaterial other); → returns if the given material is equal to `other`