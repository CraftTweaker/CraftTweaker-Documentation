# Verrouillage des dimensions

## Verrouillage des dimensions

Cette fonction permet de verrouiller la possibilité de voyager à des dimensions spécifiques, à moins que les exigences ne soient remplies!

### Syntaxe

    Exemple:
    mods.compatskills.DimensionLock.addDimensionLock(int dimension, String... defaultRequirements);
    
    Exemple de travail :
    mods.compatskills.DimensionLock.addDimensionLock(-1, "reskillable:mining|5", "reskillable:magic|7");