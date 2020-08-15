# Mods chargés

Vous pouvez utiliser le [mot-clé global](/Vanilla/Global_Functions/) `loadedMods` pour accéder à tous les mods actuellement chargés.  
Si nécessaire, vous pouvez importer la classe en utilisant `import crafttweaker.mods.ILoadedMods ;`

## Vérifier si un mod est chargé

Utilisez la fonction `in` pour vérifier si un mod est chargé;  
Vous pouvez également utiliser la méthode `contient`:

```zenscript
//si MinecraftCoderPack est chargé
if(loadedMods dans "mcp"){
    print("success!");
}

//si MinecraftCoderPack est chargé
if(loadedMods.contains("mcp"){
    print("success!!!");
}
```

## Récupérer un mod spécifique

Vous pouvez récupérer un mod spécifique en tant qu'IMod tant que vous avez son ID

```zenscript
//récupère le mod minecraftCoderPack
val mod = loadedMods["mcp"];
```

## Itérer à travers la modList

Vous pouvez itérer à travers la liste des mods chargés comme ceci:

```zenscript
//affiche toutes les définitions d'articles enregistrés, non recommandées dans les plus gros packs !
//la variable mod sera un type IMod
pour le mod dans loadedMods {
    print(mod. ame ~ ":");
    pour l'élément dans le mod. tems {
        print("\t\t" ~ item. isplayName);
    }
}
```

# IMod

L'interface IMod vous fournit quelques informations générales sur un mod spécifique.  
Si nécessaire, il peut être importé à l'aide de `import crafttweaker.mods.IMod.`

| Zengetter | Que fait-il                                  | Type de retour                             | Usage                |
| --------- | -------------------------------------------- | ------------------------------------------ | -------------------- |
| id        | Renvoie l'id du mod                          | chaîne de caractères                       | `mod.id`             |
| Nom       | Renvoie le nom interne du mod                | chaîne de caractères                       | `mod.name`           |
| version   | Renvoie la version du mod                    | chaîne de caractères                       | `mod.version`        |
| Libellé   | Renvoie la description du mod                | chaîne de caractères                       | `Description du mod` |
| Eléments  | Renvoie tous les éléments ajoutés par le mod | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`          |