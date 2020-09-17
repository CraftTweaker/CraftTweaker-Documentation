# Tinker-Stufen

Dieser Mod ist ein Addon für die [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Tinker Stages erlaubt es, Aspekte des Tinkers Construct mod in ein vom Autor des Modpacks erstelltes individuelles Progressionssystem zu setzen. Für weitere Informationen, schaue dir die Mod-Seite [hier an](https://minecraft.curseforge.com/projects/tinkerstages)

## Allgemeine Einschränkungen

Beschränkt die Herstellung von Werkzeugen auf eine Bühne. Wenn mehrere Stufen mit dieser Methode hinzugefügt werden, benötigt der Spieler mindestens eine von ihnen.

```zenscript
// mods.TinkerStages.addGeneralCraftingStage(Stage);
mods.TinkerStages.addGeneralCraftingStage("ein");
```

Begrenzt das Ersetzen von Teilen auf eine Bühne. Wenn mehrere Stufen mit dieser Methode hinzugefügt werden, benötigt der Spieler mindestens eine von ihnen.

```zenscript
// mods.TinkerStages.addGeneralPartReplacingStage(String stage);
mods.TinkerStages.addGeneralPartReplacingStage("one");
```

Beschränkt das Bauen von Teilen auf eine Bühne. Wenn mehrere Stufen mit dieser Methode hinzugefügt werden, benötigt der Spieler mindestens eine von ihnen.

```zenscript
// mods.TinkerStages.addGeneralPartBuildingStage(String stage);
mods.TinkerStages.addGeneralPartBuildingStage("one");
```

Begrenzt die Anwendung von Modifikatoren auf eine Bühne. Wenn mehrere Stufen mit dieser Methode hinzugefügt werden, benötigt der Spieler mindestens eine von ihnen.

```zenscript
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("one");
```

## Spezifische Einschränkungen

Verhindert die Herstellung eines bestimmten Werkzeugtyps an der Werkzeugstation. Zum Beispiel können Sie die Herstellung von Hämmern auf eine bestimmte Stufe beschränken.

```zenscript
// mods.TinkerStages.addToolTypeStage(String-Bühne, String ToolId);
mods.TinkerStages.addToolTypeStage(String "one", "tconstruct:pickaxe");
```

Verhindert die Verwendung eines Materials durch den Spieler. Inklusive des Handwerks, des Bauteilbaus und der Verwendung des Werkzeugs.

```zenscript
// mods.TinkerStages.addMaterialStage(String-Bühne, String-Material);
mods.TinkerStages.addMaterialStage("one", "stone");
```

Verhindert, dass ein bestimmter Modifikator auf ein Werkzeug angewendet oder verwendet wird.

```zenscript
// mods.TinkerStages.addModifierStage(String-Bühne, String-Modifikator);
mods.TinkerStages.addModifierStage("zwei", "mending_moss");
```

## Skript-Beispiel

```zenscript
//GENERALE RESTRICTIONS
//Verhindert alle Tools, sofern die Bühne nicht entsperrt ist.
mods.TinkerStages.addGeneralCraftingStage("eine");

//Verhindert allen Werkzeugwechsel, sofern die Bühne nicht unlcoked ist.
mods.TinkerStages.addGeneralPartReplacingStage("one");

//Prvents all part building unless the stage is unlocked.
mods.TinkerStages.addGeneralPartBuildingStage("one");

//Verhindert das Anwenden von Werkzeugmodifikatoren, sofern die Bühne nicht entsperrt ist.
mods.TinkerStages.addGeneralModifierStage("one");


//SPECIFIC RESTRICTIONS
//Verhindert das Herstellen von Spitzhacken, sofern die Bühne nicht entsperrt ist.
mods.TinkerStages.addToolTypeStage("two", "tconstruct:pickaxe");

//Verhindert die Verwendung des Materials. 
mods.TinkerStages.addMaterialStage("two", "stone");

//Verhindert, dass der Modifikator angewendet wird.
mods.TinkerStages.addModifierStage("zwei", "mending_moss");
```