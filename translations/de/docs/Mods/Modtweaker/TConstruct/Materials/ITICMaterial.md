# ITICMaterial

Aus dem Konstruktionswerkzeug eines Tinkers kann nicht mit [ContentTweakers IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)verwechselt werden.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren modtweaker.tconstruct.ITICMaterial;`

## Ein solches Objekt wird abgerufen

Du kannst ein ITICMaterial-Objekt mit dem [ITICMaterial Bracket Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/) abrufen:

```zenscript
val stone = <ticmat:stone>;
```

## Felder

Sie können folgende Felder bekommen/setzen:

| ZenGetter            | ZenSetter            | Rückgabe/Settertyp                                                                   | Beschreibung                                                               |
| -------------------- | -------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| getName              |                      | string                                                                               | Der Materialname                                                           |
| definition           |                      | [IMaterialDefinition](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | Die Definition des Materials                                               |
| langlebigkeitskopf   | langlebigkeitskopf   | int                                                                                  | Ein Werkzeugkopf aus diesem Material hat diese Haltbarkeit                 |
| miningSpeedHead      | miningSpeedHead      | float                                                                                | Ein Werkzeugkopf aus diesem Material hat diese Minengeschwindigkeit        |
| attackKopf           | attackKopf           | float                                                                                | Ein Werkzeugkopf aus diesem Material hat diesen Angriffsschaden            |
| harvestLevelHead     | harvestLevelHead     | int                                                                                  | Ein Werkzeugkopf aus diesem Material hat dieses Ernteniveau                |
| langlebiges Handle   | langlebiges Handle   | int                                                                                  | Ein Werkzeuggriff aus diesem Material hat diese Haltbarkeit                |
| modifierHandle       | modifierHandle       | float                                                                                | Ein Werkzeuggriff aus diesem Material hat diesen Haltbarkeitsmodifikator   |
| langlebiges Extra    | langlebiges Extra    | int                                                                                  | Zusätzliche Werkzeugteile aus diesem Material haben diese Grundhaltbarkeit |
| Pfeil-Modifizierer   | Pfeil-Modifizierer   | float                                                                                | Pfeile aus diesem Material haben diesen Haltbarkeitsmodifikator            |
| Pfeil-Munition       | Pfeil-Munition       | int                                                                                  | Pfeil aus diesem Material haben diese erbitterte Ammonition                |
| fletchingModifier    | fletchingModifier    | float                                                                                | Fletchungs aus diesem Material haben diesen Haltbarkeitsmodifikator        |
| flotchingGenauigkeit | flotchingGenauigkeit | float                                                                                | Fletchungs aus diesem Material liefern diese Genauigkeit                   |

## Methoden

- boolesche Matches(ITICMaterial other); → gibt zurück, wenn das angegebene Material dem `anderer entspricht`