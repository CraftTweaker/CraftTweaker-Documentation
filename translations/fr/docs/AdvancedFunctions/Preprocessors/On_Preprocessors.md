# Sur les préprocesseurs

## Que sont les préprocesseurs

Comme son nom l'indique, les préprocesseurs sont exécutés avant l'exécution du script.  
Ils peuvent effectuer diverses actions telles que l'activation du mode débogage ou Supress Bracket Errors.

## Appel d'un préprocesseur

Un préprocesseur peut être appelé en utilisant la fonction #commentaire.  
Soyez prudent avec les commentaires car vous pouvez commencer un mot clé avec un préprocesseur.

```zenscript
#debug est mon mot favori que j'aime ajouter partout comme commentaire
```

✓ Activer le mode de débogage comme `#debug` est trouvé. Si vous voulez vraiment vous assurer qu'un cas si rare ne se produise pas, utilisez `//` pour faire des commentaires.