# Habilidades & rasgos personalizados

## Creditos:

¡Créditos van a Kindlich por escribir la mayor parte de la implementación de contenido personalizado!

## Rasgos personalizados:

### Sintaxis de implementación:

    Ejemplos:
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String SkillLocation, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, CrTSkill parentSkill, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String SkillLocation, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, CrTSkill parentSkill, int cost, @Optional String... requisits)
    
    
    "traitName" VS "traitLocation" es lo mismo que en Habilidades.
    
    "CrTSkill PaternSkill" es el Manejador de brazos de habilidad.
    
    
    Así que un ejemplo funcional sería:
    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test1 = mods. ompatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    var test2 = mods. ompatskills.TraitCreator.createTrait("broken:test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test3 = mods.compatskills.TraitCreator.createTrait("broken:test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    

### Propiedades de Zeng

| Referencia | Nombre de Propiedad | Implementación |
|:---------- |:------------------- | -------------- |
| CrTTrait   | nombre              | Ver abajo      |
| CrTTrait   | descripción         | Ver abajo      |

    // Crea el rasgo como una variable
    var trait = mods.compatskills.TraitCreator. reateTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    // Establece el nombre a "Test"
    // ¡Ten en cuenta que esto hace que la localización a través de archivos .lang no sea posible!
    trait.name = "Test"
    
    // Establece la descripción en "Hola, soy una Descripción"
    // ¡Ten en cuenta que esto hace que la localización a través de archivos .lang no sea posible!
    trait.description = "Hola, soy una descripción"
    

### ZenSetters/ZenGetters

| Tipo de método | Nombre del método | Valores                                                |
|:-------------- |:----------------- | ------------------------------------------------------ |
| Setter         | activado          | Toma un booleano                                       |
| Obtén          | habilitado        | Devuelve un booleano                                   |
| Obtén          | getName           | Devuelve el nombre de cadena localizado del Rasgo      |
| Obtén          | getDescripción    | Devuelve la descripción de cadena localizada del Rasgo |
| Obtén          | recuperar icono   | Devuelve una ubicación de recursos                     |
| Setter         | cambiar icono     | Tomar un Cadena de Ubicación de Recursos               |

### Localización & Referencias de ubicación de recursos:

    Iconos de rasgo:
    
    Oither:
    
    - mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String SkillLocation, int cost, @Optional String... requirements);
        - compatskills:textures/unlockables/traitname.png
    
    - mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String SkillLocation, int cost, @Optional String... requirements);
        - customResourceLocation:/textures/unlockables/traitname.png
    
    
    Las localizaciones se colocan en:
    
    - compatskills:lang/localeCode.lang
    
    o
    
    - customResourceLocation:lang/localeCode.lang
    

¡Ve a este enlace para ver todos los códigos locales posibles! [Página de idioma de Minecraft de Gamepedia](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")