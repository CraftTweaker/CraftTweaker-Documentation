# Ein Primer auf funktionalen Schnittstellen

Laut der Java Language Specification for Java 8 ist eine Functional Interface in Java folgende:

> Eine funktionale Schnittstelle ist eine Schnittstelle, die nur eine abstrakte Methode hat (abgesehen von den Methoden von `Objekt`), und stellt somit einen einzigen Funktionsvertrag dar. Diese "Single"-Methode kann die Form mehrerer abstrakter Methoden annehmen mit überride-äquivalenten Signaturen, die von Oberflächen geerbt werden; in diesem Fall repräsentieren die vererbten Methoden logischerweise eine einzige Methode.
> 
> Für eine Schnittstelle I, ließ `M` den Satz von `abstrakten` Methoden sein, die Mitglieder von mir sind, die nicht die gleiche Signatur haben wie jede `öffentliche` Instanz Methode der Klasse `Objekt`. Dann ist ich eine *-Funktionsschnittstelle* wenn es eine Methode gibt `m` in `M` , für die beides wahr ist:
> 
> - Die Signatur von `m` ist eine Unterschrift ([§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)) der Signatur jeder Methode in `M`.
> - `m` ist zurücklieferbar ([§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5)) für jede Methode in `M`.
> 
> [Quelle](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScript, eine Java-ähnliche Programmiersprache, die mit einem Java-Backend interagiert, hat eine ähnliche Definition.

## Eine Vereinfachung
Die obige Definition ist zu präzise und kompliziert, was von einer formalen Sprachspezifikation zu erwarten ist. Eine wesentlich vereinfachtere Version für den Entwickler könnte Folgendes sein:

> Eine Schnittstelle `I` nennt man eine *funktionale Schnittstelle* , wenn sie nur eine abstrakte Methode definiert.

Diese Definition wird auch von ZenScript selbst akzeptiert.

## Die praktische Nutzung
Bisher hat sich die obige Dokumentation eher auf "was" als auf "warum" verlassen. Funktionale Schnittstellen mögen wie ein Gimmick erscheinen, aber sie sind besonders nützlich, da sie in ZenScript *reine Funktionen* erlauben (i. , welche Dinge Sie mit mit `Funktion`erstellen), die an Java-Code weitergegeben werden sollen, ohne dass seltsame Shenanigans benötigt werden. Das ist etwas, was wir als "lambda" definieren.

Beispiele für Anwendungen dieser Schnittstellen sind die [Rezeptfunktionen](/Vanilla/Recipes/Crafting/Recipe_Functions/) die an Rezepte übergeben werden können, um die Ausgabe oder die Eingabe dynamisch zu ändern: `IRecipeFunction` und `IRecipeAction` sind in tatsächlich zwei funktionale Schnittstellen.

## Das Problem und seine Lösung
Die Funktionsschnittstellen, die in der Sprache ZenScript verfügbar sind, sind alle überspezifisch. Auf der einen Seite erlaubt dies fein erstellte Funktionen für bestimmte Parameter; auf der anderen Seite beschränkt dies die Möglichkeiten dessen, was der Entwickler tun kann.

Aus diesem Grund das ZenScriptX Projekt hat beschlossen, eine Reihe von allgemeinen funktionalen Schnittstellen zur Verfügung zu stellen, die eine bestimmte Anzahl von Eingabeparametern erhalten und etwas anderes ausgeben können ermöglicht eine einfachere Interoperabilität mit Java-basierten APIs. Eine vollständige Liste der verfügbaren funktionalen Schnittstellen findest du [auf dieser Seite](/Mods/Boson/Functions/List/), zusammen mit all ihren Argumenten und Rückgabetypen.

## Ein Schnellausschluss
Beachten Sie, dass wir in dieser Dokumentation hauptsächlich auf die Interoperabilität zwischen ZenScript und Java verwiesen haben. Das liegt daran, dass ZenScript bereits Unterstützung für höhere Funktionen bietet (z. Speichern von Funktionen in einer Variable, indem sie sie aufrufen, sie als Parameter übergeben usw., ohne dass eine funktionale Schnittstelle dazwischen benötigt wird. Aus diesem Grund wäre der folgende -Code in ZenScript ungültig:

```zenscript
val fun as Function = function (input as IIngredient) as IItemStack {
    if (input instanceof IItemStack) return input as IItemStack;
    return null;
} as Function;

print(fun. pply(<minecraft:stick>).commandString); # kompiliert nicht
```

Dies geschieht, weil die funktionalen Methoden nicht ZenScript ausgesetzt sind, sondern nur dem Java-Backend. Um ein Beispiel für die tatsächliche Verwendung solcher funktionalen Schnittstellen zu finden, lesen Sie bitte die [Sequenzen-Dokumentation](/Mods/Boson/Sequences/Docs/) Seite.


