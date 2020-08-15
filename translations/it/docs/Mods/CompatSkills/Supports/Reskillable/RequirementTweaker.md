# Requisito Tweaker

## PSA:

A partire da 1.2.0 e avanti, Reskillable è stato sviluppato attivamente per migliorare gli interni dei sistemi di bloccaggio Reskillable e CompatSkill. Si tratta di uno sforzo volto a consentire in futuro meccanismi di blocco più potenti.

## Requisito-blocco:

Attualmente il supporto CrT principale è per il blocco dei requisiti. Questo può essere realizzato anche attraverso il sistema di configurazione. Tuttavia il sistema di configurazione non **** supporta NBT!

### Sintassi:

    // Esempio vuoto:
    mods.compatskills.Requirement.addRequirement(IItemStack item, String... bloccato)
    
    Esempi di lavoro:
    
    // Aggiunge un blocco per il Piccone di Diamante con un Metadata Wildcard
    mods.compatskills. equirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining<unk> 4");
    
    // Aggiunge un blocco NBT per efficienza 5
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining<unk> 5", "reskillable:magic<unk> 7");
    
    // Aggiunge un blocco NBT per il tocco di seta
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining<unk> 6", "reskillable:agility<unk> 7");
    
    // Aggiunge un blocco NBT per Unbreaking 3
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining<unk> 7", "reskillable:attack<unk> 7");
    

Esempio di 3 serrature di incantesimo combinate in una singola serratura:

![Blocco Impressionante](https://i.imgur.com/gCfETAh.png)