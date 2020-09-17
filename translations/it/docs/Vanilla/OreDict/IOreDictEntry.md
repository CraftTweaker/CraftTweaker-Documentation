# IOreDictEntry

Quando il [IOreDict](/Vanilla/OreDict/IOreDict/) è il lessico, gli IOreDictEntries sono le voci del lessico.  
Sono costituiti da un nome (nome del dizionario) e da una spiegazione (tutti gli elementi corrispondenti).

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.oredict.IOreDictEntry;`

## Recupero di un tale oggetto.

Ci sono diversi modi per ottenere un oggetto IOreDictEntry: Se ci si riferisce a un oreDict che non esiste ancora, verrà creato.

- Usando la classe [IOreDict](/Vanilla/OreDict/IOreDict/).
- Utilizzando il [ore Bracket Handler](/Vanilla/Brackets/Bracket_Ore/).
- Utilizzando un [IItemEdition `ores` getter](/Vanilla/Items/IItemDefinition/).

## ZenGetters

È possibile utilizzare questi ricevitori per recuperare alcune informazioni sull'oredict:

| nome      | Descrizione                                       | Tipo di ritorno                          |
| --------- | ------------------------------------------------- | ---------------------------------------- |
| nome      | Restituisce il nome dell'oreDict's                | stringa                                  |
| vuoto     | Restituisce se il oreDict è vuoto                 | bool                                     |
| firstItem | Restituisce il primo degli oggetti dell'oreDict's | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethods

È possibile utilizzare questi metos su un oggetto IOreDictEntr:

### Aggiungi/Rimuovi elementi

```zenscript
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items);
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(IItemStack[] items);
oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### Controlla se un IOreDictEntry contiene un elemento

Puoi controllare se un IOreDictEntry contiene un elemento usando il `in` o `ha` parole chiave:

```zenscript
val oreDictEnt = <ore:ingotIron>;

//Durante l'utilizzo in è possibile
if(oreDictEnt in <minecraft:iron_ingot>){
    print("Iron is in the oreDict! );
}

//many prefer using has as might make more sense grammar-wise
if(oreDictEnt has <minecraft:iron_ingot>){
    print("Iron still is in the oreDict! );
}
```

### Specchia un IOreDictEntry

Mirroring a IOreDictEntry significa che tutti gli elementi presenti nell'altro oreDictEntry saranno sostituiti dagli elementi presenti nell'oreDictEntry il metodo è stato eseguito il:

```zenscript
//fare ferro e rame equivalenti
val ferro = <ore:ingotIron>;
val rame = <ore:ingotCopper>;

//aggiunge tutte le voci dal ferro al rame in modo che il rame contenga entrambi, le voci di ferro e rame oreDic
ferro. ddAll(rame); 


//specchi rame al ferro, quindi tutti gli oggetti in ferro saranno sostituiti da quelli in rame.
//In questo caso ciò significa da tutto il ferro e rame oreDictEntries
rame.mirror(ferro);
```

## Attuazione di IIngrediente

IOreDictEntry estende [IIngrediente](/Vanilla/Variable_Types/IIngredient/). Ciò significa che tutti i metodi disponibili per [IIngredient](/Vanilla/Variable_Types/IIngredient/) sono disponibili anche per IOreDictEntries. Significa anche che è possibile mettere IOreDictEntries in Array IIngredienti (come quelli nella creazione di metodi di ricetta).

### Iterando attraverso gli oggetti di un oreDictEntry

```zenscript
val iron = <ore:ingotIron>;

for item in iron.items{
    recipe.remove(item);
}
```