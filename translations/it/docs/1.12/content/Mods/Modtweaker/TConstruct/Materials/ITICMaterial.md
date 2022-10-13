# ITICMaterial

A Tinkers' Construct IMaterial (not to be confused with [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)) is what a Tinker's construct tool can be made of.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.tconstruct.ITICMaterial;`

## Retrieving such an object
You can retrieve an ITICMaterial object using the [ITICMaterial Bracket Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/):
```zenscript
val stone = <ticmat:stone>;
```

## Fields

You can get/set the following fields:

| ZenGetter         | ZenSetter         | Return/Setter Type                                                                   | Descrizione                                                       |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| getName           |                   | string                                                                               | The material's name                                               |
| definition        |                   | [IMaterialDefinition](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | The material's definition                                         |
| durabilityHead    | durabilityHead    | int                                                                                  | A toolhead made from this material has this durability            |
| miningSpeedHead   | miningSpeedHead   | float                                                                                | A toolhead made from this material has this mining speed          |
| attackHead        | attackHead        | float                                                                                | A toolhead made from this material has this attack damage         |
| harvestLevelHead  | harvestLevelHead  | int                                                                                  | A toolhead made from this material has this harvest level         |
| durabilityHandle  | durabilityHandle  | int                                                                                  | A toolhandle made from this material has this durability          |
| modifierHandle    | modifierHandle    | float                                                                                | A toolhandle made from this material has this durability modifier |
| durabilityExtra   | durabilityExtra   | int                                                                                  | Extra toolparts made from this material have this base durability |
| arrowModifier     | arrowModifier     | float                                                                                | Arrows made from this material have this durability modifier      |
| arrowBonusAmmo    | arrowBonusAmmo    | int                                                                                  | Arrows made from this material have this additional ammunition    |
| fletchingModifier | fletchingModifier | float                                                                                | Fletchings made from this material have this durability modifier  |
| fletchingAccuracy | fletchingAccuracy | float                                                                                | Fletchings made from this material provide this accuracy          |
| bowDrawSpeed      | bowDrawSpeed      | float                                                                                | Bows made from this material have this draw speed                 |
| bowRange          | bowRange          | float                                                                                | Bows made from this material have this range                      |
| bonusDamage       | bonusDamage       | float                                                                                | Bows made from this material have this additional damage          |
| bowStringModifier | bowStringModifier | float                                                                                | Bow strings made from this material have this durability modifier |

## Metodi

- `boolean matches(ITICMaterial other);` → returns if the given material is equal to `other`
- `boolean hasStats(string statName);` → returns if the material has the stat named `statName`
- `boolean hasHeadStats();` → returns if the material has head stats
- `boolean hasHandleStats();` → returns if the material has handle stats
- `boolean hasExtraStats();` → returns if the material has extra stats
- `boolean hasArrowStats();` → returns if the material has arrow stats
- `boolean hasFletchingStats();` → returns if the material has fletching stats
- `boolean hasBowStats();` → returns if the material has bow stats
- `boolean hasBowStringStats();` → returns if the material has bow string stats
