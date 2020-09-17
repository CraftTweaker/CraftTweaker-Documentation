# Strumento Di Raccolta Livello-Blocco

## Caratteristica:

Questo blocco aggiunge la possibilità per gli autori del pacchetto di bloccare Strumenti in generale o specifici "tipi" strumento dietro il loro livello di raccolta. Ciò significa che è possibile bloccare tutti i picconi con un livello di raccolta di "3" dietro una serie di requisiti. O in generale tutti gli utensili con un livello di raccolta di 3 dietro una serie di requisiti!

## Sintassi:

    mods.compatskills.HarvestLock.addToolLevelLock(int level, String... requisiti);
    mods.compatskills.HarvestLock.addToolLevelLock(Tipo di stringa, livello int, String... requisiti);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim<unk> 1");
    mods.compatskills.HarvestLock.addToolLevelLock("pickaxe", 3, "dim<unk> 1");