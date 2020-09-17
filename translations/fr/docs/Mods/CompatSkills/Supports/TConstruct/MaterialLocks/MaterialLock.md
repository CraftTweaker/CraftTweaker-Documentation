# Verrou matériel

## Verrouillage du Matériel

With the implementation of TConstruct support in CompatSkills 1.5.0. You now have the ability to lock:

    - Fabrication d'outil
    - Fabrication de pièces
    - Remplacement de pièce
    

Pour des matériaux spécifiques de construction de Tinker.

### Syntaxe :

    // Exemple:
    mods.compatskills.MaterialLock.addMaterialLock(String identifier, String... requirements);
    
    // Exemple:
    mods.compatskills.MaterialLock.addMaterialLock("bois", "reskillable:mining|5", "reskillable:magic|7");