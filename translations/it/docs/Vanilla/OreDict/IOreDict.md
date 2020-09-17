# IOreDict

Il Forge OreDictionary è come un enorme Lexicon nel modo in cui presenta molte voci diverse e ogni voce è descritta da elementi adattabili.  
Quando si parla di ore dizionari, le persone si riferiscono principalmente a [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) non a tutto il dizionario minerario.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.oredict.IOreDict;`

## Come recuperare l'oreDictionary

È possibile recuperare l'OreDictionary utilizzando la parola chiave globale [`oreDict`](/Vanilla/Global_Functions/).

## Metodi

Quindi cosa si può fare con l'oreDict?

### Ottenere un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

È possibile utilizzare uno dei tre modi qui sotto per fare riferimento a un OreDictEntry, non importa se esiste già o no.  
Se l'oreDictEntry non esiste ancora, verrà creato.

```zenscript
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### Iterating through all registered [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/)

```zenscript
//il membro delle iscrizioni è per recuperare tutte le voci di oreDictionary registrate!
val allEntries = oreDict.entries;

for oreDictEntry in allEntries{
    print(oreDictEntry. ame);
}

//In alternativa, puoi semplicemente iterare attraverso oreDict
per la voce in oreDict {
    print(entry.name);
}

```

## Come verificare se esiste una voce di dizionario minerale

È possibile utilizzare il `in` o `ha` operatore per verificare se un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) esiste già:

```zenscript
if (oreDict in "ingotIron") {
    print("ingotIron esiste! );
}

if (oreDict has "ingotIron") {
    print("ingotIron exists! );
}


//In alternativa utilizzare la funzione contiene:
if(oreDict. ontains "ingotIron") {
    print("ingotIron esiste!"); 
}
```