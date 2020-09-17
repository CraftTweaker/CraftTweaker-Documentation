# ModLoaderPreprocessor

Le préprocesseur modLoaded n'exécute un script que si un certain mod est présent.

## Appel

Vous appelez le modLoaded Preprocessor en ajoutant `#modloaded modID` à votre fichier de script, avec `modID` comme le modId que vous voulez vérifier :  
Exemple : `#modloaded minecraft`

Vous pouvez également fournir plusieurs modID :  
`#modloaded minecraft tbuild` ne sera exécuté que si minecraft ET tbuild sont chargés.

You can also invert a mod condition so that the mod is only loaded if the mod is NOT loaded: `#modloaded !tconstruct minecraft` will only be executed if minecraft is present and tconstruct is NOT present

## Ce qu'il fait

Si vous avez ajouté ce préprocesseur à un script, il ne sera exécuté que si les modID fournis sont présents, en d'autres termes si les mods respectueux sont chargés.