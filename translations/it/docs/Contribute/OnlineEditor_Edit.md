# Modifica i file usando l'editor online di GitHub

## Requisiti

Dovrai aver creato un account GitHub e [forked la wiki sul tuo account](/Contribute/SetupGithub).

## Introduzione

L'editor online di GitHub ti permette di modificare e creare file utilizzando solo il tuo browser.  
Potrebbe non essere così versatile come [usando una copia locale](/Contribute/LocalClone/CreateCommit/) ma non devi preoccuparti di [impostare git](/Contribute/LocalClone/InstallingGit/) e tutti.

Questa guida ti mostrerà come modificare un file già esistente utilizzando l'editor online di github.  
Potresti voler modificare la pagina perché hai trovato un errore di battitura o vuoi includere un esempio migliore, qualunque sia il motivo, sentitevi liberi di eseguire il commit delle modifiche e alla fine [file una Pull Request](/Contribute/PullRequest).

Tuttavia, ricordate che è possibile modificare solo la versione inglese, le traduzioni sono gestite tramite [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/).

## Individua il file

Se si desidera modificare un file esistente, è necessario prima individuarlo.

Nella maggior parte dei casi è possibile trovare il file controllando il suo URL Wiki.

Regola della miniatura: La `#` è la cartella docs, tutto dopo che sono annidate le cartelle ed eventualmente il file.

Ad esempio, il file che crea  
[https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/](https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/)  
può essere trovato in  
`docs/AdvancedFunctions/Arrays_and_Loops.md`

## Modifica il file

Dopo aver trovato con successo il file, fare clic su di esso per aprirlo nella vista file GitHub.  
Qui puoi vedere come apparirà approssimativamente la voce wiki, anche se non è presente alcuna barra di navigazione in quanto questo è solo il contenuto dell'elemento.

Clicca sull'icona della penna per aprire l'editor: ![Pulsante Modifica](/Contribute/assets/OnlineEditor_EditButton.png)

L'editor consente di cambiare il file come ti piace, e anche di visualizzare direttamente un'anteprima con la formattazione compilata. Questa anteprima avrà barre colorate sul lato sinistro che indicano che:

- Verde: Questa sezione non era presente in questa pagina prima.
- Giallo: Questa sezione era presente in questa pagina prima, ma è stata modificata, ad esempio un errore di battitura è stato corretto, o sono state fornite informazioni supplementari.
- Rosso: Questa sezione era presente in questa pagina prima, ma è stata rimossa.
- Nessuno: Questa sezione è rimasta intatta.

Se la sintassi dei file è nuova per te, la wiki utilizza MarkDown. Ci dovrebbero essere molti tutorial da trovare usando Google (o puoi aggiungerne uno proprio qui a questa wiki se vuoi).

## Salva/Commit le modifiche

Dopo aver cambiato il file è necessario far sapere a GitHub di voler salvare le modifiche.

Questo è quello che la casella di commit qui sotto il tuo Editor è:  
Non puoi semplicemente salvare il file, devi fornire un riepilogo di quello che hai fatto (titolo di commessa) e opzionalmente una breve descrizione in cui puoi inserire informazioni aggiuntive come il motivo per cui hai fatto le modifiche o quello che è stato cambiato esattamente.

Per impostazione predefinita assomiglia approssimativamente a questo:  
![Casella Di Commit Predefinita](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

In questo esempio, il titolo del Commit (o il riepilogo della modifica) è `Aggiorna Arrays_and_Loops.md`. GitHub non può sapere quali dovrebbero essere i tuoi cambiamenti effettivi, quindi cerca qualcosa di generico come questo.

Potresti voler aggiungere un titolo o una descrizione aggiuntiva, ma non è necessario, anche se rende la revisione della tua richiesta Pull più facile.

Se hai più indirizzi e-mail registrati per il tuo account GitHub, puoi scegliere come quello che creerai il commit. Tuttavia, ciò non avrà alcun impatto reale sul contributo.  
Puoi anche decidere se vuoi effettuare il commit direttamente nel tuo ramo principale o piuttosto creare un nuovo ramo per il tuo commit. Nella maggior parte dei casi impegnandosi al tuo ramo master funziona bene.

Un esempio completo potrebbe assomigliare a questo: ![Casella Di Commit Riempita](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## Cosa fare il prossimo

Dopo aver effettuato le modifiche, puoi continuare a modificare o [Creare](/Contribute/OnlineEditor_Create) più file utilizzando l'editor online.  
Dopo aver completato tutte le modifiche, è possibile [archiviare una richiesta Pull](/Contribute/PullRequest).