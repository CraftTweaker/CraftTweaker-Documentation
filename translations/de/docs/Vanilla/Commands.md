# Befehle

CraftTweaker fügt Befehle hinzu, die Ihnen bei der Erstellung von Skripten helfen werden. Sie werden zur Verfügung gestellt, um die Entwicklungszeit des Skripts zu verkürzen.

The prefix for commands are: `/crafttweaker` or `/ct`

You can also use one of these aliases: `/minetweaker` or `/mt`

Alle Befehle können ingame gefunden werden:

`/crafttweaker help`

oder

`/ct help`

# Liste der Befehle

## Biome

Verwendung:

`/crafttweaker biomes`

`/ct biomes`

Beschreibung:

Listet alle im Spiel befindlichen Biome auf.

## Biome-Typen

Verwendung:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

Beschreibung:

Listet alle Biometypen, die sich im Spiel befinden, auf.

## BlockInfo

Verwendung:

`/crafttweaker blockinfo`

`/ct blockinfo`

Beschreibung:

Aktiviert oder deaktiviert den Blockleser. Im Block-Info-Modus, wenn Sie mit der rechten Maustaste auf einen Block klicken, wird Ihnen der Name, die Metadaten und die Kachel-Entitätsdaten mitgeteilt, falls zutreffend.

## Blöcke

Verwendung:

`/crafttweaker blocks`

`/ct blocks`

Beschreibung:

Gibt eine Liste aller Blöcke des Spiels in die crafttweaker.log Datei aus.

## Bugs

Verwendung:

`/crafttweaker bugs`

`/ct bugs`

Beschreibung:

Öffnet deinen Browser mit dem GitHub Bugtracker.

## Konflikt

Verwendung:

`/crafttweaker conflict`

`/ct conflict`

Beschreibung:

Gibt eine Liste mit allen widersprüchlichen Handwerkstischrezepten in die crafttweaker.log Datei aus.  
Beachten Sie, dass dies nur auf einem CLIENT funktioniert, bei dem JEI installiert ist!

## Discord

Verwendung:

`/crafttweaker discord`

`/ct discord`

Beschreibung:

