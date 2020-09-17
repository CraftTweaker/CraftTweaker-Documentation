# Utilità MiniBlocks

## Ottieni Mini Blocchi specifici

Questa è una funzione utile per ottenere un IIngrediente per un MiniBlock specifico in modo da poter evitare la strana NBT.

* Il parametro tipo specifica "siedere", "moulding" o "angolo"
* Il parentBlock è il blocco di cui il miniblock ha ottenuto la sua texture, perché questo parentBlock è un IIngredient cose come oredictionary anche funzionano.

```zenscript
mods.betterwithmods.MiniBlocks.getMiniBlock(String type, IIngredient parentBlock)


//Example
//Ottiene tutti i lati che hanno una base di assi
mods.betterwithmods.MiniBlocks.getMiniBlock("siding", <ore:plankWood>);
```