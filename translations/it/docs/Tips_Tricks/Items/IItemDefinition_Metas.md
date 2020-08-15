# Utilizzando IItemDefinitions per risparmiare un sacco di tempo quando si riferiscono meta-elementi

## Problema

Diciamo che vogliamo rimuovere le ricette di alcuni colori specifici della lana.  
La lana bianca ha i metadati 0, tutti i colori vanno dal meta 1 al meta 15, quindi ci sono 16 in totale.

Vogliamo rimuovere le lane con meta 3 a 12. Che cosa facciamo?  
Non possiamo solo rimuoverli tutti (in altre parole, usa `<minecraft:wool:*>`), ma non vogliamo scrivere 10 volte la stessa cosa.  
Mentre in questo esempio questo funzionerebbe totalmente in larga scala diventa piuttosto fastidioso!

## Cosa sappiamo/abbiamo bisogno di sapere

- recipes.remove richiede un oggetto [IIngrediente](/Vanilla/Variable_Types/IIngredient/)
- Un [IItemStack](/Vanilla/Items/IItemStack/) può essere usato come [IIngrediente](/Vanilla/Variable_Types/IIngredient/) come [IItemstack](/Vanilla/Items/IItemStack/) estende [IIngrediente](/Vanilla/Variable_Types/IIngredient/)
- Possiamo usare [IItemDefinitions](/Vanilla/Items/IItemDefinition/) per creare [IItemStacks](/Vanilla/Items/IItemStack/)

## Soluzione

Usiamo [IItemDefinitions](/Vanilla/Items/IItemDefinition/) e un Intero Range e iteriamo attraverso quest'ultimo.  
Se non riusciamo a utilizzare un intervallo di int possiamo anche usare un vettore numerico, ma che richiederebbe di digitare tutti i numeri richiesti.  
È anche possibile utilizzare questo per Eccetto alcuni elementi da utilizzare.

```zenscript
val itemDef = <minecraft:wool>. efinition;

//does this for <minecraft:wool:3> to <minecraft:wool:12>
for i in 3 to 13{
    recipes.remove(itemDef. akeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] come int[];


//<minecraft:wool:3> to <minecraft:wool:12>
for i in numArray{
    itemDef. akeStack(i).addTooltip("Un-Craftable");
}

//<minecraft:wool:3> a <minecraft:wool:12>, ma senza 5 e 9
per i in 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Aiutami!");
    }
}

```