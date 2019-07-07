# Einführung in Skripte

CraftTweaker nutzt eine spezielle Skriptsprache namens `ZenScript`. Die Skripte werden von `.zs`-Dateien gelesen, welche sich im Ordner `<gamedir>/scripts` befinden.

ZenScript ist eine "top down"-Skriptsprache, was bedeutet, dass ganz oben im Skript die `Imports` stehen müssen, danach werden die `Variablen` deklariert. `Variablen` können zwar auch weiter unten im Skript stehen, allerdings kann man von den übergeordneten Zeilen aus dann auch nicht auf diese `Variable` zugreifen.

## Einführung

Schon mal ein Modpack erstellt, in dem du einfach alle möglichen Mods zusammen auf einen Haufen geklatscht hast und dabei gemerkt, dass manches einfach nicht gut zusammenpasst? Da Mods in der Regel unabhängig voneinander entwickelt werden, sind diese meistens nicht untereinaner abgestimmt. Vielleicht glaubst du, dass es für manche Items bessere Craftingrezepte gibt. Womöglich willst du auch einfach nur ein bestimmtes Item entfernen, ohne gleich die ganze Mod entfernen zu müssen. Oder vielleicht möchtest du auch einfach nur ein paar Einträge im "Ore Dictionary" verändern. Nun kannst du das alles tun - mit nur einem einzigen CraftTweaker-Befehl.

Zusätzlich zur Hauptfunktionalität, welche den Support für Minecraft Vanilla bereitstellt, sind verschiedene Bibliotheken enthalten, damit sich auch die Rezepte und das Verhalten der Items vieler verschiedener Mods verändern lassen.

## Skripte

Skripte werden im Ordner `<minecraftdir>/scripts` gespeichert und werden in der `PreInitialization`-Phase von Minecraft geladen. Leider können seit Minecraft Version 1.12 Skripte nicht mehr neu geladen werden, wie es bei früheren Versionen von CraftTweaker möglich war. Außerdem müssen Skripte **sowohl auf dem Server, als auch auf dem Client** vorhanden sein, damit diese Funktionieren!

Skriptdateien haben die Endung `.zs` und können auch in eine `.zip`-Datei gepackt werden.

### Dein allererstes Skript

Für einen schnellen Einstieg, kannst du eine simple Datei mit dem Namen `hallo.zs` im Ordner `<minecraftdir>/scripts>` erstellen.

In diese Datei packst du die folgende Zeile:

    print("Hallo Welt!");
    

Nun kannst du Minecraft starten und dir die Datei `crafttweaker.log` anschauen.

Die Datei `crafttweaker.log` findest du in `<minecraftdir>` und kann von jedem Texteditor gelesen werden.

Zum bearbeiten der Skripte empfehlen wir die Texteditoren Notepad++ oder Sublime Text, wobei jeder Texteditor funktionieren sollte.

### Die crafttweaker.log-Datei

Die `crafttweaker.log` verwendet eine bestimmte Syntax, welche ungefähr so aussieht:

    [LOADERSTAGE][SIDE][TYPE] <message>
    

Im Falle des vorherigen Beispiels, wird dort folgendes stehen:

    [PREINITIALIZATION][CLIENT][INFO] Hallo Welt!
    

Die Syntax wird zu Debugging-Zwecken genutzt und wird in der Regel auch überall verwendet.

### Kommentare

Mit Kommentaren kannst du deine Skripte besser lesbarer und verständlicher machen!

ZenScript unterstütz drei verschiedene Arten von Kommentaren:

Einzeilig: `// Ich bin ein einzeiliger Kommentar!`

Alternativ einzeilig: `# Ich bin auch ein einzeiliger Kommentar!`

Mehrzeilig:

    /* Ich bin
    ein mehrzeiliger
    Kommentar! */