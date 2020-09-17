# ZenStager

Diese Klasse ist der Haupthandler für das Erstellen neuer [Stages](/Mods/GameStages/ZenStages/Stage/), die du dann bauen kannst, um dem Spiel zu sagen, was du inszeniert hast. Es kommt vorab geladen mit Methoden, um eine einfache Integration mit anderen Mods mit der [GameStages API](https://minecraft.curseforge.com/projects/game-stages) zu ermöglichen, zusammen mit einigen benutzerdefinierten Tweaks, um das Leben von Modpack-Herstellern zu vereinfachen.

Weitere Informationen und die aktuellste Quelle für die Klasse [finden Sie hier](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java).

## Dieses Paket importieren

ZenStager : `importiere mods.zenstages.ZenStager;`

Stufe *(Empfohlen auch zu importieren)* : `mods.zenstages.Stage;`

## Methoden

### Erstelle Stufe

Neue [Phase erstellen und zurückgeben](/Mods/GameStages/ZenStages/Stage/)

```zenscript
// mods.zenstages.ZenStager.initStage(string stageName);
var TestStage = ZenStager.initStage("test");
```

Wenn Sie Ihre Stage erstellt haben, sollten Sie dann eine statische /globale Datei erstellen, die das folgende enthält, so dass Sie auf die Stage in anderen Skripten/Klassen zugreifen können.

**Hinweis: Haben Sie nicht die `initStage` und die `statische` Erstellung im selben Skript. Aufgrund von Einschränkungen und anderen Problemen wird die `initStage` jedes Mal aufgerufen, wenn Sie ein statisches Mitglied referenzieren. Also halte die init und die statische Erstellung getrennt**

```zenscript
import mods.zenstages.ZenStager;

statische TestStage = ZenStager.getStage("test"); // Der Name ist der, den Sie gerade erstellt haben.
```

### Hilfsmethoden

Holen Sie sich eine [Stufe](/Mods/GameStages/ZenStages/Stage/) *(liefert Null zurück, falls nicht gefunden)*

```zenscript
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStageGet = ZenStager.getStage("test");
```

Holen Sie sich eine Karte der [Stufen](/Mods/GameStages/ZenStages/Stage/) die erstellt werden.

```zenscript
// mods.zenstages.ZenStager.getStageMap();
var StageMap als Stufe[string] = ZenStager.getStageMap();
```

Holen Sie sich eine Karte der inszenierten Flüssigkeiten.

```zenscript
// mods.zenstages.ZenStager.getStagedLiquids();
var LiquidMap as ILiquidStack[][string] = ZenStager.getStagedLiquids();
```

### Staging-Methoden

Paketnamen hinzufügen. Dazu muss [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) installiert sein. Dies folgt der gleichen Logik wie [hier](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addPackage(string packageName, Stage[] Etappen);
ZenStager.addPackage("appeng", [TestStage]);
```

Paketnamen hinzufügen. Dazu muss [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) installiert sein. Dies folgt der gleichen Logik wie [hier](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addContainer(string packageName, Stage[] Etappen);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```

Holen Sie sich die Phase der Zutaten, falls sie inszeniert wird, wird die [Stufe](/Mods/GameStages/ZenStages/Stage/) oder Null zurückgeben, wenn sie nicht gefunden wird.

```zenscript
// mods.zenstages.ZenStager.getIngredientStage(IIngredientStage);
var StickStage as Stage = ZenStager.getIngredientStage(<minecraft:stick>);
```

Bekomme den liquiden Stapel Stapel wenn er inszeniert wird die [Stufe](/Mods/GameStages/ZenStages/Stage/) oder null wenn nicht gefunden.

```zenscript
// mods.zenstages.ZenStager.getLiquidStage(ILiquidStack liquidStack);
var StickStage as Stage = ZenStager.getLiquidStage(<liquid:water>);
```

Hole dir die Rezeptnamenstufe an, falls es inszeniert wird die [Stufe](/Mods/GameStages/ZenStages/Stage/) oder null wenn sie nicht gefunden wird. Benötigt [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) um installiert zu sein.

```zenscript
// mods.zenstages.ZenStager.getRecipeNameStage(string recipeName);
var RecipeNameStage as Stage = ZenStager.getRecipeNameStage("minecraft:boat");
```

Holen Sie sich die Containerstufe, falls sie inszeniert wird, wird die [Stufe](/Mods/GameStages/ZenStages/Stage/) oder Null zurückgeben, wenn sie nicht gefunden wird. Benötigt [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) um installiert zu sein.

```zenscript
// mods.zenstages.ZenStager.getContainerStages(string containerName);
var ContainerStage as Stage = ZenStager.getContainerStages("my.awesome.container");
```

Holen Sie sich die Paketphase, falls sie inszeniert wird, wird die [Stufe](/Mods/GameStages/ZenStages/Stage/) oder Null zurückgeben, wenn sie nicht gefunden wird. Benötigt [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) um installiert zu sein.

```zenscript
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage als Stage = ZenStager.getPackageStages("appeng");
```

Holen Sie sich die Dimensionsphase, wenn sie inszeniert wird, wird die [Stufe](/Mods/GameStages/ZenStages/Stage/) oder Null zurückgeben, wenn sie nicht gefunden wird. Benötigt [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) um installiert zu sein.

```zenscript
// mods.zenstages.ZenStager.getDimensionStage(int dimId);
var DimStage as Stage = ZenStager.getDimensionStage(-1);
```

Hol dir die Mob-Bühne, wenn sie inszeniert wird die [Stufe](/Mods/GameStages/ZenStages/Stage/) oder null wenn sie nicht gefunden wird. Benötigt [MobStages](/Mods/GameStages/MobStages/MobStages/) um installiert zu sein.

```zenscript
// mods.zenstages.ZenStager.getMobStage(string mobName);
var MobStage as Stage = ZenStager.getMobStage("minecraft:skeleton");
```

Hol dir die TiC Material Bühne, wenn sie inszeniert wird die [Stufe](/Mods/GameStages/ZenStages/Stage/) oder null wenn sie nicht gefunden wird. Benötigt die Installation von [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// mods.zenstages.ZenStager.getTiCMaterialStage(string material);
var MobStage as Stage = ZenStager.getTiCMaterialStage("bronze");
```

### Prüfen, ob etwas im Stage ist

Unterstützte Typen:

- behälter
- maße
- zutat
- mob
- mod
- mulitblock
- erz
- packung
- rezeppenname
- tinker

```zenscript
// mods.zenstages.ZenStager.isStaged(string type, string value);
// mods.zenstages.ZenStager.isStaged(string type, int value);
// mods.zenstages.ZenStager.isStaged(string type, IIngredient value);
ZenStager.isStaged("ingredient", <minecraft:stick>);
ZenStager.isStaged("container", "my. wesome.container");
ZenStager.isStaged("mob", "minecraft:skeleton");
ZenStager.isStaged("tinker", "bronze");
ZenStager.isStaged("tinker", "tconstruct:crossbow");
ZenStager.isStaged("recipename", "minecraft:boat");
ZenStager.isStaged("dimension", -1);
```

### Debuggen

Wenn Sie diese Methode aufrufen, wird die Mod-Prüfung über die [Phasen](/Mods/GameStages/ZenStages/Stage/) die Sie erstellt haben und was Sie inszeniert haben. To see if you have mistakenly *staged* something more than once. Wenn irgendwelche gefunden werden, werden sie in der Datei `crafttweaker.log` geloggt. Erzählen Sie, was dupliziert wird und in welchen Stufen es sich befindet. Dies ist ein ideales Methoden/Werkzeug, um Updates zu einem Modpack oder einfach nur allgemeine Entwicklung eines Modpacks zu veröffentlichen.

```zenscript
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### Bauphasen

Dies ist **wichtig** nach dem Hinzufügen von Einträgen in Ihre Etappen zu rufen. Dies ruft alle Mods auf, tatsächlich zu inszenieren besagte Einträge. Wenn diese Methode nicht ausgeführt wird, wird nichts inszeniert!

```zenscript
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```