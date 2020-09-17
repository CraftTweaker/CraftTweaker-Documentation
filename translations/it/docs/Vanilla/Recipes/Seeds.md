# Semi

I semi sono cose che si ottiene da punzonando erba alta.

## Stampa tutti i semi nel log

Questo comando stamperà tutti i semi registrati nel log.

La necessità di essere eseguita da un giocatore o da una console, non può essere scritta in un file zs.

    1.12
    /ct seed
    
    pre-1.12
    /mt seed
    

## Aggiungi un seed drop

Aggiunge `elemento` come goccia di seme.  
**I pesi sono relativi al seme d'erba, che ha un peso di 10 (<unk> 10%)!**

```zenscript
vanilla.seeds.addSeed(articolo);
```

`item` is a [weightedItemStack](/Vanilla/Items/WeightedItemStack/). Che cosa significa? Significa semplicemente che è necessario dargli una percentuale come questa:

```zenscript
//aggiunge carote con un peso di 1
vanilla.seeds.addSeed(<minecraft:carrot> % 1);
```

## Rimuovi una goccia di semi

Ferma `l'oggetto` dall'essere un seed drop.

```zenscript
vanilla.seeds.removeSeed(item);
```

`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/).

## Recupera tutti i semi registrati

Restituisce tutti gli elementi come un [ponderedItemStack](/Vanilla/Items/WeightedItemStack/) List.

```zenscript
val seedList = vanilla.seeds.seeds;

for item in seedList {
    print("Item: " ~ item. tack.displayName ~ " <unk> <unk> Chance: " ~ item.percent ~ "%");
}
```