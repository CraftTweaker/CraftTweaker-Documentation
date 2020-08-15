# Bemaßungssperre

## Bemaßungssperre

Diese Funktion ermöglicht es, die Möglichkeit zu sperren, bestimmte Dimensionen zu erreichen, sofern die Anforderungen nicht erfüllt sind!

### Syntax

    Leeres Beispiel:
    mods.compatskills.DimensionLock.addDimensionLock(int dimension, String... defaultRequirements);
    
    Arbeitsbeispiel:
    mods.compatskills.DimensionLock.addDimensionLock(-1, "reskillable:mining|5", "reskillable:magic|7");