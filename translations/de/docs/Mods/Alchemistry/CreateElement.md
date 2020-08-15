# Element erstellen
Benutzerdefiniertes Element für Alchemie

# Paket
`mods.alchemistry.Util.createElement`
## Lader
Dies muss mit `#Loader Alchemie` geladen werden

## Methoden
- **int atomicNumber** ID für neues Element
- **Zeichenkettenname** Name für neue Elemente
- **Streich-Abkürzung** Neue Elemente Abkürzung
- **int rot** Element rot, RGB
- **int grün** Element-grüner Schatten, RGB
- **int blau** Elementblauer Schatten, RGB

## Erstellen
```zenscript
mods.alchemistry.Util.createElement (int atomicNumber, String name, String Abkürzung, int rot, int grün, int blau);

mods.alchemistry.Util.createElement(150,"vibrant ium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## Notizen

- Bitte verwenden Sie Kleinbuchstaben
- Vorhandene atomare Zahlen können nicht überschrieben werden
- Die Zeile '#loader alchemistry' wird am Anfang der Datei benötigt. Diese Datei kann nur verwendet werden, um Elemente und Verbindungen zu erstellen, andere Rezepte müssen in andere Dateien kopiert werden.
- HINWEIS: Ab v1.0.2 muss der mod Resource Loader verwendet werden, um das Bild und das Model json für benutzerdefinierte Elemente einzubinden. If you would like to auto-generate these resources I have created a command-line JAR program [here](https://github.com/al132mc/alchemistry-resource-creator/releases) to do so.
