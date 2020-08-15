# Ignora Il Preprocessore Degli Errori Della Parentesi

Questo Preprocessore imposta lo script per ignorare gli errori del backet.  
Questo NON fa in alcun modo, forma o forma magicamente correggere il tuo script, soffia il log degli errori.

## Chiama

Puoi chiamare il preprocessore IgnoreBracketErrors inserendo `#ignoreBracketErrors` all'interno del tuo file di script.  
Questo preprocessore è specifico per il file, quindi chiamarlo su un file non influisce sugli altri (almeno non per ciò che il processore è interessato.

## Che cosa fa

Quando il preprocessore viene chiamato su un file, tutti gli errori di registrazione sulla parentesi verranno eliminati.  
Questo non cambia in alcun modo le linee interessate, invece l'unico cambiamento è che il tuo registro non conterrà le righe relative.