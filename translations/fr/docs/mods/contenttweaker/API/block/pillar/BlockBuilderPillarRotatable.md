# BlocBuilderPillarRotatable

Un constructeur de blocs spécial qui vous permet de créer des blocs qui peuvent être tournés de la même manière que les logs. <p> Cela signifie qu'il a une texture pour le haut et le bas et une texture pour les côtés. Par défaut, les emplacements de ces côtés sont le nom du bloc, suivi par et soit `_end` ou `côtés`. Comme pour la plupart des choses ici, les images sont générées par défaut pour vous.

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
mods.contenttweaker.block.pillar.BlocBuilderPillarRotatable
```

## Interfaces implémentées
BlockBuilderPillarRotatable implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.format@@0 BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Méthodes
### construire

Instructions de CoT pour construire ce que ce constructeur est censé construire.

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Paramètre                    | Type de texte        | Libellé                                       |
| ---------------------------- | -------------------- | --------------------------------------------- |
| Localisation de la ressource | Chaîne de caractères | Le chemin de la ressource pour donner ce bloc |


### format@@0 EndTexture

Permet de remplacer le chemin de la texture que les côtés de la fin (haut/bas) doivent utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.block.pillar.BlocBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Paramètre  | Type de texte                                                                              | Libellé                                      |
| ---------- | ------------------------------------------------------------------------------------------ | -------------------------------------------- |
| endTexture | [format@@0 crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture à utiliser pour les côtés finaux. |



Permet de remplacer le chemin de la texture que les côtés de la fin (haut/bas) doivent utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut. Utilise une fonction qui prend le nom du bloc comme entrée et retourne la texture de fin pour lui.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.block.pillar.BlocBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture comme fonction.Fonction<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| Paramètre  | Type de texte                                                                                                                                                                                           | Libellé                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| endTexture | fonction.Fonction&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La fonction à utiliser |


### Avec Texture latérale

Vous permet de remplacer le chemin de la texture que les côtés (tout sauf le haut/bas) doivent utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.block.pillar.BlocBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Paramètre    | Type de texte                                                                              | Libellé                               |
| ------------ | ------------------------------------------------------------------------------------------ | ------------------------------------- |
| sidesTexture | [format@@0 crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture à utiliser pour les côtés. |



Vous permet de remplacer le chemin de la texture que les côtés (tout sauf le haut/bas) doivent utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut. Utilise une fonction qui prend le nom du bloc comme entrée et retourne la texture de fin pour lui.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.block.pillar.BlocBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture comme fonction.Fonction<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Paramètre    | Type de texte                                                                                                                                                                                           | Libellé                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| sidesTexture | fonction.Fonction&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La fonction à utiliser |



