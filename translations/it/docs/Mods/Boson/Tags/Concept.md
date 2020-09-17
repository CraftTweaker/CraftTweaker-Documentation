# Etichette

I tag sono un concetto potente che è stato presente in Vanilla Minecraft dal 1.13. Permette ai giocatori e ai creatori di datapack di definire un insieme di elementi da considerare gli stessi in un determinato contesto, rimuovendo alcuni dei blocchi e degli elementi nel codice.

I tag sono rappresentati come un insieme di file JSON posizionati nella directory `data/<namespace>/tags/<tag-type>` , dove `namespace` identifica lo spazio dei nomi a cui appartengono i tag, e `<tag-type>` il tipo di elementi che i tag gruppi.

Questo concetto può sembrare simile nel concetto al Dizionario di Ore, ed in realtà è quasi lo stesso. A differenza del dizionario minerario , tuttavia, i tag possono anche riferirsi l'un l'altro, con alcuni che agiscono come gruppi per altri. Inoltre, mentre il dizionario minerario funziona solo con gli elementi (es. le cose che possono essere inserite nel tuo inventario), i tag funzionano anche con blocchi, fluidi e altri tipi se necessario.

L'implementazione di Boson differisce da Vanilla a causa dell'enorme differenza nei cambiamenti interni in 1. 3, ma funziona quasi lo stesso, tranne per consentire l'estensione mod più facile con nuovi tipi di tag. Per questo motivo, l'integrazione CraftTweaker è anche diversa.

Per iniziare, leggi come [ottenere un tag tramite un gestore di parentesi](/Mods/Boson/Tags/BracketHandler/).
