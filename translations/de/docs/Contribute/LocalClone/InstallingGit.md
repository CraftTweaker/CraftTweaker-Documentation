# Installing Git

In order for you to [clone your forked repository](/Contribute/LocalClone/Clone/) you will need to install git.  
Git is a distributed version control system (basically, it's what GitHub, BitBucket and other version control services use).

## Hole Git

Sie können überprüfen, ob Git installiert ist, indem Sie die Befehlsaufforderung öffnen und den Befehl `git`ausführen.  
Wenn Sie die Benutzungsseite erhalten, dann haben Sie sie installiert und können diese Seite überspringen.  
Wenn Sie die Benutzungsseite nicht erhalten, dann haben Sie sie entweder nicht installiert oder Sie haben sie nicht Ihrem PATH hinzugefügt (siehe unten). In einem solchen Fall müssen Sie git installieren oder zu Ihrem Pfad hinzufügen:  
![CMD-Eingabeaufforderung, der Git-Befehl ausstellt, ohne dass Git installiert wird](/Contribute/LocalClone/assets/CMD_noGit.png)

### Git wird heruntergeladen und installiert

Wenn Sie Git nicht installiert haben, können Sie den Installer von [deren offizielle Seite](https://git-scm.com/downloads/)herunterladen.  
Wählen Sie Ihr Operationssystem aus, laden Sie das Installationsprogramm herunter, führen Sie es aus und folgen Sie den Anweisungen.  
Wenn Sie sich nicht sicher sind, welche Optionen Sie überprüfen sollen, lassen Sie diese als Standard ein.  
Wenn Sie nach der Einstellung Ihres bevorzugten Texteditors nicht fortfahren können, gehen Sie eine Seite zurück und gehen Sie dann wieder zur Seite in einigen Fällen wird dadurch der `nächste` Button angezeigt.

### Füge Git Ihrem PATH hinzu

Nachdem Sie Git installiert haben, sollte es Ihrem PATH hinzugefügt werden. Falls nicht, versuchen Sie zuerst, die Eingabeaufforderung zu schließen und zu öffnen.  
Wenn es Ihnen immer noch sagt, dass es nicht git ist, starten Sie Ihren Computer neu.  
Wenn es Ihnen immer noch mitteilt, dass es nicht git ist, müssen Sie es möglicherweise zu Ihrem Pfad hinzufügen.

Ich werde nicht abdecken, wie man es im Detail hinzuzufügen, alles, was Sie tun müssen, ist das Verzeichnis hinzuzufügen, in dem Sie git als Pfad installiert haben.  
Wenn Sie zum Beispiel Git zu `C:\Programme\Git` installiert haben, müssen Sie `C:\Programme\Git\cmd` zu Ihrem Pfad hinzufügen.  
Starten Sie danach die Eingabeaufforderung oder den Computer neu.

Technisch ist dies nicht erforderlich, aber es macht einige Befehle einfacher.

## Wie man fortfährt

Nachdem Sie git installiert haben, können Sie [Ihr geforktes Projektarchiv klonen](/Contribute/LocalClone/Clone/).