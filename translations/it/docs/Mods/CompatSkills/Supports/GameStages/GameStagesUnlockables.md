# Stage-Sbloccabili

## Sblocca

Questa parte del supporto GameStages si concentrerà sul modulo successivo. Aka "Tracciati Dummi" per sbloccare GameStages.

## Informazioni Sulle Risorse:

Quando si crea un nuovo tratto manichino, noterai alcune cose mancanti:

- Nome Non Localizzato
- Descrizione Non Localizzata
- Nessuna icona presente

Ciò è dovuto a queste cose che richiedono risorse. Allo stadio attuale CompatSkills non fornisce la capacità di fornire questi nativamente. Ci sono alcuni modi per aggirare questo:

- Utilizzare BASE che viene fornito con il proprio caricatore di risorse (funziona solo se ContentTweaker è presente a causa di come funziona BASE).
- Usa ResourceLoader di Lumien.

La localizzazione è piuttosto dritta.

    assets/compatskills/lang/en_us.lang
    
    en_us.lang = Traduzione Inglese
    

Tuttavia il percorso della trama per l'icona della caratteristica è il seguente:

    assets/compatskills/textures/unlockables/name.png
    
    Quindi se il nome è "banana", il percorso sarebbe il seguente:
    
    assets/compatskills/textures/unlockables/banana.png
    

### Sintassi:

    Esempio vuoto:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable(String gamestage, String name, int x, int y, String skillName, int cost, @Optional String... defaultRequirements);
    
    Esempio di lavoro(i):
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", "a", 0, 0, "reskillable:collecting", 3, "stage<unk> test");
    mods.compatskills.GameStageUnlockable. ddGameStageUnlockable("b", "b", 0, 1, "reskillable:collecting", 3, "adv<unk> minecraft:husbandry/plant_seed");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("c", "c", 0, 2, "reskillable:collecting", 3, "trait<unk> compatskills:b");