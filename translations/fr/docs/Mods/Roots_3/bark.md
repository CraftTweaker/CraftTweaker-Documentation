### Classe

```zenscript
Importer mods.roots.Bark;
```

#### Méthodes

```zenscript
void addRecipe(
  string name, // le nom de la recette
  IItemStack woodLog, // l'équivalent de itemstack du log de bois cassé
  IItemStack écork // le itemstack du type d'écorce que ce log produit (y compris le nombre de pile)
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack écork // le itemstack du type d'écorce à supprimer (excluant la taille de la pile)
);
```

* * *

### Exemples

```zenscript
import mods.roots.Bark;

// produira 2 sables à partir d'un bloc de melon cassé par un couteau.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>*2);

// Supprime l'écorce de bois de la liste par défaut
Bark.removeRecipe(<roots:bark_wildwood>);
```