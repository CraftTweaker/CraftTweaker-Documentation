# Abilità Personalizzate

## Crediti:

I crediti vanno a Kindlich per aver scritto la maggior parte dell'implementazione dei Contenuti Personalizzati!

## Abilità Personalizzate:

### Sintassi Di Implementazione:

    Esempi:
    mods.compatskills.SkillCreator.createSkill(nome string, String backGroundLocation)
    mods.compatskills.SkillCreator.createNewSkill(Nome string, String backGroundLocation)
    
    "createSkill" assegna automaticamente il CompatSkills ModID al Nome Resource Location.
    Quindi per esempio:
    mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");
    
    internamente tornerebbe:
    "compatskills:banana" come nome della posizione delle risorse per l'abilità.
    
    Il secondo non ha nessun ModID assegnato significa che è possibile inserire il proprio.
    mods.compatskills.SkillCreator.createNewSkill("pokemon:throwing", "textures/blocks/stonebrick.png")
    

### ZenProperties

| Riferimento | Nome Proprietà | Attuazione |
|:----------- |:-------------- | ---------- |
| CrTSkill    | nome           | Vedi Sotto |

    // Crea l'abilità come variabile
    var banana = mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick. ng");
    
    // Hard-Sets the name to "Banana"
    // Siate consapevoli che questo rende impossibile la localizzazione attraverso i file .lang!
    banana.name = "Banana"
    

### ZenSetters/ZenGetters

| Tipo Di Metodo | Nome Metodo           | Valori                                                       |
|:-------------- |:--------------------- | ------------------------------------------------------------ |
| Setter         | setLevelCap           | Prende un Intero                                             |
| Getter         | getLevelCap           | Restituisce un Intero                                        |
| Setter         | setEnabled            | Prende un booleano                                           |
| Getter         | getEnabled            | Restituisce un booleano                                      |
| Setter         | setSkillPointInterval | Prende un Intero                                             |
| Setter         | setBaseLevelCost      | Prende un Intero                                             |
| Getter         | getBaseLevelCost      | Restituisce un Intero                                        |
| Getter         | getName               | Restituisce il nome della stringa localizzata                |
| Setter         | setLevelStaggering    | Prende una stringa[], vedere la configurazione per l'esempio |
| Getter         | getLevelStaggering    | Restituisce una Stringa[]                                    |
| Setter         | setHidden             | Prende un booleano                                           |
| Getter         | isHidden              | Restituisce un booleano                                      |

### Localizzazione & Riferimento Posizione Risorse:

    Icone abilità:
    
    Either:
    
    - mods.compatskills.SkillCreator.createSkill(nome string, String backGroundLocation);
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.SkillCreator. reateNewSkill(String nameLocation, String backGroundLocation);
        - customResourceLocation:/textures/skills/skillname.png
    
    
    Le localizzazioni sono inserite in:
    
    - compatskills:lang/localeCode.lang
    
    o
    
    - customResourceLocation:lang/localeCode.lang
    

Vai a questo link per vedere tutti i possibili Codici locali! [Pagina della lingua di Minecraft di Gamepeda](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")