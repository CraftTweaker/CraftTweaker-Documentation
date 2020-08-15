# Abilità personalizzate & tratti

## Crediti:

I crediti vanno a Kindlich per aver scritto la maggior parte dell'implementazione dei Contenuti Personalizzati!

## Tratti Personalizzati:

### Sintassi Di Implementazione:

    Esempi:
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, CrTSkill parentSkill, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, CrTSkill parentSkill, int cost, @Optional String... requisiti)
    
    
    "traitName" VS "traitLocation" è lo stesso che in Abilità.
    
    "CrTSkill parentSkill" è il Gestore di staffe di abilità.
    
    
    Quindi un esempio funzionale sarebbe:
    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    var test1 = mods. ompatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana<unk> 5");
    var test2 = mods. ompatskills.TraitCreator.createTrait("broken:test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    var test3 = mods.compatskills.TraitCreator.createTrait("broken:test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana<unk> 5");
    

### ZenProperties

| Riferimento | Nome Proprietà | Attuazione |
|:----------- |:-------------- | ---------- |
| CrTTrait    | nome           | Vedi Sotto |
| CrTTrait    | descrizione    | Vedi Sotto |

    // Crea il tratto come variabile
    var trait = mods.compatskills.TraitCreator. reateTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    
    // Hard-Sets the name to "Test"
    // Attenzione questo rende la localizzazione attraverso i file .lang non possibile!
    trait.name = "Test"
    
    // Hard-Sets the description to "Ciao, I'm a Description"
    // Essere consapevoli che questo rende la localizzazione attraverso i file .lang non è possibile!
    trait.description = "Ciao, sono una descrizione"
    

### ZenSetters/ZenGetters

| Tipo Di Metodo | Nome Metodo    | Valori                                                         |
|:-------------- |:-------------- | -------------------------------------------------------------- |
| Setter         | setEnabled     | Prende un booleano                                             |
| Getter         | getEnabled     | Restituisce un booleano                                        |
| Getter         | getName        | Restituisce il nome della stringa localizzata del Trait        |
| Getter         | getDescription | Restituisce la descrizione della stringa localizzata del Trait |
| Getter         | recuperaIcona  | Restituisce una Posizione Risorsa                              |
| Setter         | changIcon      | Prende una Stringa di Posizione Risorsa                        |

### Localizzazione & Riferimento Posizione Risorse:

    Icone di tratto:
    
    Either:
    
    - mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... requirements);
        - compatskills:textures/unlockables/traitname.png
    
    - mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Optional String... requirements);
        - customResourceLocation:/textures/unlockables/traitname.png
    
    
    Localizations are placed in:
    
    - compatskills:lang/localeCode.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

Vai a questo link per vedere tutti i possibili Codici locali! [Pagina della lingua di Minecraft di Gamepeda](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")