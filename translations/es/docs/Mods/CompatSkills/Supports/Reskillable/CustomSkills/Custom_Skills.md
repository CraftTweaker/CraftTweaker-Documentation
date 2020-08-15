# Habilidades personalizadas

## Creditos:

¡Créditos van a Kindlich por escribir la mayor parte de la implementación de contenido personalizado!

## Habilidades personalizadas:

### Sintaxis de implementación:

    Ejemplos:
    mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation)
    mods.compatskills.SkillCreator.createNewSkill(String nameLocation, String backGroundLocation)
    
    "createSkill" asigna automáticamente el modo CompatSkills a la ubicación del nombre del recurso.
    Así que por ejemplo:
    mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");
    
    Volvería internamente:
    "compatskills:banana" como el nombre de la ubicación del recurso para la habilidad.
    
    La segunda no tiene ModID asignado, lo que significa que puede insertar el suyo propio.
    mods.compatskills.SkillCreator.createNewSkill("pokemon:throwing", "textures/blocks/stonebrick.png")
    

### Propiedades de Zeng

| Referencia | Nombre de Propiedad | Implementación |
|:---------- |:------------------- | -------------- |
| CrTSkill   | nombre              | Ver abajo      |

    // Crea la habilidad como una variable
    var banana = mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick. ng");
    
    // Establece el nombre en "Banana"
    // ¡Ten en cuenta que esto hace que la localización a través de archivos .lang no sea posible!
    banana.name = "Banana"
    

### ZenSetters/ZenGetters

| Tipo de método | Nombre del método     | Valores                                            |
|:-------------- |:--------------------- | -------------------------------------------------- |
| Setter         | setLevelCap           | Toma un entero                                     |
| Obtén          | getLevelCap           | Devuelve un entero                                 |
| Setter         | activado              | Toma un booleano                                   |
| Obtén          | habilitado            | Devuelve un booleano                               |
| Setter         | setSkillPointInterval | Toma un entero                                     |
| Setter         | setBaseLevelCost      | Toma un entero                                     |
| Obtén          | getBaseLevelCost      | Devuelve un entero                                 |
| Obtén          | getName               | Devuelve el nombre de cadena localizado            |
| Setter         | setLevelStaggering    | Tomar una cadena[], Ver Configuración para Ejemplo |
| Obtén          | getLevelStaggering    | Devuelve una cadena[]                              |
| Setter         | setHidden             | Toma un booleano                                   |
| Obtén          | isHidden              | Devuelve un booleano                               |

### Localización & Referencias de ubicación de recursos:

    Iconos de habilidad:
    
    Either:
    
    - mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation);
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.SkillCreator. reateNewSkill(String nameLocation, String backGroundLocation);
        - customResourceLocation:/textures/skillname.png
    
    
    Localizations are placed in:
    
    - compatskills:lang/localeCode.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

¡Ve a este enlace para ver todos los códigos locales posibles! [Página de idioma de Minecraft de Gamepedia](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")