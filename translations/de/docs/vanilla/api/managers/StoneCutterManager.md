# Steinschnitt Manager



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.StoneCutterManager
```

## Implementierte Schnittstellen
StoneCutterManager implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methoden
### addJSONRecipe

Fügt ein Rezept basierend auf einer angegebenen IData. Die zur Verfügung gestellten IData sollte ein DataPack JSON darstellen, dies ermöglicht Ihnen effektiv Rezepte für jedes DataPack zu registrieren, das IRecipeType Systeme unterstützt.

```zenscript
stoneCutter.addJSONRecipe(Name as String, data as crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Beschreibung                             |
| --------- | ------------------------------------------------------ | ---------------------------------------- |
| name      | String                                                 | Name des Rezepts                         |
| daten     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Daten, die die json-Datei repräsentieren |


### addRecipe

Fügt dem Steinschneider ein Rezept hinzu

```zenscript
stoneCutter.addRecipe(recipeName als String, Ausgabe als crafttweaker.api.item.IItemStack, Eingabe als crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Parameter   | Type                                                                | Beschreibung        |
| ----------- | ------------------------------------------------------------------- | ------------------- |
| rezeppeName | String                                                              | Name des Rezepts    |
| ausgeben    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output IItemStack   |
| input       | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Eingabe-IIngredient |


### alle entfernen

Alle Rezepte in dieser Registry entfernen

```zenscript
stoneCutter.removeAll();
```

### entfernenByModid

Entferne Rezept basierend auf Registry Name Modid

```zenscript
stoneCutter.removeByModid(modid as String);
stoneCutter.removeByModid("minecraft");
```

| Parameter | Type   | Beschreibung                      |
| --------- | ------ | --------------------------------- |
| modo      | String | modid der zu entfernenden Rezepte |


### removeByName

Rezept basierend auf Registry-Namen entfernen

```zenscript
stoneCutter.removeByName(Name als String);
stoneCutter.removeByName("minecraft:furnace");
```

| Parameter | Type   | Beschreibung                            |
| --------- | ------ | --------------------------------------- |
| name      | String | Registry-Name des zu löschenden Rezepts |


### removeByRegex

Rezept basierend auf Regex entfernen

```zenscript
stoneCutter.removeByRegex(regex als String);
stoneCutter.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Beschreibung             |
| --------- | ------ | ------------------------ |
| regex     | String | regex zum übereinstimmen |


### Rezept entfernen

Entferne ein Rezept basierend auf seiner Ausgabe.

```zenscript
stoneCutter.removeRecipe(Ausgabe als crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Beschreibung        |
| --------- | ----------------------------------------------------------------- | ------------------- |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Ausgabe des Rezepts |



## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |

