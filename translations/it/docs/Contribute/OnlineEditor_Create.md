# Crea file utilizzando l'editor online di GitHub

## Requisiti

Dovrai aver creato un account GitHub e [forked la wiki sul tuo account](/Contribute/SetupGithub).

## Introduzione

L'editor online di GitHub ti permette di modificare e creare file utilizzando solo il tuo browser.  
Potrebbe non essere così versatile come [usando una copia locale](/Contribute/LocalClone/CreateCommit/) ma non devi preoccuparti di [impostare git](/Contribute/LocalClone/InstallingGit/) e tutti.

Questa guida ti mostrerà come creare un nuovo file wiki utilizzando l'editor online di github.  
La ragione principale per l'aggiunta di nuove pagine è molto probabile che riempia le informazioni mancanti, ma forse vuoi anche aggiungere una voce wiki di esempio per un dato gestore di mod, qualunque sia il motivo, sentitevi liberi di eseguire il commit delle modifiche e alla fine [file una Pull Request](/Contribute/PullRequest).

Tuttavia, ricordate che è necessario creare la versione inglese, le traduzioni vengono poi gestite tramite [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) (ma solo dopo che la PR è stata unita).

## Dove creare il file

Teoricamente, non importa dove metti il tuo file, ma prova ad adattarsi allo schema attuale:

- Tutti i file devono essere nella cartella `docs`.
- La struttura del file deve corrispondere alle briciole della barra di navigazione. Esempio: Quando si utilizza la barra di navigazione nella wiki, `ICraftingRicetta` può essere trovato in `Vaniglia / Ricette / Ricette Tavolo di Creazione Ricette / ICraftingRicetta`. Il file per ICraftingRecipe può essere trovato in `docs/Vanilla/Recipes/Crafting/ICraftingRecipe.md`. Come puoi vedere, i percorsi non corrispondono esattamente ma sono sufficienti per trovare il file.
- Tutte le informazioni per una mod dovrebbero rimanere in un gruppo/cartella.

## Crea il file

Dopo aver individuato con successo il percorso del tuo file futuro, vai alla cartella che conterrà il file in GitHub, se esiste.  
Non preoccuparti se non esiste, puoi ancora creare il file.

Dire che si desidera creare un file chiamato `Secret_Information. d` in `docs/AdvancedFunctions`:  
Trova il percorso in GitHub e clicca `Crea nuovo file` ![Crea Pulsante File](/Contribute/assets/OnlineEditor_CreateFileButton.png)

Ora ti viene presentata la nuova pagina dell'editor di file.  
Per prima cosa, in alto puoi vedere il percorso del file che verrà creato. Se vogliamo che il file sia creato esattamente nella directory che viene mostrata nel percorso, abbiamo solo bisogno di fornire un titolo di file ed estensione. Ricorda, tutti i file di inserimento wiki dovrebbero avere l'estensione `.md` , dal momento che questa wiki utilizza markdown.

Se si desidera che il file sia creato in una sottocartella (forse inesistente) o anche in più cartelle lungo il percorso, puoi usare `/` per separare i nomi delle cartelle (come puoi già vedere nel percorso specificato).

L'editor consente di creare il file come ti piace, e anche di visualizzare direttamente un'anteprima della formattazione compilata.

Se la sintassi dei file è nuova per te, la wiki utilizza MarkDown. Ci dovrebbero essere molti tutorial da trovare usando Google (o puoi aggiungerne uno proprio qui a questa wiki se vuoi).

## Aggiunge il file all'indice

Dopo aver creato il file e aver effettuato la creazione (vedi sotto) dovrai aggiungere anche il file all'indice, in modo che possa essere visualizzato nella barra di navigazione più tardi.

Questo indice è il file `mkdocs.yml`.

Questo file contiene tutto ciò che è necessario per creare la wiki, e è necessario assicurarsi di non romperlo (anche se vi diremo se la vostra PR rompe una costruzione dovrebbe venire a quello)!

Tutto quello che devi fare è aggiungere il tuo file e le categorie all'elenco `pagine` .  
Il formato è piuttosto semplice:

- Le voci iniziano con un `-`
- Poi viene il nome (mostrato, inglese) per il gruppo o la voce, seguito da un `:`
- Se stai creando un raggruppamento (es. `Vanilla` o `Mods`) procedi sulla riga successiva, con due spazi in linea.
- Se stai creando un riferimento effettivo a un file di pagina, aggiungilo sulla stessa linea, dopo `:` e uno spazio. Assicurati di avvolgerlo in virgolette singole `'` per assicurarti che la build funzioni come previsto. Il percorso è relativo alla cartella `docs` , quindi `docs/Vanilla/Commands.md` diventa `Vanilla/Commands.md`.

Per esempi controllare il file [corrente mkdocs.yml su github](https://github.com/CraftTweaker/CraftTweaker-Documentation/blob/master/mkdocs.yml). In alternativa, modifica questo file e aggiungi qui il tuo esempio.

## Salva/Commit le modifiche

*Nota: Questa descrizione proviene dalla guida dei file di modifica, ma gli stessi principi si applicano, non esitate a sostituire con la vostra versione se necessario*

Dopo aver creato il contenuto del file devi far sapere a GitHub di voler salvare le modifiche.

Questo è quello che la casella di commit sotto il tuo editor è:  
Non puoi semplicemente salvare il file, devi fornire un riepilogo di quello che hai fatto (titolo di commessa) e opzionalmente una breve descrizione in cui puoi inserire informazioni aggiuntive come il motivo per cui hai fatto le modifiche o quello che è stato cambiato esattamente.

Per impostazione predefinita assomiglia approssimativamente a questo:  
![Casella Di Commit Predefinita](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

In questo esempio, il titolo del Commit (o il riepilogo della modifica) è `Aggiorna Arrays_and_Loops.md`. GitHub non può sapere quali dovrebbero essere i tuoi cambiamenti effettivi, quindi cerca qualcosa di generico come questo.

Potresti voler aggiungere un titolo o una descrizione aggiuntiva, ma non è necessario, anche se rende la revisione della tua richiesta Pull più facile.

Se hai più indirizzi e-mail registrati per il tuo account GitHub, puoi scegliere come quello che creerai il commit. Tuttavia, ciò non avrà alcun impatto reale sul contributo.  
Puoi anche decidere se vuoi effettuare il commit direttamente nel tuo ramo principale o piuttosto creare un nuovo ramo per il tuo commit. Nella maggior parte dei casi impegnandosi al tuo ramo master funziona bene.

Un esempio completo potrebbe assomigliare a questo: ![Casella di commit riempita](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## Cosa fare il prossimo

Dopo aver effettuato le modifiche, puoi andare avanti e [modificare](/Contribute/OnlineEditor_Edit) o creare più file utilizzando l'editor online.  
Dopo aver completato tutte le modifiche, è possibile [archiviare una richiesta Pull](/Contribute/PullRequest).