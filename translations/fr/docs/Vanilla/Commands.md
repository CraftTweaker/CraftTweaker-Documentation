# Commandes

CraftTweaker ajoute des commandes qui vous aideront dans la création de scripts, elles sont fournies pour aider à réduire le temps de développement des scripts.

The prefix for commands are: `/crafttweaker` or `/ct`

You can also use one of these aliases: `/minetweaker` or `/mt`

Toutes les commandes peuvent être trouvées en jeu en faisant :

`/crafttweaker help`

ou

`/ct aide`

# Liste des commandes

## Biomes

Utilisation:

`/crafttweaker biomes`

`/ct biomes`

Description :

Liste tous les biomes qui sont dans le jeu.

## Types de biomètre

Utilisation:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

Description :

Liste tous les types de biomètre qui sont dans le jeu.

## BlockInfo

Utilisation:

`/crafttweaker blockinfo`

`/ct blockinfo`

Description :

Active ou désactive le lecteur de blocs. En mode bloc info, faire un clic droit sur un bloc vous indiquera son nom, ses métadonnées et ses données d'entités de tuiles le cas échéant.

## Blocs

Utilisation:

`/blocscrafttweaker`

`blocs /ct`

Description :

Affiche une liste de tous les blocs du jeu dans le fichier crafttweaker.log.

## Bugs

Utilisation:

`/crafttweaker bugs`

`/ct bugs`

Description :

Ouvre votre navigateur avec le gestionnaire de bugs GitHub.

## Conflit

Utilisation:

`/crafttweaker conflict`

`Conflit /ct`

Description :

Affiche une liste de toutes les recettes de tables d'artisanat en conflit dans le fichier crafttweaker.log.  
Notez que cela ne fonctionne que sur un CLIENT avec JEI installé !

## Discord.

Utilisation:

`/crafttweaker discord`

`/ct discord`

Description :

