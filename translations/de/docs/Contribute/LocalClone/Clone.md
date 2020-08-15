# Klonen

## Summary

Diese Seite zeigt Ihnen, wie Sie Ihr geforktes Projektarchiv auf Ihren lokalen Computer klonen.

## Voraussetzungen

Sie sollten [das CrT-wiki Repository geforkt haben](/Contribute/SetupGithub/) und Sie müssen [Git installiert haben](/Contribute/LocalClone/InstallingGit/).

## Erste Schritte

Zuerst musst du einen Ordner auf deinem lokalen Computer erstellen, in dem das Wiki geklont werden soll.  
Dann müssen Sie entweder Ihre Eingabeaufforderung oder git bash in diesem Ordner öffnen.  
Ich werde git Bash verwenden, aber die gleiche Prozedur sollte auch für das CMD funktionieren.

Um git bash zu öffnen, navigieren Sie einfach zum Ordner und klicken Sie mit der rechten Maustaste:  
![Explorer-Kontextmenü mit der Option gitBash ausgewählt](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## Klone deinen Fork

Nachdem Sie git Bash im Ordner geöffnet haben, müssen Sie die Repo-URL erhalten.  
Du findest diese Url, wenn du deinen Fork auf GitHub überprüfst:

![Suche der Repo-URL](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

Sie müssen diese URL verwenden. Wir werden HTTPS für das Klonen verwenden, wenn Sie wissen, wie Sie SSH einrichten können Sie diese Anleitung wahrscheinlich nicht benötigen.  
Sie können auch auf die Schaltfläche klicken, um die Zeichenkette in Ihre Zwischenablage zu kopieren.

Jetzt müssen Sie den Befehl `git clone <repo-Url>` ausführen:

![Befehl klonen](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![Befehl erfolgreich klonen](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Jetzt solltest du einen neuen Ordner namens `CraftTweaker-Dokumentation` in deinem Verzeichnis haben.  
Gehen wir hinzu und geben einen `Git Status` aus:

![Verzeichnis und Git Status ändern](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## Wie man fortfährt

Jetzt, da Sie einen lokalen Klon des Wikis haben, können Sie mit dem Erstellen und Bearbeiten von Dateien beginnen und schließlich [einen Commit](/Contribute/LocalClone/CreateCommit/) erstellen.