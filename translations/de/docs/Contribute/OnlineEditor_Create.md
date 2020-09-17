# Dateien mit GitHub Online-Editor erstellen

## Anforderungen

Sie müssen ein GitHub Konto erstellt haben und [hat das Wiki an Ihr Konto](/Contribute/SetupGithub) weitergeleitet.

## Einführung

Mit GitHubs Online-Editor können Sie nur mit Ihrem Browser Dateien ändern und erstellen.  
Möglicherweise ist es nicht so vielseitig wie [mit einer lokalen Kopie](/Contribute/LocalClone/CreateCommit/) , aber Sie müssen sich keine Sorgen machen über [git](/Contribute/LocalClone/InstallingGit/) und alle einzurichten.

Diese Anleitung zeigt Ihnen, wie Sie eine neue Wiki-Datei mit dem Online-Editor von githubs erstellen.  
Ihr Hauptgrund für das Hinzufügen neuer Seiten ist wahrscheinlich, dass fehlende Informationen ausgefüllt werden aber vielleicht möchtest du auch einen Beispiel-Wiki-Eintrag für einen bestimmten Mod-Handler hinzufügen was auch immer der Grund ist, zögern Sie nicht, Änderungen zu übertragen und schließlich [eine Pull Request](/Contribute/PullRequest) einzureichen.

Denken Sie jedoch daran, dass Sie die englische Version erstellen müssen Übersetzungen werden dann über [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) bearbeitet (aber erst nachdem die PR zusammengeführt wurde).

## Wo die Datei erstellt werden soll

Theoretisch spielt es keine Rolle, wo Sie Ihre Datei setzen, aber versuchen Sie bitte, das aktuelle Schema anzupassen:

- Alle Dateien müssen in der `-Dokumentation` Ordner sein.
- Die Dateistruktur sollte mit den Navigationsleistenkrümmern übereinstimmen. Beispiel: Wenn Sie die Navigationsleiste im Wiki verwenden, finden Sie `ICraftingRezept` in `Vanilla/Rezepte/Handwerkstisch Rezepte/ICraftingRezept`. Die Datei für ICraftingRecipe kann unter `docs/Vanilla/Recipes/Crafting/ICraftingRecipe.md` gefunden werden. Wie Sie sehen können, passen die Pfade nicht genau zusammen, aber sie reichen aus, um die Datei zu finden.
- Alle Informationen für einen Mod sollten in einer Gruppe/einem Ordner bleiben.

## Datei erstellen

Nachdem Sie erfolgreich den Pfad Ihrer zukünftigen Datei gefunden haben, navigieren Sie zu dem Ordner, der die Datei in GitHub enthalten wird, falls diese vorhanden ist.  
Keine Sorge, wenn es nicht existiert, können Sie die Datei trotzdem erstellen.

Sagen Sie, dass Sie eine Datei namens `Secret_Information erstellen möchten. d` in `docs/AdvancedFunctions`:  
Finden Sie den Pfad in GitHub und klicken Sie auf `Neue Datei anlegen` ![Datei-Schaltfläche erstellen](/Contribute/assets/OnlineEditor_CreateFileButton.png)

Sie werden nun mit der neuen Datei-Editor-Seite angezeigt.  
Zuerst sehen Sie oben den Pfad der Datei, die erstellt wird. Wenn wir wollen, dass die Datei genau in dem Verzeichnis erstellt wird, das im Pfad angezeigt wird, wir brauchen nur einen Dateititel und eine Dateiendung anzugeben. Denken Sie daran, dass alle Wiki-Eintragsdateien die `.md` Endung haben sollten, da dieses Wiki Markdown verwendet.

Wenn Sie wollen, dass die Datei in einem (möglicherweise nicht existierenden) Unterordner oder sogar mehreren Ordnern im Pfad erstellt wird, Sie können `/` verwenden, um Ordnernamen zu trennen (wie Sie bereits im angegebenen Pfad sehen können).

Mit dem Editor können Sie die Datei nach Belieben erstellen und auch direkt eine Vorschau der kompilierten Formatierung anzeigen.

Wenn die Syntax der Dateien neu für Sie ist, verwendet das Wiki MarkDown. Es sollte viele Tutorials geben, die du mit Google finden kannst (oder du kannst eines direkt hier zu diesem Wiki hinzufügen, wenn du möchtest).

