# Clona

## Summary

Questa pagina mostra come clonare il tuo repository forked al tuo computer locale.

## Prerequisiti

Dovresti avere [Forked the CrT-wiki repository](/Contribute/SetupGithub/) e devi avere [Git installato](/Contribute/LocalClone/InstallingGit/).

## Primi passi

In primo luogo è necessario creare una cartella sul computer locale in cui si desidera clonare la wiki.  
Quindi è necessario aprire il prompt dei comandi o git bash in quella cartella.  
Utilizzerò git Bash ma la stessa procedura dovrebbe funzionare anche per il CMD.

Per aprire git bash basta navigare alla cartella e fare clic con il tasto destro del mouse:  
![Menu contestuale Explorer con opzione gitBash selezionata](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## Clonare la forchetta

Dopo aver aperto git Bash nella cartella, è necessario ottenere l'url repo.  
Puoi trovare questo url quando controlla il tuo fork su GitHub:

![Individuazione dell'url del repo](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

È necessario utilizzare tale URL. Utilizzeremo HTTPS per la clonazione, se sai come configurare SSH probabilmente non hai bisogno di questa guida.  
Puoi anche fare clic sul pulsante per copiare la stringa negli appunti.

Ora è necessario eseguire il comando `git clone <repo-Url>`:

![Clona comando](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![Comando clonazione riuscita](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Ora dovresti avere una nuova cartella chiamata `CraftTweaker-Documentation` nella tua directory.  
Passiamo ad esso e emettiamo un `stato git`:

![Cambia la directory e lo stato del git](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## Come continuare

Ora che hai un clone locale della wiki puoi iniziare a creare e modificare i file e infine [creare un commit](/Contribute/LocalClone/CreateCommit/).