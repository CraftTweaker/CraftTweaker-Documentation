# OreDictionary Sperren

## Merkmal:

Diese Sperre fügt die Fähigkeit hinzu, alle Elemente zu sperren, die unter einem bestimmten Wörterbuch-Tag liegen. Dies bedeutet, dass wenn du den Eintrag des Erzwortbuchs von "oreIron" blockierst, jeder Baustein mit dem Tag "oreIron" hinter den festgelegten Anforderungen gesperrt wäre. Dieser Sperrungstyp unterstützt auch einen [IData](/Vanilla/Data/IData/) Parameter, was bedeutet, dass er nur die Dinge unter dem Ore-Dict Tag IF beeinflusst. Sie haben ein passendes IDATA Tag zu dem der Sperre zur Verfügung steht.

## Syntax:

    mods.compatskills.OreDictLock.addOreDictLock(IOreDictEntry entry, String... gesperrt);
    mods.compatskills.OreDictLock.addNBTOreDictLock(IOreDictEntry Eintrag, IData Tag, String... gesperrt);
    
    mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim|1");
    mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, IData Tag, "dim|1");