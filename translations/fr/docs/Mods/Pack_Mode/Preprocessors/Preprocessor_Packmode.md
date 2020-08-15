# Pré-processeur Packmode

Le Preprocessor Packmode changera le script pour qu'il ne soit exécuté que si un certain packmode est activé dans le fichier de configuration du packmode

## Appel

Vous appelez le préprocesseur Packmode en ajoutant `#packmode mode(s)` à votre fichier de script, avec `mode(s)` qui est le ou les mode(s) du pack dans lequel vous voulez que le script soit exécuté

## Exemple

`#packmode normal expert` activerait le script en mode normal et expert

```zenscript
#packmode normal
import crafttweaker.items.IItemStack ;

print("Si j'apparaît sur vos CT-logs, packmode normal est activé !");
```

## Ce qu'il fait

Le Processeur n'autorise l'exécution du script que si un certain mode de paquet est activé.