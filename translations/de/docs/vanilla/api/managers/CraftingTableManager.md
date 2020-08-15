# CraftingTableManager



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.CraftingTableManager
```

## Implementierte Schnittstellen
CraftingTableManager implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

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


### ergänzte Form

Fügt dem Herstellungstisch ein geformtes Rezept hinzu

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as craftweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamant");});
```

| Parameter       | Type                                                                         | Beschreibung                                                                                                     | IsOptionale | Standardwert |
| --------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| rezeppeName     | String                                                                       | Name des hinzuzufügenden Rezeptes.                                                                               | false       | null         |
| ausgeben        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                                | false       | null         |
| zutaten         | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | array eines Arrays von IIngredient für Eingaben                                                                  | false       | null         |
| rezeppeFunktion | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix für erweiterte Bedingungen | true        | null         |


### addShapedMirrored

Fügt dem Fertigungstisch ein gespiegeltes Rezept hinzu

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamant");});
```

| Parameter       | Type                                                                         | Beschreibung                                                                                                     | IsOptionale | Standardwert |
| --------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| rezeppeName     | String                                                                       | Name des hinzuzufügenden Rezeptes.                                                                               | false       | null         |
| ausgeben        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                                | false       | null         |
| zutaten         | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | array eines Arrays von IIngredient für Eingaben                                                                  | false       | null         |
| rezeppeFunktion | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix für erweiterte Bedingungen | true        | null         |


### addShapeless

Fügt dem Herstellungstisch ein formloses Rezept hinzu

```zenscript
craftingTable.addShapeless(recipeName as String, Ausgabe als crafttweaker.api.item.IItemStack, Zutaten als crafttweaker.api.item.IIngredient[], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamant");});
```

| Parameter       | Type                                                                        | Beschreibung                                                                                                    | IsOptionale | Standardwert |
| --------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| rezeppeName     | String                                                                      | Name des hinzuzufügenden Rezeptes.                                                                              | false       | null         |
| ausgeben        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | output IItemStack                                                                                               | false       | null         |
| zutaten         | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]       | array von IIngredient für Eingaben                                                                              | false       | null         |
| rezeppeFunktion | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray für erweiterte Bedingungen | true        | null         |


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



