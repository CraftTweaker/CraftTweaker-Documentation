# Blocco OreDictionary

## Caratteristica:

Questo blocco aggiunge la possibilità di bloccare tutti gli elementi che sono sotto un certo Tag Dizionario Minerale. Ciò significa che se si blocca la voce del dizionario minerario di "oreIron" qualsiasi oggetto/blocco con il tag "oreIron" sarebbe bloccato dietro i requisiti impostati. Questo tipo di blocco supporta anche un parametro [IData](/Vanilla/Data/IData/) che significa che influisce solo sulle cose sotto il tag Ore-Dict se hanno un tag IDATA corrispondente a quello fornito al blocco.

## Sintassi:

    mods.compatskills.OreDictLock.addOreDictLock(IOreDictEntrata, String... bloccato);
    mods.compatskills.OreDictLock.addNBTOreDictLock(IOreDictEntry, IData tag, String... locked);
    
    mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim<unk> 1");
    mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, IData tag, "dim<unk> 1");