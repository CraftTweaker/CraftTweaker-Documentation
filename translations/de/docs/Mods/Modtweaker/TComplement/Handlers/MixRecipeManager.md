# MixRecipeManager

Ein `MixRecipeManager` wird verwendet, um das vorhandene Hochofen-Mischrezept zu ändern, einschließlich derjenigen, die von ModTweaker hinzugefügt wurden.

## Dieses Paket importieren

Besser sicher sein als entschuldigen und das Paket importieren

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;
```

## Erhalte `MixRecipeManager`

Der `HighOven` Handler kann Ihnen einen `MixRecipeManager` geben:

```zenscript
// HighOven.manageMixRecipe(ILiquidStack-Ausgabe, ILiquidStack-Eingang);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

+ `Ausgabe` ist die Ausgabe des Mixrezepts zum Ändern
+ `Eingabe` (Optional) ist die Eingabe des zu ändernden Mixrezepts. Wenn `null` oder nicht angegeben, wird jedes Mischrezept, das die Ausgabe erzeugt, beeinflusst sein

## Additive entfernen

Sie können einen `MixRecipeManager` verwenden, um bestimmte Additive aus dem betroffenen Mixrezept zu entfernen. Seien Sie vorsichtig, denn Umzüge werden immer erzwungen. Das bedeutet, dass jegliches Hinzufügen eines Zusatzstoffs, der Sie entfernen würde, verhindert wird.

Dies kann überraschende Ergebnisse mit oredict Einträgen haben. Since oredict entries are added as-is to the mix recipe (it is not expanded to a list of `IItemStack` but looked for when checking the recipes), removing an item will block all oredict entries it belongs to.

Allgemein gesagt, wenn Sie etwas Konkretes entfernen (sagen wir, ein `IItemStack` mit Transformatoren), aber ein (einzigartiges) additiver Zusatz würde es erlauben, was du entfernt hast plus einige andere Dinge (sagen wir, eine generischere `IItemStack`), wird der gesamte Zusatz abgebrochen, so dass andere Dinge nicht vom Hochöfen akzeptiert werden.

| Methode                                      | Info                                                               |
| -------------------------------------------- | ------------------------------------------------------------------ |
| `entfernen-Oxidizer(Igredientoxidierer)`     | Oxidizer vorausschauend aus dem betroffenen Mixrezept entfernen    |
| `entfernenReduzierung(IZutrittsreduzierung)` | Entferne den Reduzierer vorab aus dem betroffenen Mixrezept        |
| `removePurifier(IZutrittsreduzierer)`        | Entfernt den Reiniger vorausschauend aus dem betroffenen Mixrezept |


Alle diese Methoden geben die gleiche Instanz zurück, in der sie als eine genannt wurden, was Methodenketten erlaubt.

## Hinzufügen von Zusatzstoffen zum bestehenden Mixrezept

Sie können Additive zu allen Mixrezepten hinzufügen, die vom `MixRecipeManager` abgespielt wurden. Seien Sie vorsichtig, da Umzüge Priorität haben (siehe oben).

| Methode                                                            | Info                                                                    |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `addOxidizer(@NotNull IIngredientoxidizer, IntrusteChance)`        | Füge den Oxidizer mit der angegebenen Konsumchance hinzu (in Prozent)   |
| `addReducer(@NotNull IIngredienten-Reduzierer, Int-KonsumeChance)` | Füge den Reduzierer mit der angegebenen Konsumchance hinzu (in Prozent) |
| `addPurifier(@NotNull IIngredient purifier, int consummeChance)`   | Füge den Reiniger mit der angegebenen Konsumchance hinzu (in Prozent)   |


Alle diese Methoden geben die gleiche Instanz zurück, in der sie als eine genannt wurden, was Methodenketten erlaubt.

## Warnung

Erstelle einen `MixRecipeManager` der keine Rezepte entspricht, wird keine Warnung auslösen, da es keine Möglichkeit gibt zu sagen, welche Mischrezepte hinzugefügt werden (Skript-Parsing passiert vor der Mix-Rezept-Registrierung). Wenn Sie `MixRecipeManager` sind hat keinen Effekt, überprüfen Sie zuerst, ob es einem Mixrezept entspricht