## Datei zum Index hinzufügen

Nachdem Sie die Datei erstellt haben und die Erstellung übernommen haben (siehe unten) müssen Sie die Datei ebenfalls zum Index hinzufügen so dass es später in der Navigationsleiste angezeigt werden kann.

Dieser Index ist die `mkdocs.yml` Datei.

Diese Datei enthält alles, was benötigt wird, um das Wiki zu erstellen und du musst sicherstellen, dass es nicht kaputt geht (obwohl wir dir sagen werden, ob deine PR ein Build zerstört, sollte es dazu kommen)!

Alles, was Sie tun müssen, ist Ihre Datei und Kategorien zur Liste `Seiten` hinzuzufügen.  
Das Format ist ziemlich direkt:

- Einträge beginnen mit einem `-`
- Dann kommt der (angezeigte, englische) Name für die Gruppe oder den Eintrag, gefolgt von einem `:`
- Wenn Sie eine Gruppierung erstellen (z.B. `Vanilla` oder `Mods`) fahren Sie in der nächsten Zeile mit zwei eingefügten Leerzeichen fort.
- Wenn Sie eine tatsächliche Referenz auf eine Seitendatei erstellen, fügen Sie sie in die gleiche Zeile, nach dem `:` und einem Leerzeichen. Stellen Sie sicher, dass Sie es in einfache Anführungszeichen `'` einpacken, um sicherzustellen, dass die Erstellung wie erwartet funktioniert. Der Pfad ist relativ zur `Dokumentation` Ordner, also wird `docs/Vanilla/Commands.md` zu `Vanilla/Commands.md`.

Beispiele finden Sie in der [aktuellen mkdocs.yml Datei auf github](https://github.com/CraftTweaker/CraftTweaker-Documentation/blob/master/mkdocs.yml). Alternativ können Sie diese Datei bearbeiten und hier Ihr eigenes Beispiel hinzufügen.

## Änderungen speichern/übertragen

*Hinweis: Diese Beschreibung stammt aus der Anleitung zur Bearbeitung von Dateien, aber die gleichen Prinzipien gelten für Sie als Ersatz für Ihre eigene Version, falls nötig*

Nachdem Sie den Dateiinhalt erstellt haben, müssen Sie GitHub wissen lassen, dass Sie Ihre Änderungen speichern möchten.

Dafür ist das Commit-Feld unter Ihrem Editor:  
Sie können die Datei nicht einfach speichern Sie müssen eine Zusammenfassung dessen, was Sie getan haben (Commit-Titel) und optional eine kurze Beschreibung angeben, in der Sie zusätzliche Informationen einfügen können, wie warum Sie die Änderungen vorgenommen haben oder was genau geändert wurde.

Standardmäßig sieht es ungefähr so aus:  
![Commit Box Standard](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

In diesem Beispiel lautet der Commit Titel (oder Zusammenfassung bearbeiten) `Arrays_and_Loops.md aktualisieren`. GitHub kann nicht wissen, was Ihre tatsächlichen Änderungen eigentlich tun sollten, daher versucht es etwas so allgemeines wie dieses.

Vielleicht möchten Sie einen zusätzlichen Titel oder eine zusätzliche Beschreibung hinzufügen, aber es ist nicht notwendig, wenn Sie später Ihre Pull-Anfrage überprüfen möchten.

Wenn Sie mehrere E-Mail-Adressen für Ihr GitHub Konto registriert haben, können Sie wählen, wie Sie die Übertragung erstellen wollen. Dies wird jedoch keine wirklichen Auswirkungen auf den Beitrag haben.  
Sie können auch entscheiden, ob Sie direkt zu Ihrem Hauptzweig übertragen oder lieber einen neuen Zweig für Ihren Commit erstellen möchten. In den meisten Fällen funktioniert das Commitment zu Ihrem Hauptzweig.

A filled out example might look like this: ![Commit Box ausgefüllt](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## Was als nächstes zu tun

Nachdem Sie Ihre Änderungen übernommen haben, können Sie [fortfahren und](/Contribute/OnlineEditor_Edit) bearbeiten oder weitere Dateien mit dem Online-Editor erstellen.  
Nachdem Sie alle Ihre Änderungen vorgenommen haben, können Sie [eine Pull Request](/Contribute/PullRequest) ablegen.