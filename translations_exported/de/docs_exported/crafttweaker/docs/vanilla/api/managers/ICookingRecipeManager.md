# ICookingRecipeManager

Standardschnittstelle für Registry-basierte Handler, da sie alle Rezepte von ResourceLocation entfernen können.

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.registries.ICookingRecipeManager
```

## Implementierte Schnittstellen
ICookingRecipeManager implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methoden
### addJSONRecipe

Fügt ein Rezept basierend auf einer angegebenen IData. Die zur Verfügung gestellten IData sollte ein DataPack JSON darstellen, dies ermöglicht Ihnen effektiv Rezepte für jedes DataPack zu registrieren, das IRecipeType Systeme unterstützt.

```zenscript
furnace.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
furnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience e:0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Beschreibung                             |
| --------- | ------------------------------------------------------ | ---------------------------------------- |
| name      | String                                                 | Name des Rezepts                         |
| daten     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Daten, die die json-Datei repräsentieren |


### addRecipe

Fügt ein Rezept basierend auf angegebenen Parametern hinzu.

```zenscript
furnace.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
furnace.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
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
furnace.getRecipeByName(Name als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| name      | String | Keine Beschreibung angegeben |


### getRecipesByAusgabe

Retourentyp: Liste&lt;[crafttweaker.api.recipes.WrapperRezept](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
furnace.getRecipesByOutput(Ausgabe als crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Beschreibung                 |
| --------- | ------------------------------------------------------------------- | ---------------------------- |
| ausgeben  | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Keine Beschreibung angegeben |


### alle entfernen

Alle Rezepte in dieser Registry entfernen

```zenscript
oface.removeAll();
```

### entfernenByModid

Entferne Rezept basierend auf Registry Name Modid

```zenscript
furnace.removeByModid(modid as String);
furnace.removeByModid("minecraft");
```

| Parameter | Type   | Beschreibung                      |
| --------- | ------ | --------------------------------- |
| modo      | String | modid der zu entfernenden Rezepte |



Entfernen Sie Rezept basierend auf Registry-Name Modid mit einer zusätzlichen Ausschluss-Prüfung, so dass Sie die ganze Mod neben einigen angegebenen entfernt können.

```zenscript
furnace.removeByModid(modid as String, except as crafttweaker.api.recipeFilter);
furnace.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter    | Type                                                                     | Beschreibung                      |
| ------------ | ------------------------------------------------------------------------ | --------------------------------- |
| modo         | String                                                                   | modid der zu entfernenden Rezepte |
| ausschließen | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | zu entfernende Rezepte.           |


### removeByName

Rezept basierend auf Registry-Namen entfernen

```zenscript
furnace.removeByName(Name als String);
furnace.removeByName("minecraft:furnace");
```

| Parameter | Type   | Beschreibung                            |
| --------- | ------ | --------------------------------------- |
| name      | String | Registry-Name des zu löschenden Rezepts |


### removeByRegex

Rezept basierend auf Regex entfernen

```zenscript
furnace.removeByRegex(regex als String);
furnace.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Beschreibung             |
| --------- | ------ | ------------------------ |
| regex     | String | regex zum übereinstimmen |


### Rezept entfernen

Entferne ein Rezept basierend auf seiner Ausgabe.

```zenscript
furnace.removeRecipe(Ausgabe als crafttweaker.api.item.IItemStack);
furnace.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Beschreibung        |
| --------- | ----------------------------------------------------------------- | ------------------- |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Ausgabe des Rezepts |



Entfernt ein Rezept basierend auf Ausgabe und Eingabe.

```zenscript
furnace.removeRecipe(Ausgabe als crafttweaker.api.item.IItemStack, Eingabe als crafttweaker.api.item.IIngredient);
furnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parameter | Type                                                                | Beschreibung                             |
| --------- | ------------------------------------------------------------------- | ---------------------------------------- |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack Ausgabe des Rezeptes.         |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Ingredient des zu entfernenden Rezeptes. |



## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |

