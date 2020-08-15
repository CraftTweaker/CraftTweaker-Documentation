# ProjectE

## Verrou EMC

Depuis la version 1.5.0, CompatSkills prend en charge EMC Locks pour les objets.

## AVIS

Depuis la version 1.9.0, les verrous EMC ont été modifiés :

    Support du projet modifié pour bloquer l'apprentissage de la transmutation et la multiplication des condenseurs.
    La syntaxe est la même qu'avant mods.compatskills.EMCLock.addEMCLock(int emc, String... exigences);
    Les joueurs pourront utiliser des objets qui ne correspondent pas au verrouillage d'emc mais ne pourront pas apprendre ou dupliquer cet objet. L'apprentissage et le dédoublement exigent maintenant que le joueur réponde à toutes les exigences que l'objet a sur lui.
    Note : Si vous mettez des éléments dans la table de transmutation, vous gagnerez quand même l'emc mais ne pourrez pas récupérer l'objet.
    

### Syntaxe :

    // Exemple:
    mods.compatskills.EMCLock.addEMCLock(int emc, String... verrouillé)
    
    // Exemple:
    mods.compatskills.EMCLock.addEMCLock(8192, "reskillable:mining|5", "reskillable:magic|7")