Öffnet deinen Browser mit einem Link zu [dem Discord Server](https://www.discord.blamejared.com).

## Texte

Verwendung:

`/crafttweaker docs`

`/ct docs`

Beschreibung:

Öffnet Ihren Browser für diese Dokumentationsseite (dasselbe wie `/ct Wiki`).

## DumpZs

Verwendung:

`/crafttweaker dumpzs`

`/ct dumpzs`

Beschreibung:

Gibt einen ZenScript-Dump in einen crafttweaker_dump Ordner in Ihrem Minecraft-Verzeichnis als HTML-Datei aus.  
Du kannst ein oder mehrere dump-Ziele verwenden, die nacheinander ausgeführt werden (wenn du ein Ziel zweimal angibst, wird es zweimal laufen).  
Die Ziele können mit der Auto-Vervollständigung gefunden werden (Tab-Taste).  
Standardmäßig sind `log`, `html` und `json` als Ziele registriert.  
Dies beinhaltet alle registrierten Bracket Handler, ZenTypes, Global Functions, ZenExpansions und alle registrierten Pakete inklusive ihrer Methoden.  
Beachten Sie, dass nicht alle von innerhalb der Skripte verwendet werden können!

## Einheiten

Verwendung:

`/crafttweaker Entities`

`/ct entities`

Beschreibung:

Gibt eine Liste aller Entitäten des Spiels in die crafttweaker.log Datei aus.

## Element geben

Verwendung:

`/crafttweaker geben <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

Beschreibung:

Gibt dem Spieler das Item mit CrT's Bracket-Handler-Syntax.  
Du kannst Tags auch anwenden, indem du ein `anfügst. ithTag()` aufrufen.  
Beachten Sie, dass dies ein ziemlich einfacher Parser ist und möglicherweise nicht in jedem Fall funktioniert!

## Hand

Verwendung:

`/crafttweaker hand`

`/ct hand`

Beschreibung:

Gibt den Namen des Gegenstands in der Hand in den Chat aus.

Kopiert auch den Namen in die Zwischenablage und druckt oredikte Einträge.

## Inventar

Verwendung:

`/crafttweaker Inventar`

`/ct inventory`

Beschreibung:

Gibt eine Liste aller Gegenstände in deinem Inventar an die Datei crafttweaker.log aus.

## JeiCategories

Verwendung:

`/crafttweaker JeiCategories`

`/ct jeiCategories`

Beschreibung:

Gibt eine Liste aller registrierten Jei-Kategorien in die crafttweaker.log Datei aus.  
Benötigt die Installation von JEI (Überraschung)!

## Json

Verwendung:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Beschreibung:

Gibt den NBT des Gegenstands in deiner Hand als JSON in den Chat aus.  
Dieses Format unterscheidet sich von der IData Formatierung CraftTweaker verwendet.  
Sie können ihn anklicken, um in Ihre Zwischenablage kopiert zu werden.  
Sie können auch das `maskierte` Argument privilegieren, um den resultierenden String automatisch zu entschärfen.

## Flüssigkeiten

Verwendung:

`/crafttweaker liquids`

`/ct liquids`

Beschreibung:

Gibt eine Liste aller Flüssigkeiten im Spiel in die crafttweaker.log Datei aus.

## Log

Verwendung:

`/crafttweaker log`

`/ct log`

Beschreibung:

Sendet einen anklickbaren Link, um das crafttweaker.log zu öffnen.

## Mods

Verwendung:

`/crafttweaker mods`

`/ct mods`

Beschreibung:

Gibt eine Liste aller Mods und ihrer Versionen im Spiel in die crafttweaker.log Datei aus und gibt sie im Chat aus.

## Namen

Verwendung:

`/crafttweaker names [category]`

`/ct names [kategorie]`

Beschreibung:

Gibt eine Liste aller Gegenstände im Spiel in die crafttweaker.log Datei aus.  
Das Argument der `Kategorie` ist optional und erweitert die Liste um die entsprechenden Informationen:

* brennzeit
* schöpferische etablieren
* beschädigbar
* anzeigen
* verzaubern
* foodvalue
* maxdamage
* maxstack
* maxuse
* modo
* seltenheit
* reparierbar
* Reparaturkosten
* sättigungwert
* entsperren

Sie können auch alle verfügbaren Parameter mit der TAB-Key Auto-Vervollständigung Funktion sehen.

## NBT

Verwendung:

`/crafttweaker nbt`

`/ct nbt`

Beschreibung:

Gibt den NBT des gesuchten Blocks oder den Gegenstand aus, den Sie in der Datei crafttweaker.log halten.

## OreDict

Verwendung:

`/crafttweaker oredict <name>`

`/ct Oredikt <name>`

Beschreibung:

Gibt eine Liste aller OreDict-Einträge im Spiel in die crafttweaker.log Datei aus.

Wenn ein Name angegeben wird, werden die Namen aller im Oredict registrierten Gegenstände an die Datei crafttweaker.log ausgegeben.

## Tränke

Verwendung:

`/crafttweaker potions`

`/ct Tränke`

Beschreibung:

Gibt eine Liste aller Tränke im Spiel in die crafttweaker.log Datei aus.

## Rezeptnamen

Verwendung:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct Rezeptnamen`  
`/ct Rezeptnamen [modid]`

Beschreibung:

Gibt eine Liste aller Rezeptnamen im Spiel in die crafttweaker.log Datei aus.  
Es kann ein Modid angegeben werden, um Ergebnisse zu filtern.

## Rezepte

Verwendung:

`/crafttweaker recipes`

`/ct Rezepte`

Beschreibung:

Gibt eine Liste aller Handwerksrezepte im Spiel in die crafttweaker.log Datei aus.

## Rezepte (Hand)

Verwendung:

`/crafttweaker recipes hand`

`/ct Rezepte Hand`

Beschreibung:

Gibt eine Liste aller Handwerksrezepte für den Gegenstand in der Hand des Spielers im Spiel in die crafttweaker.log Datei aus.

## Rezepte (Ofen)

Verwendung:

`/crafttweaker recipes furnace`

`/ct Rezepte Ofen`

Beschreibung:

Gibt eine Liste aller Ofenrezepte im Spiel in die crafttweaker.log Datei aus.

## Skripte

Verwendung:

`/crafttweaker scripts`

`/ct Skripte`

Beschreibung:

Sendet einen anklickbaren Link, um das Skript-Verzeichnis zu öffnen.  
Kann auch über eine Befehlszeile ausgeführt werden, die stattdessen den absoluten Pfad zum Verzeichnis zum Log ausgibt.

## Samen

Verwendung:

`/crafttweaker seeds`

`/ct Samen`

Beschreibung:

Gibt eine Liste aller Elemente der Seed-Registry an die crafttweaker.log Datei aus.

## Syntax

Verwendung:

`/crafttweaker syntax`

`/ct Syntax`

Beschreibung:

Liest alle Skripte aus und gibt alle Fehler in den Syntaxen aus. Beachte, dass dies nicht die Änderungen deines Skripts betrifft, du musst dein Spiel neu starten, um sie in Kraft zu setzen.

## Wiki

Verwendung:

`/crafttweaker wiki`

`/ct Wiki`

Beschreibung:

Öffnet Ihren Browser für diese Wiki-Seite (identisch mit `/ct docs`).

## ZsLint

Verwendung:

`/crafttweaker zslint`

`/ct zslint`

Beschreibung:

Startet den Zslint-Sockel.