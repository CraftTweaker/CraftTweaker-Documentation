# Push

## Voraussetzungen

Sie müssen wissen, wie [Commits erstellt](/Contribute/LocalClone/CreateCommit/) und Sie müssen mindestens einen von ihnen erstellt haben.

## Was werden wir tun

Wir werden die Commit(s) verwenden, die wir erstellt haben (z.B. das Beispiel [erstellt Commits](/Contribute/LocalClone/CreateCommit/)) und die Änderungen auf GitHub übertragen.

## Aktuellen Status überprüfen

Wenn Sie `Git Status` ausführen, können Sie sehen, wie viele Commits Ihr lokaler Klon vor/hinter Ihrem Fork liegt.

In diesem Fall sind wir mit 1 Commit vorbei:  
![git Statusanruf](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git Push

Jetzt laufen wir `git push` um unsere Änderungen in den entfernten Zweig zu schieben.  
Möglicherweise werden Sie nach Ihrem GH-Benutzernamen und Passwort gefragt.  
**Vorsicht:** Wenn Sie die Zwei-Faktor-Autorisierung (2FA) verwenden, müssen Sie ein *Persönliches Zugangs-Token* anstelle Ihres GH-Passworts erstellen und verwenden!

![Anmeldedaten Dialog](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

To verify that the commit is actually on the fork, you can check the commit list that should now have the commit in there: ![Commit-Liste mit Commit](/Contribute/LocalClone/assets/Example1_CommitList.png)

## Wie man fortfährt

Nachdem Sie Ihre Änderungen nun auf Ihren Fork übertragen haben, können Sie GH verwenden, um [eine Pull-Request](/Contribute/PullRequest/)zu erstellen.  
Dies ist die gleiche Prozedur, als ob Sie den Online-Editor zur Bearbeitung von Dateien verwenden würden.