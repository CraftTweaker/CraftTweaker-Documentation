# IRecipeManager

Standardschnittstelle für Registry-basierte Handler, da sie alle Rezepte von ResourceLocation entfernen können.

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.registries.IRecipeManager
```

## Implementierte Schnittstellen
IRecipeManager implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### addJSONRecipe

Fügt ein Rezept basierend auf einer angegebenen IData. Die zur Verfügung gestellten IData sollte ein DataPack JSON darstellen, dies ermöglicht Ihnen effektiv Rezepte für jedes DataPack zu registrieren, das IRecipeType Systeme unterstützt.

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience :0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Beschreibung                             |
| --------- | ------------------------------------------------------ | ---------------------------------------- |
| name      | String                                                 | Name des Rezepts                         |
| daten     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Daten, die die json-Datei repräsentieren |


### alle entfernen

Alle Rezepte in dieser Registry entfernen

```zenscript
craftingTable.removeAll();
```

### entfernenByModid

Entferne Rezept basierend auf Registry Name Modid

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| Parameter | Type   | Beschreibung                      |
| --------- | ------ | --------------------------------- |
| modo      | String | modid der zu entfernenden Rezepte |


### removeByName

Rezept basierend auf Registry-Namen entfernen

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Parameter | Type   | Beschreibung                            |
| --------- | ------ | --------------------------------------- |
| name      | String | Registry-Name des zu löschenden Rezepts |


### removeByRegex

Rezept basierend auf Regex entfernen

```zenscript
craftingTable.removeByRegex(regex als String);
craftingTable.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Beschreibung             |
| --------- | ------ | ------------------------ |
| regex     | String | regex zum übereinstimmen |


### Rezept entfernen

Entferne ein Rezept basierend auf seiner Ausgabe.

```zenscript
craftingTable.removeRecipe(Ausgabe als crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Beschreibung        |
| --------- | ----------------------------------------------------------------- | ------------------- |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Ausgabe des Rezepts |



## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |

