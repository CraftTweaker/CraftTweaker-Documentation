# Eigene Typen

Benutzerdefinierte Typen sind eine neue mächtige Möglichkeit für Sie, Ihre eigenen *benutzerdefinierten* Dinge auf der Bühne zu erstellen. Im Wesentlichen ist das, was Sie damit tun können, sag zum Beispiel ein Event von Minecraft oder Stufe eine Liste von Blöcken, um zu verhindern, dass ein Spieler interagiert oder zerbricht. Mit [Events](/Vanilla/Events/IEventManager/) CraftTweaker wird bereitgestellt. Dies gibt dir die Möglichkeit, mehr Dinge zu sperren. Erstellen Sie ein komplettes Benutzererlebnis im Spiel ohne zusätzliche Mods zu benötigen. Wie alles, was du brauchst, ist ZenStages und CraftTweaker klingt ziemlich cool, huh?

This is a still a fairly new system and *may* have some bugs. Wenn du irgendetwas bemerkst, melde sie bitte an [unser Repo](https://github.com/DarkPacks/ZenStages/issues) , damit wir es sehen können!

Hinweis: Dies ist ein vollständiger benutzerdefinierter Typ, nichts wird gegen diese intern überprüfen. Sie müssen die [Events](/Vanilla/Events/IEventManager/) erstellen und hören, um die angegebenen Methoden in [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) aufzurufen, um die Prüfungen durchzuführen. Also der *Slug/Name* Name, den Sie für den Typ verwenden, den Sie irgendwo notieren müssen, damit Sie wissen, was was macht.

Note: It is also a recomended standard that you use unique names for **all** your Custom Types.

## Dieses Paket importieren

`importiere mods.zenstages.type.CustomStageType;`

## Wie man sie erstellt

Benutzerdefinierte Typen werden über [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) mit der folgenden Methode erstellt.

```zenscript
// initCustomType(string name, string value);
// initCustomType(string name, string[] values);
// initCustomType(string name, int value);
// initCustomType(string name, int[] values);
// initCustomType(string name, IIngredient value);
// initCustomType(string name, IIngredient[] values);
var MyCustomType as CustomStageType = ZenStager. nitCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("disallowedDimension", 14);
```

Sobald Sie den benutzerdefinierten Typ erstellt haben, können Sie diesen Typ nun einer [Stufe](/Mods/GameStages/ZenStages/Stage/) zuweisen. Indem Sie Folgendes anrufen.

```zenscript
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## Wie man einen Scheck an einen benutzerdefinierten Typ durchführt

Diese Methode erfordert, dass Sie eine Stufe auf einen Typ gesetzt haben. Verwenden Sie die obige Methode. Andernfalls gibt es Null zurück.

```zenscript
// getCustomStage(string name, string value);
// getCustomStage(string name, int value);
// getCustomStage(string name, IIngredient value);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

Für diese Methode ist kein benutzerdefinierter Typ *Stage* erforderlich.

```zenscript
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```