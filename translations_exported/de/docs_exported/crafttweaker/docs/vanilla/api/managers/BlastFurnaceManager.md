# BlastFurnaceManager



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.BlastFurnaceManager
```

## Implementierte Schnittstellen
BlastFurnaceManager implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methoden
### addJSONRecipe

Fügt ein Rezept basierend auf einer angegebenen IData. Die zur Verfügung gestellten IData sollte ein DataPack JSON darstellen, dies ermöglicht Ihnen effektiv Rezepte für jedes DataPack zu registrieren, das IRecipeType Systeme unterstützt.

```zenscript
blastFurnace.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
blastFurnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience :0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Beschreibung                             |
| --------- | ------------------------------------------------------ | ---------------------------------------- |
| name      | String                                                 | Name des Rezepts                         |
| daten     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Daten, die die json-Datei repräsentieren |


### addRecipe

Fügt ein Rezept basierend auf angegebenen Parametern hinzu.

```zenscript
blastFurnace.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as craftweaker.api.item.IIngredient, xp as float, cookTime as int);
blastFurnace.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parameter | Type                                                                | Beschreibung                    |
| --------- | ------------------------------------------------------------------- | ------------------------------- |
| name      | String                                                              | Name des neuen Rezepts          |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack-Ausgabe des Rezepts  |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Ingrediente Eingabe des Rezepts |
| xp        | float                                                               | wie viel xp der Spieler bekommt |
| kochzeit  | int                                                                 | wie lange es dauert zu kochen   |


### getRecipeByName

Rückgabetyp: [craftweaker.api.recipes.WrapperRezept](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
blastFurnace.getRecipeByName(Name als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| name      | String | Keine Beschreibung angegeben |


### getRecipesByAusgabe

Retourentyp: Liste&lt;[crafttweaker.api.recipes.WrapperRezept](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
blastFurnace.getRecipesByOutput(Ausgabe als crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Beschreibung                 |
| --------- | ------------------------------------------------------------------- | ---------------------------- |
| ausgeben  | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Keine Beschreibung angegeben |


### alle entfernen

Alle Rezepte in dieser Registry entfernen

```zenscript
blastFurnace.removeAll();
```

### entfernenByModid

Entferne Rezept basierend auf Registry Name Modid

```zenscript
blastFurnace.removeByModid(modid as String);
blastFurnace.removeByModid("minecraft");
```

| Parameter | Type   | Beschreibung                      |
| --------- | ------ | --------------------------------- |
| modo      | String | modid der zu entfernenden Rezepte |



Entfernen Sie Rezept basierend auf Registry-Name Modid mit einer zusätzlichen Ausschluss-Prüfung, so dass Sie die ganze Mod neben einigen angegebenen entfernt können.

```zenscript
blastFurnace.removeByModid(modid as String, except as crafttweaker.api.recipeFilter);
blastFurnace.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter    | Type                                                                     | Beschreibung                      |
| ------------ | ------------------------------------------------------------------------ | --------------------------------- |
| modo         | String                                                                   | modid der zu entfernenden Rezepte |
| ausschließen | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | zu entfernende Rezepte.           |


### removeByName

Rezept basierend auf Registry-Namen entfernen

```zenscript
blastFurnace.removeByName(Name als String);
blastFurnace.removeByName("minecraft:furnace");
```

| Parameter | Type   | Beschreibung                            |
| --------- | ------ | --------------------------------------- |
| name      | String | Registry-Name des zu löschenden Rezepts |


### removeByRegex

Rezept basierend auf Regex entfernen

```zenscript
blastFurnace.removeByRegex(regex als String);
blastFurnace.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Beschreibung             |
| --------- | ------ | ------------------------ |
| regex     | String | regex zum übereinstimmen |


### Rezept entfernen

Entferne ein Rezept basierend auf seiner Ausgabe.

```zenscript
blastFurnace.removeRecipe(Ausgabe als crafttweaker.api.item.IItemStack);
blastFurnace.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Beschreibung        |
| --------- | ----------------------------------------------------------------- | ------------------- |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Ausgabe des Rezepts |



Entfernt ein Rezept basierend auf Ausgabe und Eingabe.

```zenscript
blastFurnace.removeRecipe(Ausgabe als crafttweaker.api.item.IItemStack, Eingabe als crafttweaker.api.item.IIngredient);
blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parameter | Type                                                                | Beschreibung                             |
| --------- | ------------------------------------------------------------------- | ---------------------------------------- |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack Ausgabe des Rezeptes.         |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Ingredient des zu entfernenden Rezeptes. |



## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |

