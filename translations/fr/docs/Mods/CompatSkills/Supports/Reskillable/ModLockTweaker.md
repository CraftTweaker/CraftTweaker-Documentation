# Mod-Lock Tweaker

## Verrouillage des mods

Cela a été ajouté en tant que capacité pour les configurations en 1.2.0 et a maintenant une méthode CrT ZenMethod implémentée pour le supporter. Cela peut également être accompli par le biais des configurations comme mentionné précédemment.

Les Mod-Locks vous permettent de verrouiller tous les ItemStacks d'un mod spécifique derrière un verrou spécifique.

### Syntaxe :

    // Exemple vide
    mods.compatskills.ModLock.addModLock(String modId, String... verrouillé);
    
    // Exemple de travail :
    mods.compatskills.ModLock.addModLock("minecraft", "reskillable:building|4");
    
    Le verrou ci-dessus verrouillera tout depuis le mod "minecraft" derrière un verrou de "construction 4"