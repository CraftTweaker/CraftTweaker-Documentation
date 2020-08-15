# Commit erstellen

## Voraussetzungen

Sie müssen [das Repo auf Ihre lokale Festplatte geklont haben](/Contribute/LocalClone/Clone).  
Sie müssen auch bereits etwas in Ihrem lokalen Klon geändert haben.

## Was werden wir tun

Um zu lernen, erstellen wir eine Datei namens `Test. d` die in `AdvancedFunctions/Secret/Test` verfügbar sein und zu mkdocs.yml hinzufügen.

Die Screenshots werden aus einem Sublime Text 3 Editor (wegen VM nicht registriert), aber Sie können jeden Editor verwenden, den Sie erstellen oder ändern möchten.  
Das ist einer der Vorteile, vor Ort zu arbeiten ^^.

Screenshots of the example files: ![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png) ![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)

## Git Status und Git add/stage

Der `-Git-Status` zeigt an, welche Dateien geändert wurden.  
In unserem Beispiel zeigt er uns folgendes:

![Git Status Anruf](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

Wie Sie sehen können, haben wir zwei Abschnitte, modifizierte Dateien und unverfolgte Dateien. Modifizierte Dateien sind Dateien, deren Inhalt sich vom Index unterscheiden (git kennt eine andere Version von ihnen als derzeit auf Ihrem Computer).  
Unverfolgte Dateien sind Dateien, die noch nicht im Index existieren (git kennt sie noch nicht).

In beiden Fällen können Sie git an *Stufe* die Dateien mit entweder `git add` oder `git stage` teilen: ![Git Status Anruf](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

Jetzt werden die Dateien zur Übertragung inszeniert und daher grün gedruckt. Hinweis, , wenn Sie eine dieser Dateien jetzt ändern würden, müssen Sie das Kommando Hinzufügen erneut ausführen, da es nur den aktuellen Status zum Staging-Bereich hinzufügt.

## Git Commit

Nachdem Sie die Dateien hinzugefügt haben, müssen Sie einen Commit erstellen.  
Dies kann mit dem `git commit` Befehl gemacht werden.

Wenn Sie diesen Befehl ausführen, werden alle Datei-Zustände, die derzeit inszeniert sind, zusammengefasst und in den Index eingefügt.  
Das bedeutet, dass Sie einen Commit erstellen können, der mehr als eine Datei ändert (etwas, wozu der Online-Editor von GH nicht in der Lage ist).  
Normalerweise möchten Sie einen Commit pro logischen Sektor erstellen also, wenn Sie eine PR-Datei erstellen würden, die Dokumentation für ModA hinzufügt ModB und ModC können Sie einen Commit erstellen, der ModA hinzufügt, eines, das ModB hinzufügt und eines, das ModC hinzufügt.

### Git Zugangsdaten einstellen

If this is the first time you create a commit using git you will see this message: ![Git Status Anruf](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

Das bedeutet, dass git nicht weiß, wer Sie sind, es weiß also nicht, wer der Commit-Autor sein soll. Lass uns also die Befehle ausführen, die in der Fehlermeldung angegeben sind:

    git config --global user.email "yourEmail"
    git config --global user.name "yourName"
    

Verwenden Sie für die E-Mail, die Ihrem GH-Konto hinzugefügt wurde.  
Für den Namen können Sie alles andere als versuchen, Ihren GH-Kontonamen zu verwenden.

### Setze Commit-Titel/Nachricht

If your credentials are set correctly, you will get a screen like this: ![Git Commit-Nachrichtenfenster](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

Dies ist vom Texteditor GitBash verwendet dafür.  
Um in den Einfügemodus zu gelangen (damit Sie etwas schreiben können), drücken Sie die INSERT Taste.  
Jetzt können Sie Ihren Commit-Titel (erste Zeile) und die Commit-Nachricht (alles darunter) schreiben.  
Sie können mit dem ENTER Schlüssel eine neue Zeile erstellen und alles, was mit einem `#` beginnt, wird ignoriert.

Die Färbung stört nichts.  
Um den INSERT-Modus zu verlassen, drücken Sie ESC.

Nun müssen Sie dem Editor mitteilen, dass Sie fertig sind.  
Sie können dies tun, indem Sie `:x` drücken und ENTER drücken.

Here's a screen of what this may look like just before pressing enter to leave the editor: ![Git Commit-Nachrichtenfenster](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### Setze die Commit-Nachricht/Titel mit -m

Wenn dir der Bash-Editor nicht gefällt oder es schwer fällt zu merken, welche Tasten gedrückt werden sollen, Sie können auch den `-m "message"` Parameter verwenden. Sie können das `"` öffnen und es unvergleichlich lassen, um Zeilenumbrüche erstellen zu können. Fertig mit der Eingabe der Bearbeitung `"`.  
Wie im Editor wird alles unterhalb der ersten Zeile als Teil der Commit-Nachricht betrachtet.

The same commit message as above could be achieved by doing: ![Git Commit mit -m](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)

## Wie man fortfährt

Jetzt, da Sie wissen, wie Sie Commits erstellen, können Sie sie [zu Ihrem Fork](/Contribute/LocalClone/Push/) schieben.