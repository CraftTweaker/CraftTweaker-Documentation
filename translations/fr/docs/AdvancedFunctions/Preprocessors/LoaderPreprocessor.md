# Pré-processeur de chargement

Le préprocesseur du chargeur définira le chargeur du script.

## Appel

Vous appelez le préprocesseur du chargeur en ajoutant `#loader loaderName` à votre fichier de script avec `loaderName` qui est le nom du chargeur auquel vous voulez assigner le script.  
Exemple : `#loader contenttweaker`

## Ce qu'il fait

Les scripts avec le préprocesseur du chargeur ne seront chargés que par le chargeur spécifié.  
Dans l'exemple ci-dessus, le chargeur de crafttweaker ne touchera pas le fichier, à la place le chargeur appelé "contentTweaker" exécutera ce script.  
Si vous ne spécifiez pas ce préprocesseur, il sera par défaut d'être "crafttweaker".