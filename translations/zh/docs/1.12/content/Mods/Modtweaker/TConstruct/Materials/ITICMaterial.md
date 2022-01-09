# ITICMaterial

A Tinkers' Construct IMaterial (not to be confused with [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)) is what a Tinker's construct tool can be made of.

## 导入相关包
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.tconstruct.ITICMaterial;`

## Retrieving such an object
You can retrieve an ITICMaterial object using the [ITICMaterial Bracket Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/):
```zenscript
val stone = <ticmat:stone>;
```

## Fields

You can get/set the following fields:

| ZenGetter         | ZenSetter         | Return/Setter Type                                                                   | 描述                                                                |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| getName           |                   | string                                                                               | The material's name                                               |
| definition        |                   | [IMaterialDefinition](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | The material's definition                                         |
| durabilityHead    | durabilityHead    | int                                                                                  | A toolhead made from this material has this durability            |
| miningSpeedHead   | miningSpeedHead   | 浮点数                                                                                  | A toolhead made from this material has this mining speed          |
| attackHead        | attackHead        | 浮点数                                                                                  | A toolhead made from this material has this attack damage         |
| harvestLevelHead  | harvestLevelHead  | int                                                                                  | A toolhead made from this material has this harvest level         |
| durabilityHandle  | durabilityHandle  | int                                                                                  | A toolhandle made from this material has this durability          |
| modifierHandle    | modifierHandle    | 浮点数                                                                                  | A toolhandle made from this material has this durability modifier |
| durabilityExtra   | durabilityExtra   | int                                                                                  | Extra toolparts made from this material have this base durability |
| arrowModifier     | arrowModifier     | 浮点数                                                                                  | Arrows made from this material have this durability modifier      |
| arrowBonusAmmo    | arrowBonusAmmo    | int                                                                                  | Arrows made from this material have this additional ammunition    |
| fletchingModifier | fletchingModifier | 浮点数                                                                                  | Fletchings made from this material have this durability modifier  |
| fletchingAccuracy | fletchingAccuracy | 浮点数                                                                                  | Fletchings made from this material provide this accuracy          |
| bowDrawSpeed      | bowDrawSpeed      | 浮点数                                                                                  | Bows made from this material have this draw speed                 |
| bowRange          | bowRange          | 浮点数                                                                                  | Bows made from this material have this range                      |
| bonusDamage       | bonusDamage       | 浮点数                                                                                  | Bows made from this material have this additional damage          |
| bowStringModifier | bowStringModifier | 浮点数                                                                                  | Bow strings made from this material have this durability modifier |

## 使用方式

- `boolean matches(ITICMaterial other);` → returns if the given material is equal to `other`
- `boolean hasStats(string statName);` → returns if the material has the stat named `statName`
- `boolean hasHeadStats();` → returns if the material has head stats
- `boolean hasHandleStats();` → returns if the material has handle stats
- `boolean hasExtraStats();` → returns if the material has extra stats
- `boolean hasArrowStats();` → returns if the material has arrow stats
- `boolean hasFletchingStats();` → returns if the material has fletching stats
- `boolean hasBowStats();` → returns if the material has bow stats
- `boolean hasBowStringStats();` → returns if the material has bow string stats
