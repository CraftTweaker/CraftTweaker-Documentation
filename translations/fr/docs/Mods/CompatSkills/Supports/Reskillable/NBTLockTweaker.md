# NBT-Lock Tweaker

## Verrouillage NBT

Les NBT-Locks sont spécifiques à CompatSkills 1.4.0+ et sont actuellement la fonctionnalité la plus puissante. Vous pouvez verrouiller des NBT-Tags spécifiques soit restreints à un mod-id donné soit à chaque élément du jeu.

Cela signifie que tout élément trouvé pour contenir cette balise NBT aura le verrou appliqué à elle.

### Syntaxe :

    // Exemple:
    mods.compatskills.NBTLock.addGenericNBTLock(balise IData, String... verrouillé)
    mods.compatskills.NBTLock.addModNBTLock(String modId, tag IData, String... verrouillé)
    
    //// Exemple de travail :
    // Verrouille Silk-Touch
    addGenericNBTLock({ench:[{id: 33 as short}]}, "reskillable:magic|10");
    
    // Verrouille Unbreaking (Aucun niveau spécifié)
    addModNBTLock("minecraft", {ench:[{id: 34 as short}]}, "reskillable:gathering|6");
    

Cela a de fortes implications. Cela signifie par exemple que vous en tant que fabricant de paquets pouvez verrouiller :

- Matériaux de Bricoleur
- Modificateurs de Tinker
- Enchantements
- Valeur-Énergie

Et bien plus encore, aussi longtemps que vous connaissez le NBT tag qu'il utilise!