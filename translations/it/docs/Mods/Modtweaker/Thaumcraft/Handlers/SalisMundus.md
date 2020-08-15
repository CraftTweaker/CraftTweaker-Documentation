# Salis Mundus

Questo pacchetto consente di aggiungere i gestori di conversione per il gestore salis mundus di thaumcraft.  
Questi gestori vengono invocati quando fai clic su un blocco nel mondo con il salis mundus di Thaumcraft per cambiarli in qualcos'altro.

Se il risultato è un blocco, sarà posizionato nel mondo, se non verrà abbandonato come oggetto.

## Importa il pacchetto

Per abbreviare le chiamate di metodo è possibile [importare](/AdvancedFunctions/Import/) il pacchetto in questo modo:

```zenscript
import mods.thaumcraft.SalisMundus;
```

## Aggiungi Ricette

Puoi specificare un [IBlock](/Vanilla/Blocks/IBlock/) o un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).  
Se non specifichi una ricerca, questa ricetta sarà sempre possibile, se si decide di specificare una stringa di ricerca, è necessario che la ricerca sia sbloccata in modo che la conversione funzioni.

```zenscript
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus. ddSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## Rimuovi Ricette

È anche possibile rimuovere tutte le ricette che restituiscono un elemento corrispondente.  
Questo gestore controlla se il parametro fornito corrisponde all'oggetto di output, così puoi anche rimuovere tutte le ricette usando l'ingrediente wildcard `<*>`.

```zenscript
mods.thaumcraft.SalisMundus.removeSingleConversion(IIngredient output);

//Rimuove TUTTI i gestori registrati
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

//Rimuove solo il gestore crogiolo
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```