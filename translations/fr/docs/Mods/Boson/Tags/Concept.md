# Tags

Les tags sont un concept puissant qui est présent dans Minecraft Vanilla depuis 1.13. Il permet aux joueurs et aux fabricants de datapack de définir un ensemble d'éléments à considérer comme identiques dans un contexte donné. suppression de certains du durcodage des blocs et des éléments dans le code.

Les tags sont représentés comme un ensemble de fichiers JSON placés dans le répertoire `data/<namespace>/tags/<tag-type>` , où `espace de noms` identifie l'espace de noms auquel les balises appartiennent, et `<tag-type>` le type d'éléments que les balises groupes.

Ce concept peut sembler similaire dans le concept du dictionnaire d'Ore, et en fait, il est presque le même. Contrairement au dictionnaire de minerai, les balises peuvent également se référer, certains agissant en tant que groupes pour d'autres. De plus, alors que le dictionnaire de minerai ne fonctionne qu'avec des éléments (i.e. choses qui peuvent être placées dans votre inventaire), les balises fonctionnent également avec des blocs, des fluides et d'autres types si nécessaire.

L'implémentation de Boson diffère de celle de Vanilla en raison de l'énorme différence entre les changements internes dans 1. 3, mais cela fonctionne presque de la même manière, sauf pour permettre une extension mod plus facile avec de nouveaux types de tags. Pour cette raison, l'intégration de CraftTweaker est également différente.

Pour commencer, lisez comment [obtenir un tag via un gestionnaire de parenthèses](/Mods/Boson/Tags/BracketHandler/).
