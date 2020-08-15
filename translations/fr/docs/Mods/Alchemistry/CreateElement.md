# Créer un élément
Création d’éléments personnalisés pour l’alchimie

# Paquet
`mods.alchimie.Util.createElement`
## Chargeur
Ceci doit être chargé avec l'alchimie `#loader`

## Méthodes
- **int atomicNumber** ID pour un nouvel élément
- **Nom de la chaîne de caractères** Nom des nouveaux éléments
- **Abrébation de chaînes** Nouveaux éléments
- **int rouge** Élément rouge ombre, RGB
- **int vert** Élément vert ombre, RGB
- **int bleu** Élément bleu ombre, RGB

## Création
```zenscript
mods.alchimie.Util.createElement(int atomicNumber, String name, String abréviation, int red, int green, int blue);

mods.alchemistry.Util.createElement(150,"vibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## Notes

- Veuillez utiliser des noms en minuscules
- Les numéros atomiques préexistants ne peuvent pas être remplacés
- La ligne '#loader alchemistry' est requise en haut du fichier. Ce fichier ne peut être utilisé que pour créer des éléments et des composés, d'autres recettes doivent être placées dans d'autres fichiers.
- REMARQUE : Depuis la v1.0.2, le chargeur de ressources de mods doit être utilisé pour inclure l'image et le modèle json pour les éléments personnalisés. Si vous souhaitez générer automatiquement ces ressources, j'ai créé un programme JAR en ligne de commande [ici](https://github.com/al132mc/alchemistry-resource-creator/releases) pour le faire.
