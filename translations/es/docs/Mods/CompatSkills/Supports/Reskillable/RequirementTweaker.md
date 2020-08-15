# Requerir Tweaker

## PSA:

A partir de 1.2.0 y adelante, Reskillable está siendo desarrollado activamente para mejorar los internos de los Sistemas de Bloqueo de Reskillable y CompatSkill. Se trata de un esfuerzo por permitir mecanismos de bloqueo más poderosos en el futuro.

## Bloqueo requerido:

Actualmente el soporte principal de CrT es para el bloqueo de requerimientos. Esto también se puede conseguir a través del sistema de configuración. ¡Sin embargo, el sistema de configuración **NO** soporta NBT!

### Sintaxis:

    // Ejemplo en blanco:
    mods.compatskills.Requirement.addRequirement(IItemStack item, String... bloqueado)
    
    Ejemplos de trabajo:
    
    // Añade un bloqueo para el Pico de Diamante con un comodín Metadata
    mods.compatskills. equirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");
    
    // Añade un bloqueo NBT para Efficiencia 5
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining|5", "reskillable:magic|7");
    
    // Añade un bloqueo NBT para Toque de Seda
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining|6", "reskillable:agility|7");
    
    // Añade un bloqueo NBT para Unbreaking 3
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining|7", "reskillable:attack|7");
    

Ejemplo de 3 candados de encantamiento que se combinan en una sola cerradura:

![Bloqueo impresionante](https://i.imgur.com/gCfETAh.png)