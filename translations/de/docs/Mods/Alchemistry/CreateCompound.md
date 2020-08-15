# Compound erstellen
Benutzerdefinierte Alchemie Compound Generation

# Paket
```zenscript
mods.alchemistry.Util.createCompound
```

## Lader
Dies muss mit `#Loader Alchemie` geladen werden

## Methoden
- **int meta** meta für neuen Compund
- **String Name** Name für neuen Compund
- **int rot** zusammengesetzt roter Schatten, RGB
- **int grün** Verbundgrüner Schatten, RGB
- **int blau** Verbundblauer Schatten, RGB
- **Objekt[][]** Jede Klammer hat ein anderes Element gefolgt von einem Komma und der Menge die in deinem Compound verwendet werden soll

## Erstellen
```zenscript
mods.alchemistry.Util.createCompound(int meta, String name, int rot, int grün, int blau, Object[][] Komponenten);

mods.alchemistry.Util.createCompound(1000, "vibrant ium sufide", 20, 69, 185,
[["vibrant ium", 1],
 ["Schwefel", 3]]);
```

## Notizen
- Bitte verwenden Sie Kleinbuchstaben
- Die Zeile '#loader alchemistry' wird am Anfang der Datei benötigt. Diese Datei kann nur verwendet werden, um Elemente und Verbindungen zu erstellen, andere Rezepte müssen in andere Dateien kopiert werden.
- Das Komponentenfeld setzt voraus, dass jeder Eintrag ein Array wie ["Zellulose", 5], das das Element/Compound angibt und dessen Menge angibt. String-Argumente werden hier anstelle von Itemstacks verwendet, um sicherzustellen, dass nur Elemente/Compounds verwendet werden.
- Das Meta-Feld wird benötigt, um sicherzustellen, dass Ihre neuen Verbindungen eine unveränderliche Kennung haben, auch wenn andere Verbindungen erstellt oder entfernt werden. Jede Verbindung muss einen eindeutigen Metawert haben. Zum Zeitpunkt dieses Schreibens verwendet die Mod nur die Meta-Werte von etwa 0 bis 35, aber ich würde anfangen, deine Meta bei 1000 zu nummerieren (wie oben gesehen) oder höher, um sicherzustellen, dass deine benutzerdefinierten Verbindungen nie mit den internen Rezepten von Alchemist kollidieren
