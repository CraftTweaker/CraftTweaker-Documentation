# Verrouillage de la recherche

## Caractéristique:

Cette fonctionnalité vous permet de verrouiller l'acquisition de Recherche par rapport à un ensemble de besoins. Cela signifie par exemple que vous pouvez définir l'acquisition de "Golem Research" derrière l'exigence d'être dans une certaine dimension (comme dans l'exemple ci-dessous). Cela signifie que vous devez être dans cette dimension pour acquérir la recherche, mais une fois que vous avez la recherche, vous l'avez. Il ne « réinitialise » pas ou ne se désapprend pas en laissant la dimension ou en ne remplissant plus les exigences en général !

## Syntaxe :

    mods.compatskills.Thaumcraft.addResearchLock(String researchKey, String... exigences);
    
    mods.compatskills.Thaumcraft.addResearchLock("GOLEMVISION", "dim|1");