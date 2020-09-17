# Einführung in Skripte

CraftTweaker verwendet eine benutzerdefinierte Skriptsprache namens `ZenScript`, ZenScript wird von `gelesen. s` Dateien, die im `<gamedir>/scripts` Ordner gespeichert sind wenn du nicht sicher bist, wo sich dieser Ordner befindet, führe einfach `/ct Scripts` aus, wenn du im Spiel bist und der Ordner geöffnet wird.

ZenScript ist eine "top down"-Skriptsprache, was bedeutet, dass ganz oben im Skript die `Imports` stehen müssen, danach werden die `Variablen` deklariert. `Variablen` können zwar auch weiter unten im Skript stehen, allerdings kann man von den übergeordneten Zeilen aus dann auch nicht auf diese `Variable` zugreifen.


Skriptdateien haben das `.zs` Präfix und stellen Sie sicher, dass es nicht `.zs.txt` ist!

## Was sind Skripte

Skripte werden in `<gamedir>/scripts` gespeichert und werden geladen, wenn der Spieler einer Welt beitritt ähnlich wie frühere Versionen von CraftTweaker (ausgenommen 1. 2), Skripte können neu geladen werden, führen Sie einfach `/reload` aus.

Skripte werden zweimal geladen, wenn Sie eine einzige Spielerwelt betreten einmal auf der `Server` Seite und dann auf der `Client` Seite wenn Sie eine `println()` in Ihrem Skript haben, werden Sie es zweimal sehen, da es zweimal läuft.

Dies bedeutet nicht, dass Änderungen doppelt angewendet werden, Änderungen von Skripten können jedoch seitlich vorgenommen werden, so dass einige Änderungen vorgenommen werden z.B. Lokalisierung einstellen, nur auf der Client-Seite laufen, aber das Hinzufügen von Rezepten erfolgt nur auf der Serverseite.

Beim Beitritt zum Server sendet der Server seine Skripte an den Client, und der Client führt diese Skripte aus. Dies bedeutet, dass ein Client ohne Skripte kann einem Server beitreten und die Änderungen erhalten (nützlich, wenn du ein Element auf dem Server deaktivieren musst, aber nicht zwingen willst, zusätzliche Dateien herunterzuladen!)


### Dein allererstes Skript

Um mit Skripten zu beginnen, können Sie eine sehr einfache Datei mit dem Namen `Hello erstellen. s` im Ordner `<gamedir>/scripts>` Wenn Sie nicht sicher sind, wo sich der Ordner befindet, führen Sie einfach `/ct Scripts` aus und es sollte geöffnet werden!

In diese Datei packst du die folgende Zeile:

```zenscript
println("Hallo Welt!");
```

Lade nun Minecraft auf und schau dir den `<gamedir>/logs/crafttweaker an. og` Datei (oder führen Sie `/ct log` aus, um die Datei in Ihrem Standard-Texteditor öffnen zu lassen).

Die Datei `crafttweaker.log` befindet sich in `<gamedir>/logs` und kann von jedem Programm gelesen werden, das Klartext-Dateien lesen kann.

Es wird empfohlen, die Skriptdateien mit Notepad++, Sublime Text oder VSCode zu bearbeiten, wie auch immer jedes Programm dies tun wird.

Wenn Sie ein Programm zum Bearbeiten von Skripten wählen, schauen Sie sich an, welche Syntax-Highlighter verfügbar sind meisten Texteditoren haben ZenScript Hervorhebung Unterstützung durch die Verwendung eines Plugins.



### Die crafttweaker.log-Datei

Die `crafttweaker.log` verwendet eine bestimmte Syntax, welche ungefähr so aussieht:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Im Falle des vorherigen Beispiels, wird dort folgendes stehen:

```
[14:58:06.697][DONE][SERVER][INFO] Hallo Welt!
```

Die Syntax wird für Debug-Zwecke verwendet und das einzige Mal, wenn die Syntax nicht verwendet wird, ist für Befehlsdumps, in diesem Fall druckt es nur die Nachricht, so dass das Kopieren der gedumpten Informationen ist einfacher.

### Kommentare

Mit Kommentaren kannst du deine Skripte besser lesbarer und verständlicher machen!

ZenScript unterstütz drei verschiedene Arten von Kommentaren:

Einzeilig: `// Ich bin ein einzeiliger Kommentar!`

Alternativ einzeilig: `# Ich bin auch ein einzeiliger Kommentar!`

Mehrzeilig:
```
/* Ich bin
ein mehrzeiliger
Kommentar! */
```

Beachten Sie nur, dass `#` Kommentare auch für PreProcessors verwendet werden (TODO Link zu PreProcessors wenn sie dokumentiert sind), so dass sie noch gültige Kommentare sind, können sie unerwünschte Nebenwirkungen verursachen. 