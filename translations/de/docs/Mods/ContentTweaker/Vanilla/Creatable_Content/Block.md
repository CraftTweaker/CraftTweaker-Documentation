# Blockieren

## Felder

Erforderliche Felder werden niemals einen Standardwert haben, leere Standardwerte sind Null.

Alle Felder können über das Feld`Name` gesetzt werden, z.B. `block.setUnlocalizedName("name");` und erhalten über`Name`;

| Name                | Type                                                                                                      | Benötigt | Standardwert                                                                                      | Notizen                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| axisAusrichten BB   | [MCAxisAlignedBB](/Mods/ContentTweaker/Vanilla/Types/Block/MCAxisAlignedBB/)                              | Nein     | Voller Block                                                                                      | Lässt dich das Begrenzungsfeld des Blocks festlegen                                                         |
| beaconBase          | boolean                                                                                                   | Nein     | false                                                                                             | Kann dieser Block als Teil eines Leuchtturms benutzt werden?                                                |
| blockColorLieferant | [IBlockColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockColorSupplier/) | Nein     | -1 als Farbe                                                                                      | Farbe des Blocks                                                                                            |
| blockHardness       | float                                                                                                     | Nein     | 5.0                                                                                               | Wie lange dauert es zu brechen                                                                              |
| blockEbene          | String                                                                                                    | Nein     | "SOLID"                                                                                           | "SOLID", "CUTOUT_MIPPED", "CUTOUT", "TRANSLUCENT"                                                           |
| blockmaterial       | [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)                      | Nein     | Eisen                                                                                             | Das Basismaterial des Blocks                                                                                |
| blockresistenz      | float                                                                                                     | Nein     | 5.0                                                                                               | Explosionswiderstand                                                                                        |
| blockSoundtyp       | [Soundtyp](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/)                                | Nein     | Metall                                                                                            | Der Tontyp des Blocks (bestimmt Dinge wie den Break-Sound)                                                  |
| kreativ-Tab         | [CreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                               | Nein     | Sonst                                                                                             | Die Kreative Registerkarte, in der das Element angezeigt wird                                               |
| dropHandler         | [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/)     | Nein     |                                                                                                   | Die Kreative Registerkarte, in der das Element angezeigt wird                                               |
| entitySpawnable     | boolean                                                                                                   | Nein     | true                                                                                              | Kann verwendet werden, um zu verhindern, dass Entitäten auf diesem Block spawnen                            |
| enumBlockRenderType | String                                                                                                    | Nein     | "MODEL"                                                                                           | "INVISIBLE", "LIQUID", "ENTITYBLOCK_ANIMATED", "MODEL" → Sets how the block is rendered                     |
| vollblöcke          | boolean                                                                                                   | Nein     | Richtig                                                                                           | Wird für Rendering und Lichtberechnungen verwendet                                                          |
| Schwerkraft         | boolean                                                                                                   | Nein     | false                                                                                             | Ist dieser Block von Schwerkraft beeinflusst                                                                |
| itemColorLieferant  | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)   | Nein     | -1 als Farbe                                                                                      | Die Farbe des Blocks, wenn er im Artikelformular ist                                                        |
| helle Deckkraft     | int                                                                                                       | Nein     | 255, wenn fullBlock wahr ist oder 0                                                               | Durchdringt Licht durch                                                                                     |
| lichtwert           | int                                                                                                       | Nein     | 0                                                                                                 | Lichtstärke des Blocks, reicht von 0-1. Dieser Wert wird mit 15 multipliziert, um den Endwert zu bestimmen. |
| onBlockBreak        | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | Nein     |                                                                                                   | Wird aufgerufen, wenn Block kaputt ist.                                                                     |
| onBlockPlace        | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | Nein     |                                                                                                   | Wird aufgerufen, wenn Block platziert wird.                                                                 |
| onRandomTick        | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | Nein     |                                                                                                   | Aufgerufen auf einem zufälligen Tick-Ereignis.                                                              |
| onUpdateTick        | [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/)               | Nein     |                                                                                                   | Wird aufgerufen, wenn Block eine Blockaktualisierung erhält.                                                |
| passable            | boolean                                                                                                   | Nein     | Abhängig von [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) | Können Spieler diesen Block passieren?                                                                      |
| austauschbar        | boolean                                                                                                   | Nein     | Abhängig von [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) | Kann dieser Block durch einen anderen Block ersetzt werden?                                                 |
| rutschig            | float                                                                                                     | Nein     | 0.6f                                                                                              | Eisblöcke sind 0.98f                                                                                        |
| texture-Standort    | [CTResource-Standort](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                   | Nein     | null                                                                                              | Der Ressourcenstandort des Blocks, der für Texturen usw. verwendet wird.                                    |
| toolclass           | String                                                                                                    | Nein     | spitzhacke                                                                                        | Werkzeug benötigt um Block zu zerbrechen                                                                    |
| toollevel           | int                                                                                                       | Nein     | 2                                                                                                 | Werkzeug-Level erforderlich um Block zu zerbrechen                                                          |
| durchsichtig        | boolean                                                                                                   | Nein     | false                                                                                             | Durchsehen                                                                                                  |
| unlocalizedName     | String                                                                                                    | Ja       |                                                                                                   | Name, sollte alle Kleinbuchstaben sein                                                                      |
| witherProof         | boolean                                                                                                   | Nein     | false                                                                                             | Du kannst diesen Block durch Wither zerstören                                                               |

## Beispiele

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:ice>);
antiIceBlock.setLightOpacity(3);
antiIceBlock.setLightValue(0);
antiIceBlock. etBlockHardness(5.0);
antiIceBlock.setBlockResistance(5.0);
antiIceBlock.setToolClass("pickaxe");
antiIceBlock.setToolLevel(0);
antiIceBlock.setBlockSoundType(<soundtype:snow>);
antiIceBlock.setSlipperiness(0.3);
antiIceBlock.register();
```

## Lokalisierung des Blocks

Sie müssen `tile.contenttweaker.blockName = Lokalisierter Name` zu den entsprechenden Sprachdateien hinzufügen.  
Alternativ können Sie CraftTweaker's [Lokalisierungsfunktion](/Vanilla/Game/IGame/)verwenden, obwohl es empfohlen ist, die Sprachdateien zu verwenden!