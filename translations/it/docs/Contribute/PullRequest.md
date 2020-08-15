# Filing a PullRequest

## Prerequisiti

Devi aver [creato](/Contribute/OnlineEditor_Create) e/o [modificato](/Contribute/OnlineEditor_Edit) file nel tuo fork della wiki.

## Introduzione

Dopo aver creato o modificato qualsiasi cosa stavi cercando di fare, è necessario ottenere le modifiche al repository originale.  
Questa guida ti mostrerà come creare una PR per applicare le tue modifiche alla wiki attuale.

Una Pull Request (o PR per breve) ti permette di applicare i tuoi commit al codice originale.  
In altre parole, ti permette di rendere visibili le tue modifiche a tutti coloro che visitano la wiki.

## Apertura della richiesta Pull

Quando torni alla pagina GitHub della tua fork, noterai la barra delle informazioni dei rami.  
Questa barra ti dice come la tua versione del fork differisce da quella originale.

Ad esempio, il quadro sottostante contiene tre impegni che non sono ancora stati applicati al CrT-wiki mentre altri tre impegni sono stati creati in quello originale che non sono stati applicati alla forchetta.

![Pulsante Richiesta Preleva](/Contribute/assets/PullRequest_Compare_PullRequestButton.png)

Se si fa clic sul pulsante "Pull Request" si aprirà una nuova visualizzazione, la vista Confronta .  
Nella maggior parte dei casi è già definito correttamente per utilizzare il ramo master Originale CraftTweaker/CraftTweaker-Documentation come destinazione e il ramo come modifiche da tirare.

Github verificherà anche che non ci siano conflitti tra i tuoi cambiamenti e ciò che è lo stato attuale della wiki.  
Nel caso in cui trovi qualsiasi disaccordo ti avviserà, anche se puoi ancora creare la PR e chiedere il nostro aiuto per risolvere i conflitti.

Ora tutto ciò di cui hai bisogno è fornire un titolo descrittivo e una descrizione che ci dirà circa i cambiamenti.

Notare anche la casella di controllo `Consenti modifiche dai principali` .  
Questa casella consente alle persone con accesso di scrittura al CrT-Repo (e. . Membri dell’organizzazione CraftTweaker) per modificare i file della vostra PR al fine di risolvere i conflitti di fusione, per esempio.

![New PR Tool](/Contribute/assets/PullRequest_Create.png)

In fondo è possibile verificare che tutte le modifiche saranno incluse nel PR.

## Prossimi Passi

Successivamente, qualcuno della CrT-Organization o qualsiasi collaboratore può guardare sopra la vostra PR e lasciare commenti o suggerimenti generali.  
Se qualcuno della CrT-Organization fa una recensione PR, verrai avvisato di tutti i commenti e se devi o meno cambiare qualcosa prima che venga unito.  
Dopo che tutti i suggerimenti sono stati risolti, qualcuno unirà il PR.