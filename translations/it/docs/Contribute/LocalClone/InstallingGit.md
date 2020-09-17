# Installing Git

Per poter [clonare il tuo repository forked](/Contribute/LocalClone/Clone/) dovrai installare git.  
Git è un sistema di controllo di versione distribuito (fondamentalmente, è quello che usano GitHub, BitBucket e altri servizi di controllo di versione).

## Ottenere Git

Puoi controllare se hai installato git aprendo il prompt dei comandi ed eseguendo il comando `git`.  
Se ottieni la pagina di utilizzo, la hai installata e puoi saltare questa pagina.  
Se non ottieni la pagina di utilizzo, non lo hai installato o non lo hai aggiunto al tuo PATH (vedi sotto). In un caso come questo dovrai installare git o aggiungerlo al tuo percorso:  
![Cmd Avverte il rilascio del comando git senza che git venga installato](/Contribute/LocalClone/assets/CMD_noGit.png)

### Scaricare e installare Git

Se non si dispone di git installato, è possibile scaricare l'installatore da [la loro pagina ufficiale](https://git-scm.com/downloads/).  
Scegli il tuo sistema operativo, scarica l'installatore, eseguilo e segui le istruzioni.  
Se non sei sicuro su quali opzioni controllare, lasciali come predefinite.  
Se non puoi procedere dopo aver impostato l'editor di testo preferito, tornare indietro di una pagina e poi andare avanti alla pagina di nuovo, in alcuni casi questo farà apparire il pulsante `successivo`.

### Aggiungere Git al tuo PERCORSO

Dopo aver installato Git, dovrebbe essere aggiunto al PATH. In caso contrario, prima prova a chiudere e aprire il prompt dei comandi.  
Se ti dice ancora che non sa git, riavvia il computer.  
Se ti dice ancora che non sa git, potresti dover aggiungerlo al tuo percorso.

Non coprirò come aggiungerlo in dettaglio, tutto quello che devi fare è aggiungere la directory in cui hai installato git come percorso.  
Se ad esempio hai installato Git a `C:\Program Files\Git` dovrai aggiungere `C:\Program Files\Git\cmd` al tuo percorso.  
Successivamente riavvia il prompt dei comandi o il computer.

Tecnicamente, questo non è necessario, ma rende alcuni comandi più facili.

## Come continuare

Ora che hai installato git puoi [clonare il tuo repository forked](/Contribute/LocalClone/Clone/).