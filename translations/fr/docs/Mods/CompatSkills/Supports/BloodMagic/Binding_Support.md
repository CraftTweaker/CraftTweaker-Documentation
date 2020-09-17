# Support de liaison

## Lier :

Ceci annulera la liaison d'objet pour cet objet spécifique si le joueur ne remplit pas les conditions.

### Pré-1.4.0:

#### Syntaxe :

    Exemple:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack stack, String... requirements);
    
    Exemple:
    mods.compatskills.BindHandler.addBindLock("Les Energies Sombres inattendues tourbillonnent autour de vous et subventionnent", <bloodmagic:blood_orb>.withTag({orb: "Bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minec
    

### Post-1.4.0

À partir de CompatSkills 1.4.0, le verrouillage de liaison a été lancé dans le cadre du verrouillage des objets. Cela signifie qu'il n'y a plus de syntaxe de script dédié pour ajouter un verrou de liaison à un élément.

Ce changement a également été apporté avec quelques autres changements. Par exemple, le message d'erreur par défaut affiché a été modifié à certains égards :

- Il affiche maintenant en même temps que les exigences dans le chat en tant que message de statut de joueur uniquement
- Le message d'erreur est maintenant une chaîne localisable : 

    compatskills.bloodmagic.bindingError=Untold Dark Energies tourbillonnent autour de vous et subside
    

Cela signifie que les auteurs des packs de ressources peuvent maintenant localiser le message d'erreur dans la langue qu'ils veulent. Cela signifie également que vous pouvez utiliser des mods comme ResourceLoader ou Base (Avec ContentTweaker présent) pour changer la chaîne d'erreur.