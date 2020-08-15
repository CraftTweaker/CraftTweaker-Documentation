# Spielerstadien

Die GameStages API erweitert die [IPlayer](/Vanilla/Players/IPlayer/) von CraftTweaker, um die Stages eines Spielers zu überprüfen und zu ändern.

## Aufrufen der Methoden

Da dies eine [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)ist, können Sie die Methoden einfach auf einem [IPlayer](/Vanilla/Players/IPlayer/) Objekt oder einer seiner Untertypen aufrufen.

## Methoden

### Auf Spielstände prüfen

Die Methoden geben Booleans zurück.

```zenscript
// Prüft, ob der Spieler die Bühne überstanden hat.
//player.hasGameStage(String);
player.hasGameStage("one");



// Prüft, ob der Spieler eine der übergebenen Stages hat. Sie brauchen nur einen.
//player.hasAnyGameStages(String... Bühnen);
player.hasAnyGameStages("ein", "zwei");



// Prüft, ob der Spieler alle übergebenen Stadien hat.
//player.hasAllGameStages (String... Ins);
player.hasAllGameStages ("ein", "zwei");
```

### Eine Gamestage hinzufügen oder entfernen

Die Methoden geben ungültig zurück (nichts).

```zenscript
// Schaltet eine Bühne für einen Spieler frei.
//addGameStage(String Stage);
addGameStage(String Stage);


// Blockiert eine Bühne für einen Spieler.
//removeGameStage(String stage);
removeGameStage(String stage);
```