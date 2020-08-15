# Créer un composé
Génération de composés d'alchimie personnalisés

# Paquet
```zenscript
mods.alchimie.Créer un composé
```

## Chargeur
Ceci doit être chargé avec l'alchimie `#loader`

## Méthodes
- **méta int** méta pour une nouvelle compilation
- **Nom de la chaîne de caractères** Nom pour la nouvelle compilation
- **int rouge** composé rouge ombre, RGB
- **int vert** composé vert vert, RGB
- **int bleu** composé bleu azur, RGB
- **Object[][]** Chaque tranche contient un élément différent suivi par une virgule et la quantité à utiliser dans votre Composé

## Création
```zenscript
mods.alchimie.Util.createCompound(int meta, String name, int red, int green, int blue, Object[][] components);

mods.alchemistry.Util.createCompound(1000, "vibreur sufide", 20, 69, 185,
[["vibranium", 1],
 ["soufre", 3]]);
```

## Notes
- Veuillez utiliser des noms en minuscules
- La ligne '#loader alchemistry' est requise en haut du fichier. Ce fichier ne peut être utilisé que pour créer des éléments et des composés, d'autres recettes doivent être placées dans d'autres fichiers.
- Le champ des composants nécessite que chaque entrée soit un tableau comme ["cellulose", 5], indiquant l'élément/composé et sa quantité. Les arguments de chaîne de caractères sont utilisés ici plutôt que dans itemstacks pour s'assurer que seuls les éléments/composés sont utilisés.
- Le champ méta est requis pour s'assurer que vos nouveaux composés ont un identifiant non modifiable, même lorsque d'autres composés sont créés ou supprimés. Chaque composé doit avoir une valeur de méta unique. Au moment de cette écriture, le mod n'utilise que les méta-valeurs entre 0 et 35, mais je commencerai à numéroter votre méta à 1000 (comme vu ci-dessus) ou plus pour m'assurer que vos composés personnalisés n'entrent jamais en conflit avec les recettes internes de l'Alchimie
