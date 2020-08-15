# XUTweaker

Das XUTweaker-Paket fügt mehrere statische Hilfsmethoden hinzu.

## Dieses Paket importieren

Wenn Sie den Aufruf von Methoden verkürzen oder auf Probleme stoßen möchten, die Sie möglicherweise das Paket importieren müssen.  
Sie können dies mit Hilfe von

```zenscript
extrautilities2.Tweaker.XUTweaker;
```

## Methoden

### Überlebensflug erlauben

Ermöglicht Flug für alle Spieler, dauerhaft.

```zenscript
extrautilities2.Tweaker.XUTweaker.allowSurvivalFlight();
```

### Deaktiviere Netherportale

Verhindert dauerhaft das Spawnen von Netherportalen (und allen Portalen, die das PortalSpawnEvent verwenden).

```zenscript
extrautilities2.Tweaker.XUTweaker.disableNetherPortals();
```

### Prüft, ob ein Spieler ein gefälschter Spieler ist

Gibt eine boolesche Angabe zurück, wenn der Spieler ein gefälschter Spieler ist.

Benötigt ein [IPlayer](/Vanilla/Players/IPlayer) Argument.

```zenscript
extrautilities2.Tweaker.XUTweaker.isPlayerFake(Spieler);
```

### Öffne einen Bücherbildschirm für den Spieler

Versucht, den schriftlichen Buchbildschirm für den angegebenen Spieler zu öffnen.

Gibt eine boolesche Angabe zurück, wenn der Befehl korrekt ausgeführt wurde.  
Benötigt ein [IPlayer](/Vanilla/Players/IPlayer) Argument.  
benötigt auch ein String[] Argument, das die Seiten sein wird.

```zenscript
extrautilities2.Tweaker.XUTweaker.openBookScreen(player, pages);
extrautilities2.Tweaker.XUTweaker.openBookScreen(player, ["Seite 1", "Seite 2"]);
```