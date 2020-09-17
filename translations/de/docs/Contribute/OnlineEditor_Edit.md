# Dateien mit GitHub Online-Editor bearbeiten

## Anforderungen

Sie müssen ein GitHub Konto erstellt haben und [hat das Wiki an Ihr Konto](/Contribute/SetupGithub) weitergeleitet.

## Einführung

Mit GitHubs Online-Editor können Sie nur mit Ihrem Browser Dateien ändern und erstellen.  
Möglicherweise ist es nicht so vielseitig wie [mit einer lokalen Kopie](/Contribute/LocalClone/CreateCommit/) , aber Sie müssen sich keine Sorgen machen über [git](/Contribute/LocalClone/InstallingGit/) und alle einzurichten.

Diese Anleitung zeigt Ihnen, wie Sie eine bereits existierende Datei mit dem Online-Editor von githubs bearbeiten können.  
Möglicherweise möchtest du die Seite bearbeiten, weil du einen Tippfehler gefunden hast oder ein besseres Beispiel hinzufügen möchtest was auch immer der Grund ist, zögern Sie nicht, Änderungen zu übertragen und schließlich [eine Pull Request](/Contribute/PullRequest) einzureichen.

Denken Sie jedoch daran, dass Sie nur die englische Version bearbeiten können, Übersetzungen werden über [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) behandelt.

## Datei suchen

Wenn Sie eine existierende Datei bearbeiten möchten, müssen Sie diese zuerst finden.

In den meisten Fällen finden Sie die Datei, indem Sie die Wiki Url überprüfen.

Thumbnail-Regel: Die `#` ist der Dokumentations-Ordner, alles danach, sind verschachtelte Ordner und schließlich die Datei.

Zum Beispiel kann die Datei  
[https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/](https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/)  
unter  
`docs/AdvancedFunctions/Arrays_and_Loops.md` gefunden werden

## Datei bearbeiten

Nachdem Sie die Datei erfolgreich gefunden haben, klicken Sie auf sie, um sie in der GitHub Dateiansicht zu öffnen.  
Hier kannst du sehen, wie der Wiki-Eintrag ungefähr aussehen wird obwohl keine Navigationsleiste vorhanden ist, da dies nur der Inhalt des Eintrags ist.

Click on the little pen icon to open the editor: ![Bearbeite Taste](/Contribute/assets/OnlineEditor_EditButton.png)

Mit dem Editor können Sie Ihre Datei so ändern, wie Sie wollen, und auch direkt eine Vorschau mit der kompilierten Formatierung sehen. Diese Vorschau wird farbige Balken auf der linken Seite haben, um Folgendes anzuzeigen:

- Grün: Dieser Abschnitt war auf dieser Seite vorher nicht vorhanden.
- Gelb: Dieser Abschnitt war bereits auf dieser Seite vorhanden, wurde aber geändert, z.B. wurde ein Tippfehler korrigiert, oder es wurden zusätzliche Informationen bereitgestellt.
- Rot: Dieser Abschnitt war bereits auf dieser Seite vorhanden, wurde aber entfernt.
- Keine: Dieser Abschnitt wurde nicht berührt.

Wenn die Syntax der Dateien neu für Sie ist, verwendet das Wiki MarkDown. Es sollte viele Tutorials geben, die du mit Google finden kannst (oder du kannst eines direkt hier zu diesem Wiki hinzufügen, wenn du möchtest).

## Änderungen speichern/übertragen

Nachdem Sie die Datei geändert haben, müssen Sie GitHub wissen lassen, dass Sie Ihre Änderungen speichern möchten.

Das ist das Commit-Feld unter Ihrem Editor:  
Sie können die Datei nicht einfach speichern Sie müssen eine Zusammenfassung dessen, was Sie getan haben (Commit-Titel) und optional eine kurze Beschreibung angeben, in der Sie zusätzliche Informationen einfügen können, wie warum Sie die Änderungen vorgenommen haben oder was genau geändert wurde.

Standardmäßig sieht es ungefähr so aus:  
![Commit Box Standard](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

In diesem Beispiel lautet der Commit Titel (oder Zusammenfassung bearbeiten) `Arrays_and_Loops.md aktualisieren`. GitHub kann nicht wissen, was Ihre tatsächlichen Änderungen eigentlich tun sollten, daher versucht es etwas so allgemeines wie dieses.

Vielleicht möchten Sie einen zusätzlichen Titel oder eine zusätzliche Beschreibung hinzufügen, aber es ist nicht notwendig, wenn Sie später Ihre Pull-Anfrage überprüfen möchten.

Wenn Sie mehrere E-Mail-Adressen für Ihr GitHub Konto registriert haben, können Sie wählen, wie Sie die Übertragung erstellen wollen. Dies wird jedoch keine wirklichen Auswirkungen auf den Beitrag haben.  
Sie können auch entscheiden, ob Sie direkt zu Ihrem Hauptzweig übertragen oder lieber einen neuen Zweig für Ihren Commit erstellen möchten. In den meisten Fällen funktioniert das Commitment zu Ihrem Hauptzweig.

A filled out example might look like this: ![Commit Box ausgefüllt](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## Was als nächstes zu tun

Nachdem Sie Ihre Änderungen übernommen haben, können Sie fortfahren und bearbeiten oder [weitere](/Contribute/OnlineEditor_Create) Dateien mit dem Online-Editor erstellen.  
Nachdem Sie alle Ihre Änderungen vorgenommen haben, können Sie [eine Pull Request](/Contribute/PullRequest) ablegen.