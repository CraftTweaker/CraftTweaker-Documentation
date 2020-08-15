# Le concept

La plupart des utilisations de Maths dans ZenScript peuvent être couvertes via les quatre opérations de base : ajout, soustraction, multiplication et division. ZenScript fournit également l'accès à la fonction `pow` qui effectue l'opération d'alimentation. Mais c'est tout. Des opérations mathématiques plus avancées ne peuvent pas être effectuées, et nécessiterait une réimplémentation complète avec les tables de recherche et ne profiterait pas des optimisations matérielles à cet égard, en particulier pour les processeurs modernes.

C'est là que ZenScriptX Math entre en jeu, fournissant un ensemble de classes et quelques opérations arithmétiques de base qui peuvent être d'utilité générale, tout en profitant en grande partie des optimisations matérielles, car la plupart d'entre elles sont implémentées au niveau natif (via quelques indirections dues à l'exécution du ZenScript VM).

Chaque section de documentation fournira à l'utilisateur une liste des fonctions fournies et leur comportement.

La liste actuelle des classes fournies qui sont implémentées sont:

- [Maths](/Mods/Boson/Math/Math/) pour des fonctions mathématiques courantes (par exemple, péché, cosine, logarithme...)
