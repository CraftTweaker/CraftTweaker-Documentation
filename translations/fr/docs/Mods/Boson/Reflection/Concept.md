# Le concept

La réflexion est un mot anglais qui a beaucoup de significations, mais un en particulier est "la production d'une image par ou comme si par un miroir" ([Source: Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/reflection)). Le même concept s'applique à la programmation.

La réflexion est en fait un outil qui permet à un programme de se voir dans le miroir et d'effectuer une certaine introspection, comme analyser quel type d'objet est, quelles méthodes le programme expose, invoquant des variables privées, etc. C'est évidemment un outil très puissant, mais en même temps, il est également extrêmement dangereux puisque la réflexion fournit un accès à presque tout ce qui est actuellement en cours d'exécution dans un programme.

Le projet ZenScriptX vise à apporter un petit sous-ensemble des possibilités de réflexion à ZenScript, sans permettre aux utilisateurs du script de contourner le bac à sable ZenScript. En particulier, l'implémentation de réflexion édulcorée de ZenScriptX permet à l'utilisateur de faire ce qui suit :

- inspecter le type de n'importe quel objet, qu'il s'agisse d'une variable ou d'un gestionnaire de parenthèses;
- obtenir le nom simple et pleinement qualifié d'une classe dans le bac à sable ZenScript ;
- obtenir le nom simple et pleinement qualifié d'une classe en dehors du bac à sable ZenScript ;
- convertir entre une classe ZenScript et son homologue natif (c'est-à-dire `crafttweaker.item.IItemStack` devient `crafttweaker.api.item.IItemStack`).

Et ceci : il n'y a aucun moyen pour un utilisateur de script de lister toutes les méthodes fournies par une classe ou de contourner les restricitions imposées par ZenScript avec cette réflexion. C'est, en fait, plus un outil de développement utile pour s'assurer que les types exposés par une intégration CraftTweaker soient correctement convertis entre le script et le véritable backend.

Pour commencer, veuillez consulter la documentation de [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) ou [`Classe`](/Mods/Boson/Reflection/Class/).
