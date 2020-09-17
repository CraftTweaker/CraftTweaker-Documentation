# Invertierte Anforderungen:

## [NOTICE]

Invertierte Anforderungen sind veraltet und werden intern durch den NOT-Logical Operator ersetzt. Das bedeutet, dass die invertierten Anforderungen automatisch in einen NOT-Operator umgewandelt werden. Bitte verzichten Sie darauf, diese Anforderungsart zu verwenden, sie sind noch für **Legacy Support enthalten!**

## Invertierte Anforderungen

Invertierte Anforderungen sind nur eine 1.4.0+ CompatSkills-Funktion! Invertierte Anforderungen werden freigeschaltet, solange Sie nicht über die erforderliche Komponente verfügen. Eine Invertierte Fertigkeitsanforderung wird freigeschaltet, solange du nicht die angegebene Stufe der Fertigkeit oder höher hast.

Die invertierten Syntax lautet wie folgt:

    Beispiel:
    !adv|
    !dim|
    !stage|
    !skill|
    !trait|
    
    
    Beispiel:
    !adv|minecraft:husbandry/plant_seed
    !dim|0
    !stage|test
    !skill|reskillable:building|15
    !trait|reskillable:battle_spirit