Ouvre ton navigateur avec un lien vers [le serveur Discord](https://www.discord.blamejared.com).

## Documents

Utilisation:

`/crafttweaker docs`

`/ct docs`

Description :

Ouvre votre navigateur à cette page de documentation (identique à `/ct wiki`).

## DumpZs

Utilisation:

`/crafttweaker dumpzs`

`/ct dumpzs`

Description :

Affiche un dump ZenScript dans un dossier crafttweaker_dump de votre répertoire minecraft sous forme de fichier HTML.  
Vous pouvez utiliser une ou plusieurs cibles de vidage qui seront exécutées consécutivement (si vous fournissez une cible deux fois, elle sera exécutée deux fois).  
Les cibles peuvent être trouvées en utilisant la saisie automatique (clé de tabulation).  
Par défaut `log`, `html` et `json` sont enregistrés comme cibles.  
Cela inclura tous les gestionnaires de bracket enregistrés, ZenTypes, Global Functions, ZenExpansions et tous les paquets enregistrés, y compris leurs méthodes.  
Notez que tous ces éléments ne peuvent pas être utilisés dans les scripts !

## Entités

Utilisation:

`/entités crafttweaker`

`/ct entités`

Description :

Affiche une liste de toutes les entités du jeu dans le fichier crafttweaker.log.

## Donner un objet

Utilisation:

`/crafttweaker donne <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

Description :

Donne au joueur l'objet en utilisant la syntaxe de gestion des bracket de CrT.  
Vous pouvez également appliquer des balises en ajoutant un `. ithTag()` appel.  
Notez que c'est un analyseur assez simple et peut ne pas fonctionner pour chaque cas !

## Main

Utilisation:

`/crafttweaker hand`

`/ct main`

Description :

Affiche le nom de l'objet dans votre main dans le chat.

Copie également le nom dans le presse-papiers et affiche les entrées de dictée.

## Inventaire

Utilisation:

`/inventaired'artisanat`

`/ct inventaire`

Description :

Affiche une liste de tous les éléments de votre inventaire dans le fichier crafttweaker.log.

## Catégories Jei

Utilisation:

`/catégories jei de crafttweaker`

`/ct catégories jei`

Description :

Affiche une liste de toutes les catégories jei enregistrées dans le fichier crafttweaker.log.  
Nécessite que JEI soit installé (surprise)!

## Json

Utilisation:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Description :

Affiche la note de l'objet dans votre main en JSON dans le chat.  
Ce format diffère du formatage IData utilisé par CraftTweaker.  
Vous pouvez cliquer dessus pour le copier dans votre presse-papiers.  
Vous pouvez également privider l'argument `échappé` pour échapper automatiquement à la chaîne résultante.

## Liquides

Utilisation:

`/crafttweaker liquids`

`/ct liquides`

Description :

Affiche une liste de tous les liquides du jeu dans le fichier crafttweaker.log.

## Logs

Utilisation:

`/log/crafttweaker`

`log /ct`

Description :

Envoie un lien cliquable pour ouvrir le fichier crafttweaker.log.

## Mods

Utilisation:

`/crafttweaker mods`

`/ct mods`

Description :

Affiche une liste de tous les mods et leurs versions dans le fichier crafttweaker.log et l'imprime dans le chat.

## Noms

Utilisation:

`/crafttweaker names [category]`

`Noms /ct [category]`

Description :

Affiche une liste de tous les éléments du jeu dans le fichier crafttweaker.log.  
L'argument de la catégorie `` est facultatif et va étendre la liste avec les informations suivantes :

* temps de brûlure
* onglets créatifs
* endommagable
* affichage
* enchantement
* valeur alimentaire
* maxdamage
* maxstack
* maxuse
* modifier
* rareté
* réparable
* coût de réparation
* valeur de saturation
* délocaliser

Vous pouvez également voir tous les paramètres disponibles en utilisant la fonction de saisie automatique de la touche TAB.

## Nbt

Utilisation:

`/crafttweaker nbt`

`/ct nbt`

Description :

Affiche le NBT du bloc que vous regardez ou l'objet que vous tenez au fichier crafttweaker.log.

## OreDict

Utilisation:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

Description :

Affiche une liste de toutes les entrées OreDict du jeu dans le fichier crafttweaker.log.

Si un nom est fourni, les noms de tous les éléments enregistrés dans l'oredict seront affichés dans le fichier crafttweaker.log.

## Potions

Utilisation:

`potions /crafttweaker`

`potions /ct`

Description :

Affiche une liste de toutes les potions du jeu dans le fichier crafttweaker.log.

## Noms de recette

Utilisation:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct noms de recettes`  
`/ct noms de recettes [modid]`

Description :

Affiche une liste de tous les noms de recettes du jeu dans le fichier crafttweaker.log.  
Une modification peut être fournie pour filtrer les résultats.

## Recettes

Utilisation:

`/recettes d'artisanat`

`recettes /ct`

Description :

Affiche une liste de toutes les recettes de fabrication du jeu dans le fichier crafttweaker.log.

## Recettes (Hand)

Utilisation:

`/artisan recettes main`

`main /ct recettes`

Description :

Affiche une liste de toutes les recettes de fabrication pour l'objet dans la main du joueur dans le jeu au fichier crafttweaker.log.

## Recettes (Furnace)

Utilisation:

`/four de recettes d'artisanat`

`fourneau /ct recettes`

Description :

Affiche une liste de toutes les recettes de fours du jeu dans le fichier crafttweaker.log.

## Scripts

Utilisation:

`/crafttweaker scripts`

`Scripts /ct`

Description :

Envoie un lien cliquable pour ouvrir le répertoire des scripts.  
Peut également être exécuté à partir d'une ligne de commande qui affiche le chemin absolu vers le répertoire vers le journal.

## Graines

Utilisation:

`/graines d'artisanat`

`/ct graines`

Description :

Affiche une liste de tous les éléments du registre de la graine dans le fichier crafttweaker.log.

## Syntaxe

Utilisation:

`/crafttweaker syntax`

`Syntaxe /ct`

Description :

Lit à travers tous vos scripts et affiche toutes les erreurs qu'il trouve dans vos syntaxes. Notez que cela n'appliquera pas vos modifications de script, vous devez redémarrer votre jeu pour les voir en vigueur.

## Wiki

Utilisation:

`/crafttweaker wiki`

`/ct wiki`

Description :

Ouvre votre navigateur à cette page wiki (identique à `/ct docs`).

## ZsLint

Utilisation:

`/crafttweaker zslint`

`/ct zslint`

Description :

Démarre le socket zslint.