# MixRecipeBuilder

Ein `MixRecipeBuilder` wird verwendet um das Mixrezept von High Oven dem Spiel hinzuzufügen.

## Dieses Paket importieren

Besser sicher sein als entschuldigen und das Paket importieren

```zenscript
importieren mods.tcomplement.highoven.MixRecipeBuilder;
```

## Einen `MixRecipeBuilder erhalten`

Der `mods.tcomplement.highoven.HighOven` Handler kann Ihnen einen `MixRecipeBuilder` geben

```zenscript
// HighOven.newMixRecipe(ILiquidStack Output, ILiquidStack Input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `Ausgabe` ist die zu produzierende Flüssigkeit und Menge
+ `Eingabe` ist die zu verzehrende Flüssigkeit und Menge
+ `Temperatur` ist die minimale Temperatur des hohen Ofens, damit das Rezept funktioniert, in Kelvin

## Attribute

| Attribut    | ZenGetter     | ZenSetter            | Type                       | Info                                                                               |
| ----------- | ------------- | -------------------- | -------------------------- | ---------------------------------------------------------------------------------- |
| ausgeben    | `ausgeben`    | :heavy_check_mark: | `ILiquidStack`             | die Ausgabe vom Mixrezept                                                          |
| input       | `input`       | :heavy_check_mark: | `ILiquidStack`             | die Eingabe des Mixrezeptes                                                        |
| Temperatur  | `temp`        | :heavy_check_mark: | `int`                      | die Mindesttemperatur in Kelvin                                                    |
| oxidierer   | `oxidierer`   | :x:                  | `Liste<IIngredient>` | die gültigen Oxidatoren für das Rezept zum Zeitpunkt des Zugriffs auf das Attribut |
| verkleinert | `verkleinert` | :x:                  | `Liste<IIngredient>` | die gültigen Reduzierer für das Rezept zum Zeitpunkt des Zugriffs auf das Attribut |
| reiniger    | `reiniger`    | :x:                  | `Liste<IIngredient>` | die gültigen Reiniger für das Rezept zum Zeitpunkt des Zugriffs auf das Attribut   |


Methods

| Methode                                                   | Rückgabetyp        | Info                                                                                                   |
| --------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| `getOxidizerChance(IIngredientoxidierer)`                 | `int`              | Die Chance in Prozent, dass der Oxidator konsumiert wird, oder `-1` wenn der Oxidator nicht gültig ist |
| `getReducerChance(IZutrittsreduzierung)`                  | `int`              | Die Chance in Prozent, dass der Reduzierer konsumiert wird, oder `-1` wenn der Reduzierer ungültig ist |
| `getOxidizerChance(IZutrittsreiniger)`                    | `int`              | Die Chance in Prozent, dass der Reiniger konsumiert wird, oder `-1` wenn der Oxidator nicht gültig ist |
| `addOxidizer(IIngredientoxidizer, Int-KonsumeChance)`     | `MixRecipeBuilder` | Füge den Oxidizer mit der angegebenen Konsumchance hinzu (in Prozent)                                  |
| `addReducer(IIngredienten-Reduzierer, Int-KonsumeChance)` | `MixRecipeBuilder` | Füge den Reduzierer mit der angegebenen Konsumchance hinzu (in Prozent)                                |
| `addPurifier(IZutrittsreiniger, Int-Konsum)`              | `MixRecipeBuilder` | Füge den Reiniger mit der angegebenen Konsumchance hinzu (in Prozent)                                  |
| `entfernen-Oxidizer(Igredientoxidierer)`                  | `MixRecipeBuilder` | Entferne den Oxidator, wenn er hinzugefügt wurde                                                       |
| `entfernenReduzierung(IZutrittsreduzierung)`              | `MixRecipeBuilder` | Entfernen Sie den Reduzierer, wenn er hinzugefügt wurde                                                |
| `removePurifier(IZutrittsreiniger)`                       | `MixRecipeBuilder` | Entfernen Sie den Reiniger wenn er hinzugefügt wurde                                                   |
| `removeAllOxidizer()`                                     | `MixRecipeBuilder` | Alle Oxidatoren entfernen                                                                              |
| `removeAllReducer()`                                      | `MixRecipeBuilder` | Alle Reduktionen entfernen                                                                             |
| `removeAllPurifier()`                                     | `MixRecipeBuilder` | Alle Reiniger entfernen                                                                                |
| `register()`                                              |                    | Fügen Sie ein neues Mixrezept mit den Daten hinzu, die derzeit im MixRecipeBuilder hinzugefügt werden  |


Alle Methoden, die einen `MixRecipeBuilder` zurückgeben, geben dieselbe Instanz zurück, auf der sie aufgerufen wurden. Dies erlaubt Methodenketten.

How to use Once you have a `MixRecipeBuilder`, add the oxidizers, reducers and purifiers for your new recipe to the builder, then `register()` a recipe. Ein `MixRecipeBuilder` kann verwendet werden, um so viele Rezepte zu registrieren, wie Sie möchten: jedes Mal, wenn Sie `register() aufrufen,`, es fügt ein neues Rezept mit den Informationen hinzu, die es hat, wenn Sie die Funktion aufrufen. Dies macht es einfach, Rezepte Varianten oder Rezepte hinzuzufügen, indem schrittweise neue Additive hinzugefügt und/oder die Ertragssteigerung erhöht wird.

Die Additive unterstützen alle Arten von `IIngredient`: `IOreDictEntry`, `IItemStack` und deren Transformationen, Flüssigcontainer usw.

Warning Don't forget to **register** your recipe, the `MixRecipeBuilder` is just a builder to specify all the parts of the recipe !