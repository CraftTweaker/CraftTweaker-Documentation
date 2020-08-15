# Il Concetto

La maggior parte degli usi della matematica in ZenScript può essere coperta attraverso le quattro operazioni di base: aggiunta, sottrazione, moltiplicazione e divisione. ZenScript fornisce anche l'accesso alla funzione `pow` , che esegue l'operazione di potenza. Ma è così. Non è possibile eseguire operazioni matematiche più avanzate, e richiederebbe una reimplementazione completa con le tabelle di ricerca e non trarrebbe beneficio dalle ottimizzazioni dell'hardware a questo proposito, soprattutto per le moderne CPU.

È qui che entra in gioco ZenScriptX, fornendo una serie di classi e alcune operazioni aritmetiche di base che possono essere di utilità generale, pur beneficiando nella maggior parte dei casi di ottimizzazioni hardware, dal momento che la maggior parte di questi sono implementati a livello nativo (tramite un paio di indizi a causa della VM ZenScript funziona).

Ogni sezione di documentazione fornirà all'utente un elenco delle funzioni fornite e del loro comportamento.

L'elenco attuale delle classi fornite che sono implementate sono:

- [Matematica](/Mods/Boson/Math/Math/) per le funzioni matematiche comuni (es. seno, coseno, logaritmo...)
