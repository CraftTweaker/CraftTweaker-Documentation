# Référence de script croisé

Tous les scripts qui ont des [variables statiques](/AdvancedFunctions/Global_Static_Variables/) ou [fonctions personnalisées](/AdvancedFunctions/Custom_Functions/) sont enregistrés dans la référence cross-script.  
Cela vous permet d'accéder à ces champs/fonctions en utilisant la notation par point.

## Caractéristiques

- Les références de scripts croisés commencent par `scripts.`
- Vous spécifiez le chemin relatif depuis le dossier des scripts (par exemple `scripts.mySubfolder.a.zs`)
- Vous pouvez utiliser la notation par point dans une instruction [import](/AdvancedFunctions/Import/) si vous choisissez de le faire.
- ZS vérifie d'abord les répertoires correspondants, puis les fichiers ou valeurs correspondants.

## Exemple

Disons que nous avons deux scripts : `a.zs` et `b.zs`.

a.zs:

```zenscript
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs

```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```